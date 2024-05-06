"use client";
import { useFormState } from "react-dom";
import FormSubmit from "@/components/form-submit";
import { CONTENT, IMAGE, TITLE } from "@/constants";

export default function PostForm({ action }) {
  //https://react.dev/reference/react/useActionState
  //let react listen to form action on createPost function
  const [state, formAction] = useFormState(action, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name={TITLE} />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name={IMAGE}
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name={CONTENT} rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
