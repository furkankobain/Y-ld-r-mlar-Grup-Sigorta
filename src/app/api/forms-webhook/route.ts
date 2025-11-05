import type { NextRequest } from "next/server";

type AnyDict = Record<string, unknown>;

const BRANS_BANNER: Record<string, { title: string; color: string }> = {
  "Trafik": { title: "Trafik Sigortası", color: "#2563eb" },
  "Kasko": { title: "Kasko Sigortası", color: "#16a34a" },
  "Konut/DASK": { title: "Konut / DASK", color: "#db2777" },
  "Sağlık": { title: "Sağlık Sigortası", color: "#9333ea" },
};

function buildHtml(name: string, brans?: string) {
  const b = (brans && BRANS_BANNER[brans]) || { title: "Sigorta Teklifi", color: "#111827" };
  return `
  <div style="font-family:Arial,sans-serif;background:#f6f7f9;padding:24px">
    <table width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:auto;background:#fff;border-radius:12px;overflow:hidden">
      <tr>
        <td style="background:${b.color};color:#fff;padding:24px 28px;font-size:22px;font-weight:700">
          ${b.title}
        </td>
      </tr>
      <tr>
        <td style="padding:24px 28px;color:#111827;font-size:14px;line-height:22px">
          <p>Merhaba ${name || ""},</p>
          <p>Talebiniz bize ulaştı. Uzman ekibimiz en kısa sürede sizinle iletişime geçerek karşılaştırmalı teklifleri paylaşacaktır.</p>
          <ul style="margin:12px 0 16px 18px;color:#334155">
            <li>Çalışma saatleri: Hafta içi 09:00–18:00</li>
            <li>WhatsApp / Telefon: {PHONE}</li>
          </ul>
          <p>Teşekkürler,<br/><strong>Yıldırımlar Grup Sigorta</strong></p>
        </td>
      </tr>
      <tr>
        <td style="background:#f3f4f6;color:#6b7280;padding:16px 28px;font-size:12px">
          Bu e‑posta bilgilendirme amaçlıdır. Yanıt vermek isterseniz bu posta üzerinden bize ulaşabilirsiniz.
        </td>
      </tr>
    </table>
  </div>`;
}

function getProp(obj: unknown, key: string): unknown {
  return obj && typeof obj === "object" ? (obj as AnyDict)[key] : undefined;
}
function pickString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

export async function POST(req: NextRequest) {
  try {
    const bodyUnknown = (await req.json().catch(() => ({}))) as unknown;
    const payloadUnknown = getProp(bodyUnknown, "payload") ?? bodyUnknown;
    const dataUnknown = getProp(payloadUnknown, "data") ?? payloadUnknown;

    const email =
      pickString(getProp(dataUnknown, "email")) ||
      pickString(getProp(dataUnknown, "Email")) ||
      pickString(getProp(dataUnknown, "Eposta"));
    if (!email) return Response.json({ ok: true, skipped: "no email" });

    const ad = pickString(getProp(dataUnknown, "ad"));
    const soyad = pickString(getProp(dataUnknown, "soyad"));
    const name =
      pickString(getProp(dataUnknown, "adsoyad")) ||
      (ad ? `${ad} ${soyad || ""}`.trim() : pickString(getProp(dataUnknown, "name")) || "");
    const brans = pickString(getProp(dataUnknown, "brans")) || pickString(getProp(dataUnknown, "Brans"));

    const apiKey = process.env.BREVO_API_KEY;
    const fromEmail = process.env.MAIL_FROM || "noreply@yildirimlargrupsigorta.com.tr";
    const fromName = process.env.MAIL_FROM_NAME || "Yıldırımlar Grup Sigorta";

    if (!apiKey) return Response.json({ error: "BREVO_API_KEY missing" }, { status: 500 });

    const html = buildHtml(name, brans).replace("{PHONE}", process.env.PUBLIC_PHONE || "+90 5xx xxx xx xx");

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: fromEmail, name: fromName },
        to: [{ email, name }],
        subject: `Talebiniz alındı${brans ? `: ${brans}` : ""}`,
        htmlContent: html,
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("brevo send fail", t);
      return Response.json({ error: "send fail" }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("forms-webhook error", e);
    return Response.json({ error: "error" }, { status: 500 });
  }
}
