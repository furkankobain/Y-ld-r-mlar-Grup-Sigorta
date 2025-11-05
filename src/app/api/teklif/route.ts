import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

function text(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const adsoyad = text(body.adsoyad);
    const telefon = text(body.telefon);
    const email = text(body.email);
    const brans = text(body.brans);
    const plakaOrTc = text(body.plakaOrTc);
    const mesaj = text(body.mesaj);

    if (!adsoyad || !telefon) {
      return Response.json({ error: "Ad Soyad ve Telefon zorunludur." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } = process.env as Record<string, string>;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
      return Response.json({ error: "E-posta yapılandırması eksik. Sunucu yöneticisine bildirin." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `Yeni Teklif Talebi - ${brans || "Genel"}`;
    const content = [
      `Ad Soyad: ${adsoyad}`,
      `Telefon: ${telefon}`,
      `E-posta: ${email || "-"}`,
      `Branş: ${brans || "-"}`,
      `Plaka/TCKN: ${plakaOrTc || "-"}`,
      `Mesaj: ${mesaj || "-"}`,
      `Tarih: ${new Date().toLocaleString("tr-TR")}`,
    ].join("\n");

    await transporter.sendMail({
      from: SMTP_USER,
      to: MAIL_TO,
      subject,
      text: content,
    });

    return Response.json({ ok: true });
  } catch (e) {
    console.error("/api/teklif error", e);
    return Response.json({ error: "İşlem sırasında bir hata oluştu." }, { status: 500 });
  }
}
