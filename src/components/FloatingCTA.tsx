"use client";
import { siteConfig } from "@/config/site";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <a
        href={`https://wa.me/${siteConfig.phone.whatsapp}`}
        target="_blank"
        className="rounded-full bg-green-500 text-white px-4 py-3 shadow hover:bg-green-600 text-sm"
      >
        WhatsApp
      </a>
      <a
        href={`tel:${siteConfig.phone.tel}`}
        className="rounded-full bg-zinc-700 text-white px-4 py-3 shadow hover:bg-zinc-600 text-sm"
      >
        Ara: {siteConfig.phone.display}
      </a>
    </div>
  );
}
