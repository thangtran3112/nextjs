import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

/** This would avoid [year] dynamic routers not found in parallel routing from /archive/2024 */
export default function LatestNewsPage() {
  const lastestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={lastestNews} />
    </>
  );
}
