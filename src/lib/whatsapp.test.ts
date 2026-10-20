import { describe, expect, it } from "vitest";

import { buildWhatsAppUrl, composeContactMessage } from "./whatsapp";

describe("WhatsApp contact", () => {
  it("opens a chat with +55 79 99172-6164", () => {
    expect(buildWhatsAppUrl("oi")).toBe("https://wa.me/5579991726164?text=oi");
  });

  it("prefills the default portfolio greeting", () => {
    const url = new URL(buildWhatsAppUrl());
    expect(url.searchParams.get("text")).toBe(
      "Olá! Conheci seu portfólio e gostaria de conversar sobre um projeto de automação ou desenvolvimento de software.",
    );
  });

  it("omits empty optional fields from the form message", () => {
    const msg = composeContactMessage({ name: "Ana", company: " ", message: "Integrar ERP" });
    expect(msg).not.toContain("Empresa:");
    expect(msg).not.toContain("E-mail:");
    expect(msg).toContain("Nome: Ana");
  });
});
