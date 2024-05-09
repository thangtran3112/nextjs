import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { revalidateTag } from "next/cache";
import { TAG } from "../page";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);

    //revalidate all nested path under /messages
    // revalidatePath("/messages", "layout"); //another way to revalidate

    //revalidate only /messages but not nested children routes.
    // Work with both fetch and custom unstable_cache for custom data sources
    // revalidatePath("/messages");

    //revalidate all routes
    //revalidatePath("/", "layout");

    //revalidate requests, tagged with "msg". Must setup next: { tags: ["msg"] } inside each request
    // Work with both fetch and custom unstable_cache for custom data sources
    revalidateTag(TAG);

    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
