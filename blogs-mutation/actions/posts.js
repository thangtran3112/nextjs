"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import { CONTENT, IMAGE, TITLE } from "@/constants";
import { uploadImage } from "@/lib/cloudinary";
/**
 * https://developer.mozilla.org/en-US/docs/Web/API/FormData
 * React form does extend from html Form with some extra features
 * React 18 form action is not stable on client-side yet, but it could be stable in future versions
 * https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-action
 */
export async function createPost(prevState, formData) {
  const title = formData.get(TITLE);
  const image = formData.get(IMAGE);
  const content = formData.get(CONTENT);

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }

  // console.log({ title, image, content });
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image upload failed, post was not created. Please try again."
    );
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
