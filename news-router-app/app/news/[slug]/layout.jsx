/**
 * Parallel layout for {modal} on top of {children}, which is the NewsDetailPage
 * under the news/[slug]/page.jsx
 */
export default function NewsDetailLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
