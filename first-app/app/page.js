import Link from "next/link";
import Header from "@/components/header";

//header is not a special file names, like icon, layout, page, etc
export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
}
