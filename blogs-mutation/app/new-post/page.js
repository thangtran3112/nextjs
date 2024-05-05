import FormSubmit from "@/components/form-submit";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

const TITLE = "title";
const IMAGE = "image";
const CONTENT = "content";

export default function NewPostPage() {
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/FormData
   * React form does extend from html Form with some extra features
   * React 18 form action is not stable on client-side yet, but it could be stable in future versions
   * https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action
   */
  async function createPost(formData) {
    "use server";
    const title = formData.get(TITLE);
    const image = formData.get(IMAGE);
    const content = formData.get(CONTENT);

    // console.log({ title, image, content });

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/feed");
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
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
      </form>
    </>
  );
}
