import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

/**
 * Optimize app with metadata in page.js or layout.js
 * Unless a page specify its own metadata
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
