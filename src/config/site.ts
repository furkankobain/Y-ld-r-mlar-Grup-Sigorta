export const siteConfig = {
  name: "Yıldırımlar Grup Sigorta",
  baseUrl: "https://yildirimlargrupsigorta.com.tr",
  phone: {
    display: "+90 505 973 18 66",
    tel: "+905059731866",
    whatsapp: "905059731866",
  },
  email: "iletisim@yildirimlargrupsigorta.com.tr",
  address: {
    line1: "Saracalar Mah., Otonomi Sitesi, A1 Blok, Akyurt",
    city: "Ankara",
    region: "Ankara",
    postalCode: "",
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
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Teklif Al", href: "/teklif-al" },
  ],
} as const;
