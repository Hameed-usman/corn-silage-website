"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "@/lib/constants";

/* ─── FAQ Data ─── */
const FAQ_ITEMS = [
  {
    q: "What is corn silage and why is it used as livestock feed?",
    a: "Corn silage is fermented whole-plant corn — stalks, leaves, cobs, and grain — that is chopped, compacted, and stored anaerobically to preserve nutritional value. The fermentation process (dropping pH to 3.8–4.5) produces a stable, high-energy feed rich in metabolisable energy (10.2 MJ/kg) and crude protein (8.5%). It is widely used by dairy farms, beef feedlots, and livestock producers globally as a cost-effective, energy-dense roughage source.",
  },
  {
    q: "What is the Minimum Order Quantity (MOQ)?",
    a: "Our standard MOQ is 20 Metric Tonnes (MT) per shipment, typically filling one 20-foot refrigerated container. Buyers consolidating multiple products or requiring larger volumes can discuss 40-foot container loads. Contact us if you need below-MOQ quantities for sampling or trial purposes.",
  },
  {
    q: "What are your payment terms?",
    a: "Our standard payment terms are: 30% advance payment upon order confirmation to initiate harvest and packing, and 70% balance payment against scan copies of Bill of Lading and Commercial Invoice via email. We accept payment via Letter of Credit (L/C), Telegraphic Transfer (T/T), and Cash Against Documents (CAD). Payment terms may vary based on order volume and buyer history.",
  },
  {
    q: "Which Incoterms do you offer?",
    a: "We offer FOB (Free On Board) Karachi Port, CIF (Cost Insurance Freight), and CFR (Cost and Freight) to all major international ports. FOB Karachi is our standard quote basis. Please provide your destination port name when requesting a quote.",
  },
  {
    q: "Can I request a sample before placing a bulk order?",
    a: "Yes. We provide product samples along with a fresh lab COA report. Sample quantities are provided free of charge; however, international courier costs are borne by the buyer. Please send a formal sample request with your company name, destination address, and courier account details to our export team.",
  },
  {
    q: "What nutritional specifications does your corn silage meet?",
    a: "Our corn silage is independently tested to the following typical values (per AOAC methodology): Moisture Content 65–70%, Crude Protein 8.5%, Metabolisable Energy 10.2 MJ/kg, Fermentation pH 3.8–4.5, Dry Matter 38%, NDF (Neutral Detergent Fibre) 42%. Batch-specific Certificate of Analysis (COA) is provided with every shipment.",
  },
  {
    q: "Where can I view your current price list?",
    a: "Pricing depends on order volume, destination port, and incoterm. To receive a tailored quotation, email us at exports@greenvalley.pk with your company name, website, destination port, and estimated volume. Our export team will respond within 24 hours.",
  },
  {
    q: "What certifications do you hold?",
    a: "GreenValley Agri Exports holds Halal Certification and PSQCA (Pakistan Standards & Quality Control Authority) compliance. Certificates are available upon request and included in full shipment documentation.",
  },
  {
    q: "What documentation is provided with each shipment?",
    a: "Every shipment includes a full documentation package: Commercial Invoice & Packing List, Bill of Lading, Phytosanitary Certificate (issued by Pakistan's Plant Protection Department), Certificate of Analysis (AOAC lab report for that specific batch), Certificate of Origin, and Halal Certificate (on request). All documents are delivered electronically before vessel departure.",
  },
  {
    q: "Can I arrange my own shipping agent / freight forwarder?",
    a: "Yes. If you have a preferred freight forwarder or shipping agent, simply provide their contact details after order confirmation and we will coordinate container pickup directly with them at Karachi Port.",
  },
  {
    q: "How is the corn silage packaged for export?",
    a: "Corn silage is vacuum-sealed in heavy-duty polythene bales to prevent aerobic spoilage during transit. Bales are then palletised and loaded into refrigerated (reefer) containers for international shipment. Custom bale sizes and labelling can be arranged — please provide artwork or specifications at the time of order.",
  },
  {
    q: "What if some items arrive damaged or there is a quality discrepancy?",
    a: "In the event of damage or quality concerns upon arrival, buyers must submit a written complaint with photographic evidence within 15 working days of delivery at the stated destination port. Claims submitted beyond this window cannot be processed. We take quality claims seriously and resolve all verified issues promptly.",
  },
  {
    q: "What countries do you currently export to?",
    a: "We currently export to buyers across the Middle East (UAE, Saudi Arabia, Qatar, Oman), Europe (Turkey, Germany, Netherlands), and Southeast Asia. We are open to new market inquiries — contact us to discuss your country's import regulations and our ability to supply.",
  },
  {
    q: "How quickly can I expect a response after submitting an inquiry?",
    a: "Our export team is available 6 days a week and responds to all new inquiries within 24 hours. For urgent requests, reach us directly via WhatsApp at +92 300 123 4567 for a faster turnaround.",
  },
];

/* ─── Accordion Item ─── */
function AccordionItem({ q, a, isOpen, onClick, idx }: {
  q: string; a: string; isOpen: boolean; onClick: () => void; idx: number;
}) {
  return (
    <div
      style={{
        background: isOpen ? "white" : "rgba(255,255,255,0.6)",
        borderRadius: 16,
        border: isOpen ? "1px solid rgba(200,151,58,0.25)" : "1px solid rgba(26,77,46,0.08)",
        overflow: "hidden",
        marginBottom: 12,
        transition: "all 0.3s ease",
        boxShadow: isOpen ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full text-left"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "20px 24px",
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 500,
            color: "#C8973A",
            opacity: 0.7,
            flexShrink: 0,
          }}>
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#1C1C1E",
            lineHeight: 1.4,
          }}>
            {q}
          </span>
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "#C8973A",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{
              padding: "0 24px 24px 52px",
              fontSize: 15,
              color: "#6B7280",
              lineHeight: 1.8,
            }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main FAQs Page ─── */
export default function FaqsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0F2E1A 0%, #1A4D2E 50%, #0F2E1A 100%)",
          paddingTop: "clamp(100px, 14vh, 160px)",
          paddingBottom: "clamp(64px, 10vh, 120px)",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle 500px at 80% 20%, rgba(200,151,58,.08), transparent 60%), radial-gradient(circle 400px at 10% 80%, rgba(45,122,79,.12), transparent 60%)",
        }} />
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm reveal">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/25">›</span>
            <span className="text-[#C8973A]" aria-current="page">FAQs</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-tag light reveal">Get Answers</span>
            <h1
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.08,
              }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-5 reveal" style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.7,
              maxWidth: 580,
            }}>
              Everything international buyers ask before placing their first order. If your question
              isn&apos;t here, contact our export team directly.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ACCORDION ═══════════ */}
      <section className="bg-[#F5F0E8]" style={{ padding: "clamp(56px, 8vh, 96px) 0" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto reveal">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={idx}
                q={item.q}
                a={item.a}
                idx={idx}
                isOpen={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section style={{
        background: "linear-gradient(160deg, #0F2E1A 0%, #1A4D2E 50%, #0F2E1A 100%)",
        padding: "clamp(56px, 8vh, 96px) 0",
      }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.12,
              marginBottom: 16,
            }}>
              Still Have Questions?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.7, marginBottom: 32 }}>
              Our export specialists are available 6 days a week. Send us your inquiry and we&apos;ll
              reply within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px", borderRadius: 14,
                  background: "#C8973A", color: "#0f2e1a",
                  fontSize: 15, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 5px 22px rgba(200,151,58,.38)",
                }}
              >
                Contact Our Export Team
                <ArrowRight size={16} />
              </Link>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px", borderRadius: 14,
                  background: "#25D366", color: "white",
                  fontSize: 15, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 5px 22px rgba(37,211,102,.32)",
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
