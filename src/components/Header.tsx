"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">{siteConfig.name}</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteConfig.nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-zinc-900 text-zinc-700">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${siteConfig.phone.tel}`} className="hidden sm:inline-flex rounded-md border px-3 py-2 text-sm hover:bg-zinc-50">
            Ara: {siteConfig.phone.display}
          </a>
          <a
            href={`https://wa.me/${siteConfig.phone.whatsapp}`}
            className="inline-flex rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-800"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
