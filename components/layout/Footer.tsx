"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { SITE, CONTACT, CERTIFICATIONS, FOOTER_QUICK_LINKS } from "@/lib/constants";

const TRADE_ROWS = [
  { label: "Port of Loading", value: "Karachi Port, PK" },
  { label: "Payment Terms", value: "L/C · T/T · CAD" },
  { label: "Incoterms", value: "FOB · CIF · CFR" },
  { label: "Min. Order", value: "20 MT per shipment" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "#", s: "in" },
  { label: "Facebook", href: "#", s: "f" },
  { label: "X / Twitter", href: "#", s: "𝕏" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes ft-up   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ft-grow { from{transform:scaleX(0)} to{transform:scaleX(1)} }

        .fv .ft-a{animation:ft-up   .6s ease .05s both}
        .fv .ft-b{animation:ft-up   .6s ease .14s both}
        .fv .ft-c{animation:ft-up   .6s ease .22s both}
        .fv .ft-d{animation:ft-up   .6s ease .30s both}
        .fv .ft-e{animation:ft-up   .55s ease .38s both}
        .fv .ft-div{animation:ft-grow .8s ease .08s both}
        .ft-a,.ft-b,.ft-c,.ft-d,.ft-e{opacity:0}
        .ft-div{transform-origin:left;transform:scaleX(0)}

        .ft-link{position:relative;display:inline-flex;align-items:center;color:rgba(255,255,255,.48);font-size:13.5px;text-decoration:none;transition:color .2s ease}
        .ft-link::after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:1px;background:#C8973A;transform:scaleX(0);transform-origin:right;transition:transform .25s ease}
        .ft-link:hover{color:#C8973A}
        .ft-link:hover::after{transform:scaleX(1);transform-origin:left}

        .ft-cl{color:rgba(255,255,255,.48);text-decoration:none;font-size:13px;transition:color .2s ease}
        .ft-cl:hover{color:#C8973A}
        .ft-cl.wa:hover{color:#25D366}

        .ft-soc{width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);color:rgba(255,255,255,.55);text-decoration:none;transition:background .2s ease,border-color .2s ease,color .2s ease,transform .2s ease}
        .ft-soc:hover{background:rgba(200,151,58,.14);border-color:rgba(200,151,58,.3);color:#C8973A;transform:translateY(-2px)}

        .ft-cert{display:inline-flex;align-items:center;padding:4px 10px;border-radius:7px;font-size:10.5px;font-weight:700;letter-spacing:.07em;background:rgba(200,151,58,.1);border:1px solid rgba(200,151,58,.2);color:#e8b84b;transition:background .2s ease,border-color .2s ease}
        .ft-cert:hover{background:rgba(200,151,58,.18);border-color:rgba(200,151,58,.35)}

        .ft-badge{display:inline-flex;align-items:center;padding:4px 10px;border-radius:7px;font-size:10.5px;font-weight:600;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.38)}
        .ft-bl{color:rgba(255,255,255,.28);text-decoration:none;transition:color .2s ease}
        .ft-bl:hover{color:#C8973A}

        .ft-hdg{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.18em;color:rgba(255,255,255,.35);margin-bottom:18px;display:flex;align-items:center;gap:8px}
        .ft-hdg::before{content:"";display:inline-block;width:14px;height:1.5px;background:#C8973A;border-radius:2px;flex-shrink:0}

        .ft-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:clamp(28px,4vw,48px)}

        @media(max-width:639px){.ft-si{flex-direction:column;gap:20px;align-items:flex-start !important}}
        @media(prefers-reduced-motion:reduce){
          .ft-a,.ft-b,.ft-c,.ft-d,.ft-e{animation:none !important;opacity:1 !important;transform:none !important}
          .ft-div{animation:none !important;transform:scaleX(1) !important}
          .ft-soc:hover{transform:none}
        }
      `}</style>

      <footer
        ref={ref}
        aria-labelledby="footer-heading"
        itemScope itemType="https://schema.org/WPFooter"
        className={vis ? "fv" : ""}
        style={{ background: "#0b2116", color: "rgba(255,255,255,.65)", position: "relative", overflow: "hidden" }}
      >
        <h2 id="footer-heading" className="sr-only">Site Footer — GreenValley Agri Exports</h2>

        {/* Gold top accent */}
        <div aria-hidden="true" style={{ height: 3, background: "linear-gradient(90deg,#C8973A,#e8b84b 40%,rgba(200,151,58,.2))" }} />

        {/* Background texture — static */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(ellipse 70% 40% at 50% 0%,rgba(26,77,46,.5) 0%,transparent 60%),
          radial-gradient(circle,rgba(200,151,58,.12) 1px,transparent 1px)`,
          backgroundSize: "100% 100%, 52px 52px", opacity: .9
        }} />

        {/* Statement panel */}
        <div className="ft-a" style={{ position: "relative", zIndex: 1, padding: "clamp(36px,6vh,56px) 2rem", maxWidth: 1280, margin: "0 auto" }}>
          <div className="ft-si" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>

            {/* Left — brand */}
            <div style={{ maxWidth: 520 }}>
              <Link href="/" aria-label={`${SITE.name} — homepage`} itemProp="url"
                style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none", marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#C8973A,#e8b84b)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(200,151,58,.38)"
                }} aria-hidden="true">🌿</div>
                <div>
                  <span itemProp="name" style={{
                    fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700,
                    color: "white", lineHeight: 1, display: "block", letterSpacing: "-0.01em"
                  }}>GreenValley</span>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase",
                    color: "rgba(200,151,58,.65)", lineHeight: 1, display: "block", marginTop: 2
                  }}>Agri Exports</span>
                </div>
              </Link>

              <p itemProp="description" style={{ fontSize: "clamp(13.5px,1.6vw,15px)", lineHeight: 1.74, color: "rgba(255,255,255,.46)", maxWidth: 440 }}>
                Pakistan&apos;s trusted exporter of premium corn silage — supplying high-energy livestock feed
                to global markets since <strong style={{ color: "rgba(255,255,255,.65)", fontWeight: 500 }}>{SITE.founded}</strong>.
                Quality you can verify, logistics you can trust.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }} role="list" aria-label="Certifications">
                {CERTIFICATIONS.map((c) => <span key={c.short} className="ft-cert" role="listitem">{c.short}</span>)}
              </div>
            </div>

            {/* Right — trade card */}
            <div style={{
              padding: "22px 26px", borderRadius: 18, background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(200,151,58,.14)", minWidth: 220, flexShrink: 0
            }}>
              <p style={{
                fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em",
                color: "rgba(200,151,58,.55)", marginBottom: 14
              }}>Trade Information</p>
              {TRADE_ROWS.map((r) => (
                <div key={r.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  gap: 12, marginBottom: 9, paddingBottom: 9, borderBottom: "1px solid rgba(255,255,255,.05)"
                }}>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,.32)", fontWeight: 500, whiteSpace: "nowrap" }}>{r.label}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,.72)", fontWeight: 600, textAlign: "right" }}>{r.value}</span>
                </div>
              ))}
              <Link href="/contact" aria-label="Request a quote"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7, width: "100%",
                  marginTop: 6, padding: "10px 16px", borderRadius: 10,
                  background: "linear-gradient(135deg,#C8973A,#dfa83e)", color: "#0b2116",
                  fontSize: 12.5, fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(200,151,58,.35)", transition: "transform .22s ease,box-shadow .22s ease"
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 24px rgba(200,151,58,.5)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 16px rgba(200,151,58,.35)"; }}
              >
                Request a Quote <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="ft-div" aria-hidden="true" style={{
          height: 1, maxWidth: 1280, margin: "0 auto",
          background: "linear-gradient(90deg,transparent,rgba(200,151,58,.3) 30%,rgba(200,151,58,.5) 50%,rgba(200,151,58,.3) 70%,transparent)"
        }} />

        {/* Columns */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(36px,5vh,52px) 2rem clamp(32px,5vh,48px)", position: "relative", zIndex: 1 }}>
          <div className="ft-cols">

            {/* Quick Links */}
            <div className="ft-b">
              <nav aria-label="Footer quick links">
                <p className="ft-hdg">Quick Links</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {FOOTER_QUICK_LINKS.map((l) => (
                    <li key={l.href}><Link href={l.href} className="ft-link" itemProp="url"><span itemProp="name">{l.label}</span></Link></li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Markets */}


            {/* Contact */}
            <div className="ft-d">
              <address aria-label="Contact information" style={{ fontStyle: "normal" }}>
                <p className="ft-hdg">Contact Us</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <MapPin size={14} style={{ color: "#C8973A", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                    <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress"
                      style={{ fontSize: 13, lineHeight: 1.68, color: "rgba(255,255,255,.46)" }}>
                      <span itemProp="streetAddress">{CONTACT.address?.full ?? CONTACT.address}</span>
                    </span>
                  </li>
                  {[
                    { href: `tel:${CONTACT.phoneRaw ?? CONTACT.phone}`, icon: <Phone size={14} aria-hidden="true" />, text: CONTACT.phone, prop: "telephone", cls: "" },
                    { href: `mailto:${CONTACT.email}`, icon: <Mail size={14} aria-hidden="true" />, text: CONTACT.email, prop: "email", cls: "" },
                    { href: CONTACT.whatsapp, icon: <MessageCircle size={14} aria-hidden="true" style={{ color: "#25D366" }} />, text: "WhatsApp Us", prop: "", cls: "wa", ext: true },
                  ].map((item) => (
                    <li key={item.href} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#C8973A", flexShrink: 0, display: "flex" }}>{item.icon}</span>
                      <a href={item.href} className={`ft-cl ${item.cls}`} style={{ fontSize: 13, wordBreak: "break-all" }}
                        {...(item.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        {...(item.prop ? { [item.prop === "telephone" ? "itemProp" : "itemProp"]: item.prop } : {})}
                        aria-label={item.text}>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 20 }}>
                  <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "rgba(255,255,255,.28)", marginBottom: 10 }}>Follow Us</p>
                  <div style={{ display: "flex", gap: 8 }} role="list" aria-label="Social media links">
                    {SOCIALS.map((s) => (
                      <a key={s.label} href={s.href} className="ft-soc" aria-label={s.label} role="listitem" rel="noopener noreferrer">{s.s}</a>
                    ))}
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-e" style={{
          borderTop: "1px solid rgba(255,255,255,.06)", maxWidth: 1280, margin: "0 auto",
          padding: "clamp(16px,2.5vh,22px) 2rem", position: "relative", zIndex: 1
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 14px" }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.26)", margin: 0 }}>
                © {year} <Link href="/" className="ft-bl">{SITE.name}</Link>. All rights reserved.
              </p>
              {[{ href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }].map((l) => (
                <>
                  <span aria-hidden="true" style={{ color: "rgba(255,255,255,.15)", fontSize: 10 }}>·</span>
                  <Link key={l.href} href={l.href} className="ft-bl" style={{ fontSize: 12 }}>{l.label}</Link>
                </>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }} aria-label="Trade terms">
              {["Karachi Port", "FOB", "CIF", "L/C Accepted"].map((b) => <span key={b} className="ft-badge">{b}</span>)}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}