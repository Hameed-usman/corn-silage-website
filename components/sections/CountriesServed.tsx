"use client";

import Link from "next/link";
import { useEffect, useRef, useState, memo } from "react";
import { ArrowRight } from "lucide-react";
import { COUNTRIES_SERVED, STATS } from "@/lib/constants";

export default memo(function CountriesServed() {
  const [visible, setVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const statsRow = [
    { num: STATS.countries,   label: "Export Markets"  },
    { num: STATS.buyers,      label: "Active Buyers"   },
    { num: `${STATS.capacityMT}MT`, label: "Monthly Capacity" },
    { num: STATS.onTimeRate,  label: "On-Time Rate"    },
  ];

  return (
    <>
      <style>{`
        @keyframes cs-up { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)} }
        @keyframes cs-scale { from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)} }

        .cs-vis .cs-h    { animation:cs-up .6s ease .05s both; }
        .cs-vis .cs-grid { animation:cs-up .65s ease .18s both; }
        .cs-vis .cs-stat { animation:cs-scale .55s ease both; }
        .cs-vis .cs-st1  { animation-delay:.28s; }
        .cs-vis .cs-st2  { animation-delay:.36s; }
        .cs-vis .cs-st3  { animation-delay:.44s; }
        .cs-vis .cs-st4  { animation-delay:.52s; }

        .cs-h,.cs-grid { opacity:0; }
        .cs-stat { opacity:0; }

        .cs-country {
          border-radius:14px;
          background:#fff;
          border:1px solid rgba(26,77,46,.07);
          transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          text-align:center;
        }
        .cs-country:hover {
          transform:translateY(-4px);
          box-shadow:0 10px 28px rgba(26,77,46,.1);
          border-color:rgba(26,77,46,.16);
        }

        .cs-cta-link {
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .cs-cta-link:hover {
          transform:translateY(-2px);
          box-shadow:0 8px 28px rgba(26,77,46,.28) !important;
        }

        .cs-stat-cell {
          transition:background .25s ease;
        }
        .cs-stat-cell:hover { background:#f9f5ee !important; }

        @media(prefers-reduced-motion:reduce){
          .cs-h,.cs-grid,.cs-stat{animation:none !important;opacity:1 !important;transform:none !important}
          .cs-country:hover,.cs-stat-cell:hover{transform:none}
        }
      `}</style>

      <section
        id="countries"
        ref={secRef}
        aria-labelledby="countries-heading"
        itemScope
        itemType="https://schema.org/ItemList"
        className={visible ? "cs-vis" : ""}
        style={{ background:"#F5F0E8", padding:"clamp(64px,10vh,112px) 0" }}
      >
        <div className="container">
          {/* Header row */}
          <div
            className="cs-h"
            style={{
              display:"flex", flexWrap:"wrap",
              alignItems:"flex-end", justifyContent:"space-between",
              gap:"clamp(16px,2vw,24px)",
              marginBottom:"clamp(32px,5vh,52px)",
            }}
          >
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <span style={{ width:24, height:2, background:"#C8973A", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
                <span style={{ fontSize:10.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".16em", color:"#2D7A4F" }}>Global Reach</span>
              </div>
              <h2
                id="countries-heading"
                itemProp="name"
                style={{
                  fontFamily:"var(--font-display)",
                  fontSize:"clamp(30px,4vw,52px)",
                  fontWeight:700, color:"#1C1C1E",
                  lineHeight:1.07, letterSpacing:"-0.02em",
                }}
              >
                Trusted Across<br/>4 Continents
              </h2>
            </div>
            <Link
              href="/countries"
              className="cs-cta-link"
              aria-label="View all export markets"
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"12px 22px", borderRadius:12,
                background:"#1A4D2E", color:"white",
                fontSize:13, fontWeight:700,
                textDecoration:"none", flexShrink:0,
                boxShadow:"0 4px 18px rgba(26,77,46,.22)",
              }}
            >
              View All Markets
              <ArrowRight size={14} aria-hidden="true"/>
            </Link>
          </div>

          {/* Country cards */}
          <div
            className="cs-grid"
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",
              gap:12,
              marginBottom:"clamp(28px,4vh,48px)",
            }}
            role="list"
            aria-label="Countries we export to"
            itemProp="itemListElement"
          >
            {(COUNTRIES_SERVED ?? []).map((country: any, i: number) => (
              <article
                key={country.name}
                className="cs-country"
                role="listitem"
                itemScope
                itemType="https://schema.org/Country"
                style={{ padding:"clamp(14px,2vw,20px) 12px" }}
              >
                <span
                  style={{ fontSize:"clamp(28px,4vw,38px)", display:"block", marginBottom:8, lineHeight:1 }}
                  role="img"
                  aria-label={`Flag of ${country.name}`}
                >
                  {country.flag}
                </span>
                <div itemProp="name" style={{ fontWeight:600, fontSize:"clamp(11px,1.3vw,13px)", color:"#1C1C1E", lineHeight:1.3 }}>
                  {country.name}
                </div>
                <div style={{ fontSize:9.5, fontWeight:600, textTransform:"uppercase", letterSpacing:".08em", color:"#9ca3af", marginTop:3 }}>
                  {country.region}
                </div>
              </article>
            ))}
          </div>

          {/* Stats bar */}
          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",
              borderRadius:18,
              overflow:"hidden",
              border:"1px solid rgba(26,77,46,.09)",
            }}
            role="list"
            aria-label="Export statistics"
          >
            {statsRow.map((stat, i) => (
              <div
                key={i}
                role="listitem"
                className={`cs-stat cs-st${i + 1} cs-stat-cell`}
                style={{
                  background:"#ffffff",
                  padding:"clamp(20px,3vh,32px) 20px",
                  textAlign:"center",
                  borderLeft: i > 0 ? "1px solid rgba(26,77,46,.07)" : "none",
                }}
              >
                <div style={{
                  fontFamily:"var(--font-display)",
                  fontSize:"clamp(30px,4vw,44px)",
                  fontWeight:700, color:"#1A4D2E",
                  lineHeight:1, letterSpacing:"-0.02em",
                }}>
                  {stat.num}
                </div>
                <div style={{ fontSize:10.5, fontWeight:600, textTransform:"uppercase", letterSpacing:".1em", color:"#9ca3af", marginTop:8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});