"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

const ITEMS = [
  { icon:"⭐", label:"Certified By",    value:"ISO 22000:2018",           detail:"International Standard" },
  { icon:"✅", label:"Halal",           value:"Certified Feed",            detail:"Globally Compliant"     },
  { icon:"🛡️", label:"Registered",     value:"PSQCA Approved",            detail:"National Standard"      },
  { icon:"📦", label:"Exporting Since", value:String(STATS.exportingSince),detail:"Global Trade Leader"    },
  { icon:"🌍", label:"Active In",       value:`${STATS.countries}+ Countries`, detail:"Worldwide Network"  },
  { icon:"🚢", label:"Monthly Volume",  value:`${STATS.capacityMT} MT`,   detail:"Consistent Supply"      },
];

export default function TrustBar() {
  const [visible, setVisible]  = useState(false);
  const [hovered, setHovered]  = useState<number|null>(null);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = barRef.current;
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
        @keyframes tb-rise { from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)} }
        @keyframes tb-marquee { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes tb-blink { 0%,100%{opacity:1}50%{opacity:.25} }
        @keyframes tb-scaleX { from{transform:scaleX(0)}to{transform:scaleX(1)} }

        .tb-vis .tb-i1{animation:tb-rise .5s ease .05s both}
        .tb-vis .tb-i2{animation:tb-rise .5s ease .11s both}
        .tb-vis .tb-i3{animation:tb-rise .5s ease .17s both}
        .tb-vis .tb-i4{animation:tb-rise .5s ease .23s both}
        .tb-vis .tb-i5{animation:tb-rise .5s ease .29s both}
        .tb-vis .tb-i6{animation:tb-rise .5s ease .35s both}

        .tb-item { opacity:0; }
        .tb-inner {
          border-radius:12px;
          border:1px solid transparent;
          transition:border-color .25s ease, background .25s ease, transform .25s ease;
        }
        .tb-inner:hover {
          border-color:rgba(200,151,58,.2);
          background:rgba(200,151,58,.06) !important;
          transform:translateY(-2px);
        }
        .tb-icon {
          transition:background .25s ease, box-shadow .25s ease;
        }
        .tb-inner:hover .tb-icon {
          background:rgba(200,151,58,.18) !important;
          box-shadow:0 0 0 3px rgba(200,151,58,.1);
        }

        .tb-sep {
          width:1px; align-self:stretch; flex-shrink:0;
          background:linear-gradient(to bottom,transparent,rgba(200,151,58,.18),transparent);
        }

        .tb-line {
          transform-origin:left; transform:scaleX(0);
        }
        .tb-vis .tb-line {
          animation:tb-scaleX .85s cubic-bezier(.16,1,.3,1) .05s forwards;
        }

        .tb-blink { animation:tb-blink 2.8s ease-in-out infinite; }

        .tb-track {
          will-change:transform;
          animation:tb-marquee 30s linear infinite;
          display:flex; align-items:center;
        }

        @media(prefers-reduced-motion:reduce){
          .tb-track{animation:none}
          .tb-item{animation:none !important;opacity:1 !important;transform:none !important}
          .tb-line{animation:none !important;transform:scaleX(1) !important}
        }
      `}</style>

      <aside
        ref={barRef}
        role="complementary"
        aria-label="GreenValley certifications and export statistics"
        itemScope
        itemType="https://schema.org/Organization"
        className={visible ? "tb-vis" : ""}
        style={{
          position:"relative", overflow:"hidden",
          background:"linear-gradient(180deg,#0f2e1a 0%,#0b2116 100%)",
          borderTop:"1px solid rgba(200,151,58,.16)",
          borderBottom:"1px solid rgba(200,151,58,.09)",
        }}
      >
        {/* Subtle grid — static */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:`linear-gradient(rgba(200,151,58,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(200,151,58,.025) 1px,transparent 1px)`,
          backgroundSize:"52px 52px",
        }}/>

        {/* Header label */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, paddingTop:10 }}>
          <span className="tb-blink" aria-hidden="true" style={{ width:5, height:5, borderRadius:"50%", background:"#C8973A", display:"inline-block" }}/>
          <span style={{ fontSize:8.5, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", color:"rgba(200,151,58,.48)" }}>
            Verified Credentials &amp; Export Stats
          </span>
          <span className="tb-blink" aria-hidden="true" style={{ width:5, height:5, borderRadius:"50%", background:"#C8973A", display:"inline-block", animationDelay:"1.4s" }}/>
        </div>

        {/* ── DESKTOP ── */}
        <div
          className="hidden md:flex"
          style={{ maxWidth:1280, margin:"0 auto", padding:"12px 2rem 18px", alignItems:"stretch", justifyContent:"center" }}
          role="list"
          aria-label="Certifications and statistics"
        >
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className={`tb-item tb-i${i+1}`}
              role="listitem"
              style={{ flex:"1 1 0", display:"flex", alignItems:"center" }}
            >
              {i > 0 && <div className="tb-sep" aria-hidden="true"/>}
              <div
                className="tb-inner"
                style={{
                  flex:1, display:"flex", alignItems:"center", gap:11,
                  padding:"9px 14px", margin:"0 3px", background:"transparent",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="tb-icon" style={{
                  width:36, height:36, borderRadius:9,
                  background:"rgba(200,151,58,.09)",
                  border:"1px solid rgba(200,151,58,.18)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:16, flexShrink:0,
                }} aria-hidden="true">{item.icon}</div>
                <div style={{ minWidth:0 }}>
                  <div style={{ fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".13em", color:"rgba(255,255,255,.34)", lineHeight:1, marginBottom:3 }}>
                    {item.label}
                  </div>
                  <div itemProp="description" style={{
                    fontFamily:"var(--font-display)", fontSize:14.5, fontWeight:700,
                    color: hovered === i ? "#e8b84b" : "#C8973A",
                    lineHeight:1, transition:"color .2s ease", whiteSpace:"nowrap",
                  }}>{item.value}</div>
                  <div style={{ fontSize:9, color:"rgba(255,255,255,.2)", marginTop:2, fontStyle:"italic", lineHeight:1 }}>{item.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE marquee ── */}
        <div
          className="flex md:hidden"
          style={{
            overflow:"hidden", padding:"12px 0 16px",
            maskImage:"linear-gradient(90deg,transparent 0%,black 7%,black 93%,transparent 100%)",
            WebkitMaskImage:"linear-gradient(90deg,transparent 0%,black 7%,black 93%,transparent 100%)",
          }}
          role="region"
          aria-label="Certifications — scrolling"
        >
          <div className="tb-track" aria-hidden="true">
            {[...ITEMS, ...ITEMS].map((item, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center", gap:9,
                padding:"5px 18px", flexShrink:0,
                borderRight:"1px solid rgba(200,151,58,.1)",
              }}>
                <div style={{
                  width:30, height:30, borderRadius:8,
                  background:"rgba(200,151,58,.09)",
                  border:"1px solid rgba(200,151,58,.18)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:14, flexShrink:0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".11em", color:"rgba(255,255,255,.32)", lineHeight:1, marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontFamily:"var(--font-display)", fontSize:13, fontWeight:700, color:"#C8973A", lineHeight:1, whiteSpace:"nowrap" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screen-reader list for mobile */}
        <ul className="sr-only" aria-label="Certifications and statistics">
          {ITEMS.map((item, i) => <li key={i}>{item.label}: {item.value}. {item.detail}.</li>)}
        </ul>

        {/* Gold bottom line */}
        <div className="tb-line" aria-hidden="true" style={{
          height:1,
          background:"linear-gradient(90deg,transparent 0%,rgba(200,151,58,.42) 30%,rgba(200,151,58,.65) 50%,rgba(200,151,58,.42) 70%,transparent 100%)",
        }}/>
      </aside>
    </>
  );
}