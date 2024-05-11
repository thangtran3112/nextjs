import db from "./db";

export function createUser(email, password) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);
  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  //passing email to db prepare with get(email)
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
