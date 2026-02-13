import { Resend } from "resend";

import type { ContactPayload } from "./schema";

export type SendEmailResult = {
  ok: boolean;
  error?: "EMAIL_NOT_CONFIGURED" | "EMAIL_SEND_FAILED";
};

const hasEmailConfig = () =>
  Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_FROM_EMAIL &&
      process.env.CONTACT_TO_EMAIL,
  );

export const sendContactEmail = async (
  payload: ContactPayload,
): Promise<SendEmailResult> => {
  if (!hasEmailConfig()) {
    return { ok: false, error: "EMAIL_NOT_CONFIGURED" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.CONTACT_FROM_EMAIL as string;
  const to = process.env.CONTACT_TO_EMAIL as string;

  const subjectParts = ["Nuevo contacto", payload.name];
  if (payload.company) subjectParts.push(payload.company);
  const subject = subjectParts.join(" - ");

  const lines = [
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.company ?? "No informado"}`,
    `Telefono: ${payload.phone ?? "No informado"}`,
    `Origen: ${payload.source ?? "web"}`,
    "",
    payload.message,
  ];

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      text: lines.join("\n"),
    });

    return { ok: true };
  } catch (error) {
    console.error("Contact email send failed", error);
    return { ok: false, error: "EMAIL_SEND_FAILED" };
  }
};
