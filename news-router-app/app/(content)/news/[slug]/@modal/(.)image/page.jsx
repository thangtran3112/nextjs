"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

/**
 * Intercepting page for ./image with the folder name of (.)image
 * This intercepted page will show up when you are not directly
 * copying the full URL of the news/[slug]/image to browser
 * Note: @modal is ignored, so (.)image is condisered to be started at [slug]/image level
 * */
export default function InteceptedImagePage({ params }) {
  const router = useRouter();
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
