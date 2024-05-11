"use client";
import Link from "next/link";
import { useFormState } from "react-dom";

import { auth } from "@/actions/auth-actions";
import { Login, Signup } from "@/lib/constants";

export default function AuthForm({ mode }) {
  //preconfigure auth with parameters, first arg is "this" self object,
  //we can supply args from second position of bind(null, arg1, arg2,...)
  const [formState, formAction] = useFormState(auth.bind(null, mode), {});
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === Login ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === Login && (
          <Link href={`/?mode=${Signup}`}>Create an account.</Link>
        )}
        {mode === Signup && (
          <Link href={`/?mode=${Login}`}>Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
