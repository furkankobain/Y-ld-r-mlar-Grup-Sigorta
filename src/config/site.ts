export const siteConfig = {
  name: "Yıldırımlar Grup Sigorta",
  baseUrl: "https://yildirimlargrupsigorta.com.tr",
  phone: {
    display: "+90 5xx xxx xx xx",
    tel: "+905XXXXXXXXX",
    whatsapp: "905XXXXXXXXX",
  },
  email: "info@yildirimlargrupsigorta.com.tr",
  address: {
    line1: "Adres satırı (güncelleyin)",
    city: "İlçe/İl",
    region: "İl",
    postalCode: "00000",
  },
  openingHours: [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-15:00",
  ],
  sameAs: [
    // Sosyal medya bağlantıları varsa ekleyin
  ],
  nav: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Trafik", href: "/urunler/trafik" },
    { label: "Kasko", href: "/urunler/kasko" },
    { label: "Konut/DASK", href: "/urunler/konut-dask" },
    { label: "Sağlık", href: "/urunler/saglik" },
    { label: "Teklif Al", href: "/teklif-al" },
  ],
} as const;
