"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

/**
 * We can not add 'use server'; directive inside a component
 * which already has a 'use client' directive
 * But we can export a server action,into a component which uses 'use client'
 * prevState will be in format { message : sth}
 */
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"), //title is the name of the input field
    summary: formData.get("summary"),
    image: formData.get("image"), //name must be passed to <ImagePicker>
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  //we could have a use a validation library here, like joi, zod, etc. but we are keeping
  //it simple here
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // or throw new Error("Invalid meal inputs");

    //response can be in any form, but it must be serializable. No method insides
    return {
      message: "Invalid meal inputs",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
