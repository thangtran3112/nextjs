import { cache } from "react";
import { unstable_cache as nextCache } from "next/cache";
import sql from "better-sqlite3";

const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}

/**
 * Using React cache for non-fetch backend operations
 * Both pages and layout are calling getMessages, but only 1 request is made
 * This implies deduplication
 * It is not mandatory to wrap React.cache within nextCache
 * */
export const getMessages = nextCache(
  cache(() => {
    console.log("Fetching messages from db");
    return db.prepare("SELECT * FROM messages").all();
  }),
  ["messages"]
);
