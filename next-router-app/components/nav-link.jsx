"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Refactor client component to be as small as possible
 * Try to keep most of the logic and components in server side as possible
 */
export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
