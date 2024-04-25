"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

/**
 * We can not add 'use server'; directive inside a component
 * which already has a 'use client' directive
 * But we can export a server action,into a component which uses 'use client'
 */
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"), //title is the name of the input field
    summary: formData.get("summary"),
    image: formData.get("image"), //name must be passed to <ImagePicker>
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
