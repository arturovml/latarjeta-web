import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { contactSchema } from "@/lib/contact/schema";
import { rateLimit } from "@/lib/contact/rateLimit";
import { sendContactEmail } from "@/lib/contact/sendEmail";

const normalizeText = (value: unknown, max: number) => {
  if (typeof value !== "string") return "";
  const normalized = value.trim().replace(/\s+/g, " ");
  return normalized.slice(0, max);
};

const normalizeOptional = (value: unknown, max: number) => {
  const normalized = normalizeText(value, max);
  return normalized ? normalized : undefined;
};

const getClientIp = (request: NextRequest) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
};

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rate = rateLimit(ip);

    if (!rate.ok) {
      return NextResponse.json(
        { ok: false, error: "RATE_LIMIT" },
        { status: 429 },
      );
    }

    const body = await request.json();
    const payload = {
      name: normalizeText(body?.name, 80),
      email: normalizeText(body?.email, 120),
      company: normalizeOptional(body?.company, 120),
      phone: normalizeOptional(body?.phone, 50),
      message: normalizeText(body?.message, 2000),
      source: normalizeOptional(body?.source, 80),
      website: normalizeOptional(body?.website, 200),
    };

    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR" },
        { status: 400 },
      );
    }

    const result = await sendContactEmail(parsed.data);
    if (!result.ok) {
      if (result.error === "EMAIL_NOT_CONFIGURED") {
        return NextResponse.json(
          {
            ok: false,
            error: "EMAIL_NOT_CONFIGURED",
            message: "Email sending not configured. Set env vars.",
          },
          { status: 503 },
        );
      }

      return NextResponse.json(
        { ok: false, error: "EMAIL_SEND_FAILED" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { ok: false, error: "EMAIL_SEND_FAILED" },
      { status: 500 },
    );
  }
}
