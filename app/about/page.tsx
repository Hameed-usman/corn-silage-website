import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, ClipboardList, Globe, Zap, ShieldCheck, CheckCircle2, Award, ArrowRight, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About GreenValley Agri Exports | Pakistan's Trusted Corn Silage Exporter",
  description: "GreenValley Agri Exports has been supplying premium corn silage from Pakistan. Incoporation certified, Halal verified, and trusted by 40+ global buyers across 15+ countries.",
  keywords: ["corn silage export Pakistan", "silage supplier Pakistan", "halal certified silage", "agri export company Pakistan", "livestock feed supplier"],
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About GreenValley Agri Exports",
    description: "Pakistan's trusted corn silage exporter. Incoporation certified, Halal verified, and trusted globally.",
    url: `${SITE.url}/about`,
  },
};

const STRENGTHS = [
  {
    icon: FlaskConical,
    title: "Lab-Tested Every Batch",
    body: "Every shipment is independently verified by AOAC-certified laboratories for moisture, crude protein, metabolisable energy, and fermentation pH — before a single container is loaded. Full Certificate of Analysis delivered with each order.",
    color: "gold" as const,
  },
  {
    icon: ClipboardList,
    title: "End-to-End Documentation",
    body: "We handle phytosanitary certificates, COA reports, packing lists, bill of lading, and customs clearance paperwork in-house. Your import team receives everything electronically before the vessel departs Karachi.",
    color: "forest" as const,
  },
  {
    icon: Globe,
    title: "Global Reach, Local Roots",
    body: "Our buyer network spans 15+ countries across the Middle East, Europe, and Southeast Asia. We have fulfilled repeated orders for dairy farms, feedlot operators, and commodity importers — building relationships that outlast single transactions.",
    color: "forest" as const,
  },
  {
    icon: Zap,
    title: "Fast Turnaround, Reliable Supply",
    body: "With dedicated farm agreements across Punjab's corn belt, we maintain ready inventory across seasons. Typical lead time from confirmed order to FOB loading is 10–14 working days.",
    color: "gold" as const,
  },
];

const CERTS = [
  { name: "Incoporation Certified", icon: Award },
  { name: "Halal Verified", icon: ShieldCheck },
  { name: "PSQCA Compliant", icon: CheckCircle2 },
  { name: "AOAC Lab Tested", icon: FlaskConical },
  { name: "FOB / CIF — Karachi Port", icon: Globe },
];

export default function AboutPage() {
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
        {/* Decorative elements */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle 500px at 80% 20%, rgba(200,151,58,.08), transparent 60%), radial-gradient(circle 400px at 10% 80%, rgba(45,122,79,.12), transparent 60%)",
        }} />
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(200,151,58,.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.1,
        }} />

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm reveal">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/25">›</span>
            <span className="text-[#C8973A]" aria-current="page">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-tag light reveal">About GreenValley</span>
            <h1
              id="about-heading"
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Who We Are
            </h1>
            <p className="mt-5 reveal" style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.7,
              maxWidth: 580,
            }}>
              A decade of growing Pakistan&apos;s agricultural exports — one verified shipment at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ OUR STORY ═══════════ */}
      <section className="bg-[#F5F0E8]" style={{ padding: "clamp(56px, 8vh, 96px) 0" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <span className="section-tag reveal">Our Story</span>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#1C1C1E",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                marginBottom: 32,
              }}
            >
              How GreenValley Became Pakistan&apos;s Most Trusted Corn Silage Exporter
            </h2>

            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8 }}>
                GreenValley Agri Exports was founded with a single mission: to bring Pakistan&apos;s high-yield
                corn harvests to livestock producers around the world — with lab-verified quality and zero compromise
                on traceability.
              </p>
              <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8 }}>
                Rooted in Faisalabad — the heart of Punjab&apos;s agricultural belt — we built direct relationships
                with Pakistan&apos;s most productive corn-growing farms. Today, we manage end-to-end sourcing,
                fermentation, vacuum-packing, and FOB/CIF export from Karachi Port, serving 40+ verified buyers
                across 15+ countries in the Middle East, Europe, and Southeast Asia.
              </p>
              <p style={{ fontSize: 17, color: "#4B5563", lineHeight: 1.8 }}>
                We are Incoporation certified, Halal verified, and PSQCA compliant. Every batch we ship undergoes
                third-party AOAC-certified nutritional analysis before loading — not as a formality, but because
                our buyers depend on predictable nutrition for their livestock.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 reveal-scale">
              <div style={{
                background: "white",
                borderRadius: 20,
                padding: "clamp(28px, 3vw, 40px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                border: "1px solid rgba(26,77,46,0.08)",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(26,77,46,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, color: "#1A4D2E",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-5.5 6L8 13"/></svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#1A4D2E", marginBottom: 12 }}>Our Mission</h3>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                  To position Pakistan as a globally recognised source of premium fermented corn silage — delivering
                  consistent energy content, full traceability, and price-competitive bulk supply to importers worldwide.
                </p>
              </div>

              <div style={{
                background: "white",
                borderRadius: 20,
                padding: "clamp(28px, 3vw, 40px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
                border: "1px solid rgba(200,151,58,0.15)",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(200,151,58,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, color: "#C8973A",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#1A4D2E", marginBottom: 12 }}>Our Vision</h3>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                  To become the most reliable name in corn silage exports from South Asia — expanding our certified
                  farm network and shortening farm-to-feedlot timelines for buyers in every time zone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ KEY STRENGTHS ═══════════ */}
      <section className="bg-white" style={{ padding: "clamp(56px, 8vh, 96px) 0" }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag justify-center reveal">Why Choose Us</span>
            <h2
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#1C1C1E",
                lineHeight: 1.12,
              }}
            >
              Why Importers Choose GreenValley
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {STRENGTHS.map((item, idx) => {
              const Icon = item.icon;
              const bgColor = item.color === "gold" ? "rgba(200,151,58,0.1)" : "rgba(26,77,46,0.08)";
              const iconColor = item.color === "gold" ? "#C8973A" : "#2D7A4F";
              return (
                <div
                  key={idx}
                  className={`reveal-scale stagger-${idx + 1}`}
                  style={{
                    background: "#F5F0E8",
                    borderRadius: 20,
                    padding: "clamp(28px, 3vw, 40px)",
                    border: "1px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: bgColor,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: iconColor,
                    marginBottom: 20,
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22, fontWeight: 700,
                    color: "#1C1C1E",
                    marginBottom: 12,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.75 }}>
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CERTIFICATIONS ═══════════ */}
      <section style={{
        background: "linear-gradient(160deg, #0F2E1A 0%, #1A4D2E 50%, #0F2E1A 100%)",
        padding: "clamp(40px, 6vh, 64px) 0",
      }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 reveal">
            {CERTS.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.25s ease",
                  }}
                >
                  <Icon size={16} style={{ color: "#C8973A" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em" }}>
                    {cert.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section style={{
        background: "#F5F0E8",
        padding: "clamp(56px, 8vh, 96px) 0",
      }}>
        <div className="container">
          <div className="reveal" style={{
            background: "white",
            borderRadius: 24,
            padding: "clamp(36px, 5vw, 64px)",
            textAlign: "center",
            boxShadow: "0 16px 60px rgba(0,0,0,0.06)",
            border: "1px solid rgba(26,77,46,0.06)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 700,
              color: "#1C1C1E",
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              Ready to Source Premium Corn Silage from Pakistan?
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 32px" }}>
              Tell us your volume, destination port, and preferred incoterm — we&apos;ll respond with a
              custom quote within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px", borderRadius: 14,
                  background: "#1A4D2E", color: "white",
                  fontSize: 15, fontWeight: 700, textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/product"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px", borderRadius: 14,
                  background: "rgba(200,151,58,0.12)", color: "#C8973A",
                  fontSize: 15, fontWeight: 700, textDecoration: "none",
                  border: "1px solid rgba(200,151,58,0.25)",
                  transition: "all 0.25s ease",
                }}
              >
                View Product Specs
                <FileText size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}