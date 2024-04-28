"use client";

/**
 * An Error can happens on both client and server for dynamic routes.
 * Therefore, we need to render the error on the client side.
 * This would avoid user being stuck on unhandled error in the browser.
 */
export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
