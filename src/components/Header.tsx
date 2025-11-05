"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-6 w-6" />
          <span>{siteConfig.name}</span>
        </Link>
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
          <Button href={`https://wa.me/${siteConfig.phone.whatsapp}`} className="hidden sm:inline-flex" variant="primary">WhatsApp</Button>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <span className="i">≡</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-sm">
            {siteConfig.nav.map((i) => (
              <Link key={i.href} href={i.href} className="py-2" onClick={() => setOpen(false)}>
                {i.label}
              </Link>
            ))}
            <Button href={`https://wa.me/${siteConfig.phone.whatsapp}`} variant="primary" className="w-full">WhatsApp</Button>
          </div>
        </div>
      )}
    </header>
  );
}
