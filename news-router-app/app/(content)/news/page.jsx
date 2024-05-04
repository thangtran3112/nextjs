import NewsList from "@/components/news-list";
// import { DUMMY_NEWS } from "@/dummy-news";
export default async function NewsPage() {
  //NextJs extend fetch and add caching from NodeJs fetch
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news.");
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
