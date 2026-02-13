import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  company: z.string().max(120).optional(),
  phone: z.string().max(50).optional(),
  message: z.string().min(10).max(2000),
  source: z.string().max(80).optional(),
  website: z.string().max(200).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
