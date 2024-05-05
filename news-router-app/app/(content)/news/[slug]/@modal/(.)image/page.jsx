import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

/**
 * Intercepting page for ./image with the folder name of (.)image
 * This intercepted page will show up when you are not directly
 * copying the full URL of the news/[slug]/image to browser
 * Note: @modal is ignored, so (.)image is condisered to be started at [slug]/image level
 * */
export default async function InteceptedImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
