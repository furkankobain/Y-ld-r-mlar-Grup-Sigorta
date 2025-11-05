"use client";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto max-w-6xl px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)+8px)] grid grid-cols-3 gap-2 text-sm">
        <Button href="/teklif-al" className="w-full">
          <span className="mr-1">📝</span> Teklif Al
        </Button>
        <Button href={`tel:${siteConfig.phone.tel}`} variant="secondary" className="w-full">
          <span className="mr-1">📞</span> Ara
        </Button>
        <Button href={`https://wa.me/${siteConfig.phone.whatsapp}`} className="w-full">
          <span className="mr-1">💬</span> WhatsApp
        </Button>
      </div>
    </div>
  );
}
