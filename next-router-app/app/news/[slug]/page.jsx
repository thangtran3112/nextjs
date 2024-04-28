import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const NewsDetailPage = ({ params }) => {
  const newSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newSlug);

  if (!newsItem) {
    //show the closest not-found page
    notFound();

    //Alternative: return <NewsNotFoundPage />
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
