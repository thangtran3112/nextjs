import Messages from "@/components/messages";
export const TAG = "msg";
// import { unstable_noStore } from "next/cache";

//export semantic revalidate after 5 seconds
//export const revalidate = 0; //0 means no caching, this is not as buggy as "force-dynamic"

//always revalidate, same as cache="no-store", but file-wide revalidate
// export const dynamic = "force-dynamic"; //may not seem to work on next@14.2.3, try a different Next version

export default async function MessagesPage() {
  //another way to disable caching, for all requests under this component
  // unstable_noStore();

  const response = await fetch("http://localhost:8080/messages", {
    // headers: {
    //   "X-ID": "page",
    // },
    // cache: "no-store",
    next: { tags: [TAG] },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
