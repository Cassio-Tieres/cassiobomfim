import { contact } from "@/content/site";

/** Builds a wa.me link that opens a chat with a prefilled message. */
export function buildWhatsAppUrl(message: string = contact.whatsappMessage, phone = contact.whatsapp) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export type ContactFormData = {
  name: string;
  company?: string | undefined;
  email?: string | undefined;
  message: string;
};

/** Composes the WhatsApp message sent from the contact form. */
export function composeContactMessage(data: ContactFormData) {
  const lines = [
    "Olá! Conheci seu portfólio e gostaria de conversar sobre um projeto.",
    "",
    `Nome: ${data.name.trim()}`,
  ];
  if (data.company?.trim()) lines.push(`Empresa: ${data.company.trim()}`);
  if (data.email?.trim()) lines.push(`E-mail: ${data.email.trim()}`);
  lines.push("", "Projeto / problema:", data.message.trim());
  return lines.join("\n");
}
