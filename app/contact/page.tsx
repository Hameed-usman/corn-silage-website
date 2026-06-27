"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Facebook, MessageCircle, ShieldCheck, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { CONTACT, COUNTRIES_SERVED } from "@/lib/constants";

const TRUST_BADGES = [
  "Incoporation Certified",
  "Halal Verified",
  "FOB · CIF · CFR Available",
  "L/C · T/T · CAD Accepted",
  "Response Within 24 Hours",
];

export default function ContactPage() {
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
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle, rgba(200,151,58,.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px", opacity: 0.08,
        }} />
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm reveal">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/25">›</span>
            <span className="text-[#C8973A]" aria-current="page">Contact Us</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-tag light reveal">Get In Touch</span>
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
              Contact Us
            </h1>
            <p className="mt-5 reveal" style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.7,
              maxWidth: 580,
            }}>
              We respond to all export inquiries within 24 hours. Tell us your requirement
              and we&apos;ll send you pricing, availability, and documentation details by return.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT CARDS + FORM ═══════════ */}
      <section className="bg-[#F5F0E8]" style={{ padding: "clamp(56px, 8vh, 96px) 0" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* ── Left: Info Cards ── */}
            <div className="lg:col-span-4 space-y-5 reveal-left">
              {/* Location */}
              <div style={{
                background: "white",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(26,77,46,0.08)",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: "all 0.25s ease",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "rgba(200,151,58,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C8973A", flexShrink: 0,
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1C1C1E", marginBottom: 4 }}>Our Office</h3>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{CONTACT.address.full}</p>
                </div>
              </div>

              {/* Phone */}
              <div style={{
                background: "white",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(26,77,46,0.08)",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: "all 0.25s ease",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "rgba(26,77,46,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#2D7A4F", flexShrink: 0,
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1C1C1E", marginBottom: 4 }}>Call or WhatsApp</h3>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 15, fontWeight: 600, color: "#1A4D2E", textDecoration: "none", display: "block", marginBottom: 4 }}
                  >
                    {CONTACT.phone}
                  </a>
                  <p style={{ fontSize: 12, color: "#9CA3AF" }}>Available Mon–Sat, 9AM–6PM PKT</p>
                </div>
              </div>

              {/* Email */}
              <div style={{
                background: "white",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(26,77,46,0.08)",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: "all 0.25s ease",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "rgba(200,151,58,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C8973A", flexShrink: 0,
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1C1C1E", marginBottom: 4 }}>Email Us</h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{ fontSize: 15, fontWeight: 600, color: "#1A4D2E", textDecoration: "none", display: "block", marginBottom: 4 }}
                  >
                    {CONTACT.email}
                  </a>
                  <p style={{ fontSize: 12, color: "#9CA3AF" }}>For quotes, samples, and documentation requests</p>
                </div>
              </div>

              {/* Social strip */}
              <div style={{
                background: "linear-gradient(160deg, #0F2E1A 0%, #1A4D2E 100%)",
                borderRadius: 20,
                padding: 24,
                position: "relative",
                overflow: "hidden",
              }}>
                <div aria-hidden="true" style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  backgroundImage: "radial-gradient(circle, rgba(200,151,58,.12) 1px, transparent 1px)",
                  backgroundSize: "32px 32px", opacity: 0.15,
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#C8973A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Follow Us On</h3>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href="#" style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none", transition: "all 0.25s ease",
                    }} aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none", transition: "all 0.25s ease",
                    }} aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "rgba(37,211,102,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#25D366",
                      textDecoration: "none", transition: "all 0.25s ease",
                    }} aria-label="WhatsApp">
                      <MessageCircle size={18} />
                    </a>
                  </div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 14, fontWeight: 500, letterSpacing: "0.04em" }}>
                    @GreenValleyAgriExports
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right: Quote Request Form ── */}
            <div className="lg:col-span-8 reveal-right">
              <div style={{
                background: "white",
                borderRadius: 24,
                padding: "clamp(28px, 3vw, 48px)",
                boxShadow: "0 16px 60px rgba(0,0,0,0.04)",
                border: "1px solid rgba(26,77,46,0.06)",
              }}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: "#1C1C1E",
                  marginBottom: 32,
                }}>
                  Request a Quote
                </h2>

                <form
                  onSubmit={(e) => { e.preventDefault(); alert("Thank you! In production, this would submit your inquiry to our export team. We'll respond within 24 hours."); }}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Full Name *</label>
                      <input type="text" id="fullName" name="fullName" required placeholder="John Doe" style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"} />
                    </div>
                    <div>
                      <label htmlFor="companyName" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Company Name *</label>
                      <input type="text" id="companyName" name="companyName" required placeholder="AgriImports LLC" style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="website" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Company Website</label>
                      <input type="url" id="website" name="website" placeholder="https://example.com" style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"} />
                    </div>
                    <div>
                      <label htmlFor="country" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Country *</label>
                      <select id="country" name="country" required style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        background: "white", cursor: "pointer",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
                        <option value="">Select a country</option>
                        {COUNTRIES_SERVED.map(c => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="port" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Destination Port *</label>
                      <input type="text" id="port" name="port" required placeholder="e.g. Jebel Ali, UAE" style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"} />
                    </div>
                    <div>
                      <label htmlFor="volume" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Estimated Volume (MT) *</label>
                      <input type="number" id="volume" name="volume" required min={1} placeholder="20" style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"} />
                    </div>
                    <div>
                      <label htmlFor="incoterm" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Preferred Incoterm</label>
                      <select id="incoterm" name="incoterm" style={{
                        width: "100%", padding: "12px 16px", borderRadius: 12,
                        border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                        background: "white", cursor: "pointer",
                        transition: "border-color 0.2s ease",
                      }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}>
                        <option value="FOB">FOB</option>
                        <option value="CIF">CIF</option>
                        <option value="CFR">CFR</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#4B5563", marginBottom: 8 }}>Message / Special Requirements</label>
                    <textarea id="message" name="message" rows={4} placeholder="Please specify any packaging, labelling, or delivery requirements..." style={{
                      width: "100%", padding: "12px 16px", borderRadius: 12,
                      border: "1px solid #E5E7EB", fontSize: 14, outline: "none",
                      resize: "none", fontFamily: "inherit",
                      transition: "border-color 0.2s ease",
                    }} onFocus={(e) => e.currentTarget.style.borderColor = "#C8973A"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E7EB"} />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: 14,
                      background: "linear-gradient(135deg, #1A4D2E 0%, #2D7A4F 100%)",
                      color: "white",
                      fontSize: 16,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: "0 8px 24px rgba(26,77,46,0.25)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    Send Inquiry
                    <ArrowRight size={18} />
                  </button>

                  {/* Helper text */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3" style={{ paddingTop: 4 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#9CA3AF" }}>
                      <Clock size={14} style={{ color: "#C8973A" }} />
                      Typical response time: within 24 hours
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#9CA3AF" }}>
                      🔒 Your information is never shared with third parties.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <section style={{
        background: "linear-gradient(160deg, #0F2E1A 0%, #1A4D2E 50%, #0F2E1A 100%)",
        padding: "clamp(32px, 4vh, 48px) 0",
      }}>
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 reveal">
            {TRUST_BADGES.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <CheckCircle2 size={14} style={{ color: "#C8973A" }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}