"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        ZONE COMPANY
      </Link>

      <div className="nav-links">
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
        >
          Beranda
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
        >
          Tentang Kami
        </Link>

        <Link
          href="/services"
          className={
            pathname.startsWith("/services") ? "active" : ""
          }
        >
          Layanan
        </Link>
      </div>
    </nav>
  );
}
