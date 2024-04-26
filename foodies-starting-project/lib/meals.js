import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "us-west-2",
});
const db = sql("meals.db"); // <- this was already there!

export async function getMeals() {
  //artificial delay to test loading
  await new Promise((resolve) => setTimeout(resolve, 500));
  return db.prepare("SELECT * FROM meals").all();
}

// it is not mandatory to wrap the db action in an async function
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "nextjs-foodies-images",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  //after saving image to public folder, we do not need 'public' in image path
  //by default public folder will be exposed and we can access images just from /images
  meal.image = fileName;
  //Notes: Order of properties in (@) must match the order in (title, summary, instructions, creator, creator_email, image, slug)
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
