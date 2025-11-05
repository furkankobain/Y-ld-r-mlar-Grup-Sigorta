export const metadata = { title: "Hakkımızda" };

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 prose prose-zinc">
      <h1>Hakkımızda</h1>
      <p>
        Yıldırımlar Grup Sigorta, müşterilerine tüm branşlarda karşılaştırmalı teklif sunan,
        şeffaf ve çözüm odaklı bir sigorta acentesidir. Amacımız; ihtiyaca uygun teminatları doğru
        fiyatla buluşturmak ve hasar süreçlerinde yanınızda olmaktır.
      </p>
      <h2>Neden biz?</h2>
      <ul>
        <li>Birçok sigorta şirketiyle çalışma ve en iyi fiyat/teminat dengesi</li>
        <li>Hızlı teklif ve aynı gün dönüş</li>
        <li>Hasar anında uçtan uca destek</li>
      </ul>
    </div>
  );
}
