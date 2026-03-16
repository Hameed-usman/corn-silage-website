"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function CTABanner() {
  const [visible, setVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes cta-up { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)} }

        .cta-vis .cta-text { animation:cta-up .6s ease .05s both; }
        .cta-vis .cta-btns { animation:cta-up .6s ease .2s both; }

        .cta-text,.cta-btns { opacity:0; }

        /* WhatsApp btn */
        .cta-wa {
          position:relative; overflow:hidden;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .cta-wa::after {
          content:"";
          position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.15) 50%,transparent 62%);
          transform:translateX(-100%);
          transition:transform .5s ease;
          pointer-events:none;
        }
        .cta-wa:hover::after { transform:translateX(100%); }
        .cta-wa:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(37,211,102,.5) !important;
        }

        /* Quote btn */
        .cta-quote {
          position:relative; overflow:hidden;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .cta-quote::after {
          content:"";
          position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.15) 50%,transparent 62%);
          transform:translateX(-100%);
          transition:transform .5s ease;
          pointer-events:none;
        }
        .cta-quote:hover::after { transform:translateX(100%); }
        .cta-quote:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(200,151,58,.55) !important;
        }

        @media(prefers-reduced-motion:reduce){
          .cta-text,.cta-btns{animation:none !important;opacity:1 !important;transform:none !important}
          .cta-wa:hover,.cta-quote:hover{transform:none}
        }
        @media(max-width:639px){
          .cta-btns-inner { flex-direction:column; }
          .cta-btns-inner a { width:100%; justify-content:center; }
        }
      `}</style>

      <section
        id="cta-banner"
        ref={secRef}
        aria-labelledby="cta-heading"
        itemScope
        itemType="https://schema.org/WPAdWidget"
        className={`relative overflow-hidden ${visible ? "cta-vis" : ""}`}
        style={{ background:"#1A4D2E", padding:"clamp(56px,9vh,96px) 0" }}
      >
        {/* Background — static */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:`
            radial-gradient(circle 380px at 92% 50%,rgba(200,151,58,.07) 0%,transparent 60%),
            radial-gradient(circle 280px at 8%  50%,rgba(45,122,79,.28) 0%,transparent 60%)
          `,
        }}/>
        {/* Diagonal hatch — right edge */}
        <div aria-hidden="true" style={{
          position:"absolute", right:0, top:0, bottom:0, width:"28%",
          backgroundImage:"repeating-linear-gradient(45deg,#C8973A 0px,#C8973A 1px,transparent 1px,transparent 18px)",
          opacity:.04, pointerEvents:"none",
        }}/>
        {/* Dot grid */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:"radial-gradient(circle,rgba(200,151,58,.18) 1px,transparent 1px)",
          backgroundSize:"48px 48px", opacity:.12,
        }}/>

        <div className="container" style={{ position:"relative", zIndex:1 }}>
          <div style={{
            display:"flex", flexWrap:"wrap",
            alignItems:"center", justifyContent:"space-between",
            gap:"clamp(28px,5vw,48px)",
          }}>
            {/* Text */}
            <div className="cta-text" style={{ maxWidth:520 }}>
              <p style={{
                fontWeight:700, textTransform:"uppercase",
                letterSpacing:".14em", fontSize:10.5,
                color:"#C8973A", marginBottom:12,
              }}>
                Ready to Import?
              </p>
              <h2
                id="cta-heading"
                itemProp="name"
                style={{
                  fontFamily:"var(--font-display)",
                  fontSize:"clamp(28px,3.5vw,48px)",
                  fontWeight:700, color:"white",
                  lineHeight:1.08, letterSpacing:"-0.022em",
                }}
              >
                Let&apos;s Talk About<br/>Your Requirements
              </h2>
              <p itemProp="description" style={{
                fontSize:"clamp(14px,1.6vw,16px)",
                color:"rgba(255,255,255,.58)",
                fontWeight:300, lineHeight:1.72, marginTop:14,
              }}>
                Get a custom quote based on your volume, destination port,
                and timeline — within 24 hours.
              </p>

              {/* Contact detail */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px 20px", marginTop:18 }}>
                <a
                  href={`tel:${CONTACT.phoneRaw ?? CONTACT.phone}`}
                  aria-label={`Call us at ${CONTACT.phone}`}
                  style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    fontSize:12.5, color:"rgba(255,255,255,.5)",
                    textDecoration:"none", fontWeight:500,
                    transition:"color .2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.85)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.5)"; }}
                >
                  📞 {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  aria-label={`Email us at ${CONTACT.email}`}
                  style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    fontSize:12.5, color:"rgba(255,255,255,.5)",
                    textDecoration:"none", fontWeight:500,
                    transition:"color .2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.85)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.5)"; }}
                >
                  ✉️ {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="cta-btns">
              <div
                className="cta-btns-inner"
                style={{ display:"flex", flexWrap:"wrap", gap:12, alignItems:"center" }}
              >
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-wa"
                  aria-label="Contact us via WhatsApp"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:9,
                    padding:"15px 26px", borderRadius:14,
                    background:"#25D366", color:"white",
                    fontSize:14, fontWeight:700,
                    textDecoration:"none",
                    boxShadow:"0 5px 22px rgba(37,211,102,.32)",
                  }}
                >
                  <MessageCircle size={17} aria-hidden="true"/>
                  WhatsApp Us
                </a>

                <Link
                  href="/contact"
                  className="cta-quote"
                  aria-label="Get a custom export quote"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:9,
                    padding:"15px 26px", borderRadius:14,
                    background:"#C8973A", color:"#1A4D2E",
                    fontSize:14, fontWeight:700,
                    textDecoration:"none",
                    boxShadow:"0 5px 22px rgba(200,151,58,.38)",
                  }}
                >
                  Get a Quote
                  <ArrowRight size={16} aria-hidden="true"/>
                </Link>
              </div>

              {/* Response-time pill */}
              <div style={{
                marginTop:14, display:"flex", alignItems:"center", gap:6,
                padding:"6px 12px", borderRadius:100,
                background:"rgba(255,255,255,.07)",
                border:"1px solid rgba(255,255,255,.1)",
                width:"fit-content",
              }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", display:"inline-block", flexShrink:0 }} aria-hidden="true"/>
                <span style={{ fontSize:11, fontWeight:600, color:"rgba(255,255,255,.55)", letterSpacing:".04em" }}>
                  Typical response within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}