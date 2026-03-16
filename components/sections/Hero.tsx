"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { STATS } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  /* Single mount trigger — no mousemove, no per-char splits */
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const trustPoints = [
    "ISO Certified Exporter",
    "15+ Countries Served",
    "Verified Nutritional Profiles",
  ];

  const stats = [
    { num: STATS.countries,   suffix: "+",   label: "Countries Served",  note: "Active markets"        },
    { num: STATS.capacityMT,  suffix: " MT",  label: "Monthly Capacity",  note: "Reliable supply"       },
    { num: STATS.yearsActive, suffix: "+",   label: "Years Experience",   note: "Industry expertise"    },
    { num: "99",              suffix: "%",   label: "On-time Delivery",   note: "Verified track record" },
  ];

  return (
    <>
      <style>{`
        /* ── Shared entry animation — ONE keyframe used everywhere ── */
        @keyframes h-up {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes h-float {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-10px); }
        }
        @keyframes h-pulse-dot {
          0%,100% { opacity:1; }
          50%     { opacity:.3; }
        }

        .h-ready .h-e1 { animation:h-up .65s ease .1s both; }
        .h-ready .h-e2 { animation:h-up .65s ease .25s both; }
        .h-ready .h-e3 { animation:h-up .65s ease .4s both; }
        .h-ready .h-e4 { animation:h-up .65s ease .55s both; }
        .h-ready .h-e5 { animation:h-up .65s ease .68s both; }
        .h-ready .h-e6 { animation:h-up .65s ease .8s both; }
        .h-ready .h-e7 { animation:h-up .65s ease .95s both; }
        .h-ready .h-e8 { animation:h-up .65s ease 1.1s both; }

        /* Stats stagger */
        .h-ready .h-s1 { animation:h-up .55s ease 1.0s both; }
        .h-ready .h-s2 { animation:h-up .55s ease 1.1s both; }
        .h-ready .h-s3 { animation:h-up .55s ease 1.2s both; }
        .h-ready .h-s4 { animation:h-up .55s ease 1.3s both; }

        /* Floating panel — GPU transform only */
        .h-panel-float { animation:h-float 7s ease-in-out infinite; }

        /* CTA shimmer */
        .h-cta-primary { position:relative; overflow:hidden; }
        .h-cta-primary::after {
          content:"";
          position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 38%,rgba(255,255,255,.18) 50%,transparent 62%);
          transform:translateX(-100%);
          transition:transform .5s ease;
          pointer-events:none;
        }
        .h-cta-primary:hover::after { transform:translateX(100%); }
        .h-cta-primary:hover { box-shadow:0 10px 36px rgba(200,151,58,.65) !important; transform:translateY(-2px) !important; }

        .h-cta-secondary:hover {
          background:rgba(255,255,255,.09) !important;
          border-color:rgba(255,255,255,.3) !important;
          color:white !important;
        }

        /* Stat divider */
        .h-stat-div {
          width:1px; align-self:stretch; flex-shrink:0;
          background:linear-gradient(to bottom,transparent,rgba(255,255,255,.14),transparent);
        }

        /* Scroll cue mouse */
        @keyframes h-scroll-dot {
          0%   { transform:translateY(0); opacity:1; }
          80%  { transform:translateY(12px); opacity:0; }
          100% { transform:translateY(0); opacity:0; }
        }
        .h-scroll-dot { animation:h-scroll-dot 2s ease-in-out infinite; }

        @media (prefers-reduced-motion:reduce) {
          .h-ready [class*="h-e"],
          .h-ready [class*="h-s"] { animation:none !important; opacity:1 !important; transform:none !important; }
          .h-panel-float { animation:none !important; }
        }
        @media (max-width:1023px) { .h-right-col { display:none !important; } }
        @media (max-width:639px)  {
          .h-stats-row { flex-direction:column; gap:20px !important; }
          .h-stat-div  { display:none; }
          .h-eyebrow   { flex-wrap:wrap; }
        }
      `}</style>

      <section
        id="hero"
        ref={sectionRef}
        aria-labelledby="hero-headline"
        itemScope
        itemType="https://schema.org/WebPageElement"
        className={ready ? "h-ready" : ""}
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "#0b2116",
        }}
      >
        {/* ── Background — static gradients, no animation ── */}
        <div aria-hidden="true" style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
          <div style={{
            position:"absolute", inset:0,
            background:`
              radial-gradient(ellipse 85% 65% at 62% 38%, rgba(26,77,46,.88) 0%, transparent 65%),
              radial-gradient(ellipse 45% 45% at 8%  88%, rgba(200,151,58,.05) 0%, transparent 55%)
            `,
          }}/>
          {/* Dot grid — static, no animation */}
          <div style={{
            position:"absolute", inset:0,
            backgroundImage:"radial-gradient(circle,rgba(200,151,58,.18) 1px,transparent 1px)",
            backgroundSize:"56px 56px",
            opacity:.25,
          }}/>
          {/* Two decorative rings — static */}
          <div style={{
            position:"absolute",
            width:720, height:720,
            right:-180, top:-260,
            borderRadius:"50%",
            border:"1px solid rgba(200,151,58,.07)",
          }}/>
          <div style={{
            position:"absolute",
            width:1060, height:1060,
            right:-410, top:-500,
            borderRadius:"50%",
            border:"1px solid rgba(200,151,58,.04)",
          }}/>
        </div>

        {/* ── Main content ── */}
        <div
          className="container"
          style={{
            position:"relative", zIndex:1, flex:1, display:"flex", flexDirection:"column",
            paddingTop:"clamp(96px,13vh,136px)",
            paddingBottom:"clamp(56px,8vh,96px)",
          }}
        >
          <div style={{
            display:"grid",
            gridTemplateColumns:"1fr",
            gap:"clamp(28px,4vw,56px)",
            flex:1, alignItems:"center",
          }}
          className="lg:!grid-cols-[1fr_400px] xl:!grid-cols-[1fr_460px]"
          >
            {/* ── LEFT ── */}
            <div style={{ display:"flex", flexDirection:"column" }}>

              {/* Eyebrow */}
              <div
                className="h-e1 h-eyebrow"
                style={{
                  display:"inline-flex", alignItems:"center",
                  gap:8, marginBottom:"clamp(18px,3vh,28px)",
                  opacity:0,
                }}
              >
                <span style={{
                  display:"inline-flex", alignItems:"center", gap:6,
                  padding:"5px 14px 5px 8px", borderRadius:100,
                  background:"rgba(200,151,58,.11)",
                  border:"1px solid rgba(200,151,58,.26)",
                  fontSize:10.5, fontWeight:700, letterSpacing:".12em",
                  textTransform:"uppercase", color:"#e8b84b",
                }}>
                  <span style={{
                    width:6, height:6, borderRadius:"50%",
                    background:"#C8973A",
                    boxShadow:"0 0 0 3px rgba(200,151,58,.22)",
                    display:"block", flexShrink:0,
                    animation:"h-pulse-dot 2.8s ease-in-out infinite",
                  }}/>
                  Pakistan&apos;s Premium Silage Exporter
                </span>
              </div>

              {/* Headline */}
              <h1
                id="hero-headline"
                itemProp="headline"
                className="h-e2"
                style={{
                  fontFamily:"var(--font-display)",
                  fontSize:"clamp(40px,5.6vw,78px)",
                  fontWeight:700, lineHeight:1.05,
                  letterSpacing:"-0.025em",
                  color:"white",
                  marginBottom:"clamp(18px,2.5vh,28px)",
                  opacity:0,
                }}
              >
                Premium{" "}
                <span style={{ color:"#C8973A", position:"relative", display:"inline-block" }}>
                  Corn Silage
                  <svg aria-hidden="true" style={{
                    position:"absolute", bottom:-5, left:0,
                    width:"100%", height:9,
                  }} viewBox="0 0 220 9" preserveAspectRatio="none" fill="none">
                    <path d="M0 6Q55 1 110 5Q165 9 220 4"
                      stroke="#C8973A" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
                  </svg>
                </span>
                <br />
                <span style={{ color:"rgba(255,255,255,.88)" }}>Exported Globally</span>
              </h1>

              {/* Sub */}
              <p
                className="h-e3"
                itemProp="description"
                style={{
                  color:"rgba(255,255,255,.63)",
                  fontSize:"clamp(15px,1.8vw,18px)",
                  fontWeight:300, lineHeight:1.78,
                  maxWidth:500,
                  marginBottom:"clamp(24px,3.5vh,36px)",
                  opacity:0,
                }}
              >
                High-energy livestock feed from Pakistan&apos;s most fertile belts —
                delivering <strong style={{ color:"rgba(255,255,255,.85)", fontWeight:500 }}>consistent quality</strong>,{" "}
                <strong style={{ color:"rgba(255,255,255,.85)", fontWeight:500 }}>verified nutrition</strong>, and
                reliable shipments to{" "}
                <strong style={{ color:"#C8973A", fontWeight:600 }}>15+ countries</strong>.
              </p>

              {/* CTAs */}
              <div
                className="h-e4"
                style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:"clamp(24px,3.5vh,40px)", opacity:0 }}
              >
                <Link
                  href="/contact"
                  className="h-cta-primary"
                  aria-label="Request a quote for corn silage export"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:9,
                    padding:"13px 28px", borderRadius:13,
                    background:"linear-gradient(135deg,#C8973A 0%,#dfa83e 100%)",
                    color:"#0b2116", fontSize:14, fontWeight:700,
                    letterSpacing:".01em", textDecoration:"none",
                    boxShadow:"0 5px 24px rgba(200,151,58,.45)",
                    transition:"transform .25s ease, box-shadow .25s ease",
                  }}
                >
                  Request a Quote
                  <ArrowRight size={15} aria-hidden="true"/>
                </Link>
                <Link
                  href="/product"
                  className="h-cta-secondary"
                  aria-label="View corn silage product specifications"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:9,
                    padding:"13px 26px", borderRadius:13,
                    border:"1.5px solid rgba(255,255,255,.18)",
                    background:"rgba(255,255,255,.04)",
                    color:"rgba(255,255,255,.82)", fontSize:14, fontWeight:600,
                    textDecoration:"none",
                    transition:"all .25s ease",
                  }}
                >
                  View Product Specs
                  <ArrowUpRight size={14} aria-hidden="true"/>
                </Link>
              </div>

              {/* Trust ticks */}
              <div
                className="h-e5"
                role="list"
                aria-label="Key credentials"
                style={{ display:"flex", flexWrap:"wrap", gap:"8px 18px", opacity:0 }}
              >
                {trustPoints.map((pt, i) => (
                  <div key={i} role="listitem"
                    style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
                    <CheckCircle2 size={13} aria-hidden="true" style={{ color:"#C8973A", flexShrink:0 }}/>
                    <span style={{ fontSize:12, color:"rgba(255,255,255,.52)", fontWeight:500 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT — simple panel, ONE float animation ── */}
            <div
              className="h-right-col h-e6"
              style={{ position:"relative", alignSelf:"stretch", minHeight:460, opacity:0 }}
            >
              <div
                className="h-panel-float"
                style={{
                  position:"absolute", inset:0,
                  borderRadius:24,
                  background:"linear-gradient(145deg,rgba(45,122,79,.12) 0%,rgba(15,46,26,.32) 100%)",
                  border:"1px solid rgba(200,151,58,.14)",
                  overflow:"hidden",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}
                role="img"
                aria-label="GreenValley corn silage product visual"
              >
                {/* Static inner grid */}
                <div aria-hidden="true" style={{
                  position:"absolute", inset:0,
                  backgroundImage:`
                    linear-gradient(rgba(200,151,58,.04) 1px,transparent 1px),
                    linear-gradient(90deg,rgba(200,151,58,.04) 1px,transparent 1px)
                  `,
                  backgroundSize:"38px 38px",
                }}/>
                {/* Corner brackets */}
                {[
                  { top:14,    left:14,  d:"M0 18V0H18"    },
                  { top:14,    right:14, d:"M18 18V0H0",  transform:"scaleX(-1)" },
                  { bottom:14, left:14,  d:"M0 0V18H18",  transform:"scaleY(-1)" },
                  { bottom:14, right:14, d:"M18 0V18H0",  transform:"scale(-1)" },
                ].map((b, i) => (
                  <div key={i} aria-hidden="true" style={{ position:"absolute", ...b as any }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d={b.d} stroke="rgba(200,151,58,.4)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                ))}
                {/* Central emoji */}
                <div style={{
                  width:150, height:150, borderRadius:"50%",
                  background:"radial-gradient(circle,rgba(200,151,58,.16) 0%,rgba(200,151,58,.03) 65%,transparent 80%)",
                  border:"1px solid rgba(200,151,58,.18)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:72, position:"relative",
                }} aria-hidden="true">
                  🌽
                </div>
              </div>

              {/* ISO badge */}
              <div style={{
                position:"absolute", top:"8%", left:"-12%", zIndex:2,
                padding:"12px 16px", borderRadius:14,
                background:"rgba(11,33,22,.9)",
                border:"1px solid rgba(200,151,58,.26)",
                boxShadow:"0 6px 28px rgba(0,0,0,.35)",
              }} aria-label="ISO Certified Exporter">
                <div style={{ fontFamily:"var(--font-display)", fontSize:23, fontWeight:700, color:"#C8973A", lineHeight:1, marginBottom:3 }}>ISO</div>
                <div style={{ fontSize:8.5, fontWeight:700, letterSpacing:".13em", textTransform:"uppercase", color:"rgba(255,255,255,.42)" }}>Certified</div>
              </div>

              {/* Countries badge */}
              <div style={{
                position:"absolute", top:"20%", right:"-8%", zIndex:2,
                padding:"11px 15px", borderRadius:14, textAlign:"center",
                background:"linear-gradient(135deg,rgba(200,151,58,.16) 0%,rgba(11,33,22,.92) 100%)",
                border:"1px solid rgba(200,151,58,.28)",
                boxShadow:"0 6px 28px rgba(0,0,0,.35)",
              }} aria-label={`Active in ${STATS.countries} countries`}>
                <div style={{ fontFamily:"var(--font-display)", fontSize:26, fontWeight:700, color:"#C8973A", lineHeight:1 }}>{STATS.countries}</div>
                <div style={{ fontSize:8.5, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.42)", marginTop:3 }}>Countries</div>
              </div>

              {/* Moisture badge */}
              <div style={{
                position:"absolute", bottom:"10%", left:"-10%", zIndex:2,
                padding:"10px 14px", borderRadius:13, minWidth:120,
                background:"rgba(11,33,22,.9)",
                border:"1px solid rgba(255,255,255,.09)",
                boxShadow:"0 6px 24px rgba(0,0,0,.35)",
              }} aria-label="Optimal moisture 65-70%">
                <div style={{ fontSize:9, fontWeight:700, letterSpacing:".11em", textTransform:"uppercase", color:"rgba(255,255,255,.38)", marginBottom:3 }}>Moisture</div>
                <div style={{ fontFamily:"var(--font-display)", fontSize:20, fontWeight:700, color:"#C8973A", lineHeight:1 }}>65–70%</div>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div style={{
            marginTop:"clamp(32px,5vh,56px)",
            paddingTop:"clamp(20px,3.5vh,36px)",
            borderTop:"1px solid rgba(255,255,255,.07)",
          }}>
            <div
              className="h-stats-row"
              style={{ display:"flex", alignItems:"stretch", flexWrap:"wrap", gap:0 }}
              role="list"
              aria-label="Company statistics"
            >
              {stats.map((s, i) => (
                <div key={i} role="listitem"
                  className={`h-s${i + 1}`}
                  style={{ flex:"1 1 120px", display:"flex", alignItems:"center", opacity:0 }}
                >
                  {i > 0 && <div className="h-stat-div" style={{ margin:"0 clamp(14px,2.5vw,36px)" }}/>}
                  <div>
                    <div style={{ display:"flex", alignItems:"baseline", gap:2 }}>
                      <span style={{
                        fontFamily:"var(--font-display)",
                        fontSize:"clamp(26px,3.2vw,40px)",
                        fontWeight:700, color:"white", lineHeight:1, letterSpacing:"-0.02em",
                      }}>{s.num}</span>
                      <span style={{
                        fontFamily:"var(--font-display)",
                        fontSize:"clamp(16px,2vw,24px)",
                        fontWeight:700, color:"#C8973A", lineHeight:1,
                      }}>{s.suffix}</span>
                    </div>
                    <div style={{ fontSize:10.5, fontWeight:600, color:"rgba(255,255,255,.5)", textTransform:"uppercase", letterSpacing:".1em", marginTop:4 }}>{s.label}</div>
                    <div style={{ fontSize:10, color:"rgba(255,255,255,.26)", marginTop:2, fontStyle:"italic" }}>{s.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div className="h-e8" aria-hidden="true" style={{
          position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)",
          display:"flex", flexDirection:"column", alignItems:"center", gap:6, zIndex:5,
          opacity:0,
        }}>
          <span style={{ fontSize:8.5, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color:"rgba(255,255,255,.25)" }}>Scroll</span>
          <div style={{
            width:20, height:32, borderRadius:10,
            border:"1.5px solid rgba(255,255,255,.16)",
            display:"flex", justifyContent:"center", paddingTop:5,
          }}>
            <div className="h-scroll-dot" style={{ width:3, height:6, borderRadius:2, background:"#C8973A" }}/>
          </div>
        </div>

        {/* Bottom fade */}
        <div aria-hidden="true" style={{
          position:"absolute", bottom:0, left:0, right:0, height:100,
          background:"linear-gradient(to bottom,transparent,rgba(11,33,22,.85))",
          pointerEvents:"none", zIndex:4,
        }}/>
      </section>
    </>
  );
}