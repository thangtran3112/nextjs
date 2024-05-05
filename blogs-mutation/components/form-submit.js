"use client";
import { useFormStatus } from "react-dom";
/*
 * Keep track of form status "pending", "submitted" with react useFormStatus hook
 * https://react.dev/reference/react-dom/hooks/useFormStatus#use-form-status
 */
export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Creating post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
