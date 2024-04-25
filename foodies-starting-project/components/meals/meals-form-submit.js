"use client";
import { useFormStatus } from "react-dom";

//create a child client-side component to avoid using the whole ShareMealPage as client-side
export default function MealsFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
