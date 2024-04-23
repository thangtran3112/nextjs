import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //artificial delay to test loading
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

// it is not mandatory to wrap the db action in an async function
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
