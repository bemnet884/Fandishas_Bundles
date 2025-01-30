"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const noHeaderRoutes = ["/contact", "/signin", "/about"];
  if (noHeaderRoutes.includes(pathname)) return null; // Hide Navbar on some pages

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link href="/">
        <h1 className="text-2xl font-bold">HumanHairShop</h1>
      </Link>
      <div className="space-x-6">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
