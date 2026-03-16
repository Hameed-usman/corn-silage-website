"use client";

import Link from "next/link";
import { useEffect, useRef, useState, memo } from "react";
import { ArrowRight, ClipboardList, PackageCheck, Ship } from "lucide-react";

const steps = [
  {
    Icon: ClipboardList,
    step: "01",
    title: "Send Your Inquiry",
    body: "Share your quantity, destination port, and timeline. We respond within 24 hours with pricing and availability.",
  },
  {
    Icon: PackageCheck,
    step: "02",
    title: "Packaging & QC",
    body: "Your silage is harvested, fermented to optimal pH, and vacuum-sealed. Lab reports, phytosanitary certificates, and COA are prepared.",
  },
  {
    Icon: Ship,
    step: "03",
    title: "Shipment & Delivery",
    body: "FOB/CIF shipping from Karachi Port. Real-time container tracking with full documentation delivered electronically before arrival.",
  },
];

export default memo(function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = secRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes hiw-up { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }

        .hiw-vis .hiw-h  { animation:hiw-up .6s ease .05s both; }
        .hiw-vis .hiw-s1 { animation:hiw-up .6s ease .18s both; }
        .hiw-vis .hiw-s2 { animation:hiw-up .6s ease .30s both; }
        .hiw-vis .hiw-s3 { animation:hiw-up .6s ease .42s both; }
        .hiw-vis .hiw-cta{ animation:hiw-up .55s ease .54s both; }

        .hiw-h,.hiw-s1,.hiw-s2,.hiw-s3,.hiw-cta { opacity:0; }

        .hiw-card {
          border-radius:20px;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.04);
          text-align:center;
          transition:transform .27s ease, background .27s ease, border-color .27s ease;
        }
        .hiw-card:hover {
          transform:translateY(-5px);
          background:rgba(255,255,255,.09);
          border-color:rgba(255,255,255,.14);
        }

        .hiw-step-badge {
          transition:box-shadow .27s ease, transform .27s cubic-bezier(.34,1.56,.64,1);
        }
        .hiw-card:hover .hiw-step-badge {
          transform:scale(1.08);
          box-shadow:0 6px 28px rgba(200,151,58,.55) !important;
        }

        .hiw-icon {
          transition:color .25s ease;
        }
        .hiw-card:hover .hiw-icon { color:rgba(255,255,255,.75) !important; }

        .hiw-cta-btn {
          border:1.5px solid rgba(255,255,255,.22);
          background:transparent;
          color:rgba(255,255,255,.82);
          transition:background .25s ease, border-color .25s ease, color .25s ease, transform .25s ease;
        }
        .hiw-cta-btn:hover {
          background:rgba(255,255,255,.09);
          border-color:rgba(255,255,255,.32);
          color:white;
          transform:translateY(-2px);
        }

        /* Connector line between cards on desktop */
        .hiw-connector {
          height:1px;
          background:linear-gradient(90deg,transparent,rgba(200,151,58,.35),rgba(200,151,58,.35),transparent);
        }

        @media(prefers-reduced-motion:reduce){
          .hiw-h,.hiw-s1,.hiw-s2,.hiw-s3,.hiw-cta{animation:none !important;opacity:1 !important;transform:none !important}
          .hiw-card:hover{transform:none}
        }
      `}</style>

      <section
        id="how-it-works"
        ref={secRef}
        aria-labelledby="how-it-works-heading"
        itemScope
        itemType="https://schema.org/HowTo"
        className={`relative overflow-hidden ${visible ? "hiw-vis" : ""}`}
        style={{ background:"#1A4D2E", padding:"clamp(64px,10vh,112px) 0" }}
      >
        {/* Background — static, no animation */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:"radial-gradient(circle,rgba(200,151,58,.22) 1px,transparent 1px)",
          backgroundSize:"52px 52px", opacity:.18,
        }}/>
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 65% 55% at 50% 50%,rgba(45,122,79,.38) 0%,transparent 70%)",
        }}/>

        <div className="container" style={{ position:"relative", zIndex:1 }}>
          {/* Header */}
          <div className="hiw-h" style={{ textAlign:"center", maxWidth:540, margin:"0 auto clamp(40px,6vh,64px)" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:14 }}>
              <span style={{ width:24, height:2, background:"rgba(200,151,58,.7)", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
              <span style={{ fontSize:10.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".16em", color:"rgba(200,151,58,.75)" }}>Simple Process</span>
              <span style={{ width:24, height:2, background:"rgba(200,151,58,.7)", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
            </div>
            <h2
              id="how-it-works-heading"
              itemProp="name"
              style={{
                fontFamily:"var(--font-display)",
                fontSize:"clamp(32px,4vw,52px)",
                fontWeight:700, color:"white",
                lineHeight:1.08, letterSpacing:"-0.02em",
              }}
            >
              From Inquiry to<br/>Your Feedlot
            </h2>
            <p itemProp="description" style={{ fontSize:"clamp(15px,1.7vw,17px)", color:"rgba(255,255,255,.6)", lineHeight:1.74, fontWeight:300, marginTop:16 }}>
              Three straightforward steps. We handle all documentation —
              from farm records to customs clearance.
            </p>
          </div>

          {/* Steps grid */}
          <div style={{ position:"relative" }}>
            {/* Connector line — desktop only */}
            <div
              className="hiw-connector"
              aria-hidden="true"
              style={{
                display:"none",
                position:"absolute",
                top:68, left:"calc(16.67% + 20px)", right:"calc(16.67% + 20px)",
              }}
              ref={el => { if (el) el.style.display = "block"; }}
            />

            <div
              style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
                gap:14,
              }}
              role="list"
              aria-label="Export process steps"
              itemProp="step"
            >
              {steps.map((step, i) => (
                <article
                  key={step.step}
                  className={`hiw-card hiw-s${i + 1}`}
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                  style={{ padding:"clamp(28px,3.5vw,44px) clamp(20px,3vw,36px)" }}
                >
                  <meta itemProp="position" content={String(i + 1)}/>

                  {/* Step number badge */}
                  <div
                    className="hiw-step-badge"
                    style={{
                      width:52, height:52, borderRadius:"50%",
                      background:"#C8973A",
                      boxShadow:"0 4px 18px rgba(200,151,58,.38)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      margin:"0 auto 20px",
                    }}
                    aria-label={`Step ${step.step}`}
                  >
                    <span style={{ fontFamily:"var(--font-display)", fontSize:20, fontWeight:700, color:"#1A4D2E", lineHeight:1 }}>{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className="hiw-icon"
                    style={{ display:"flex", justifyContent:"center", marginBottom:18, color:"rgba(255,255,255,.42)" }}
                    aria-hidden="true"
                  >
                    <step.Icon size={36}/>
                  </div>

                  <h3
                    itemProp="name"
                    style={{
                      fontFamily:"var(--font-display)",
                      fontSize:"clamp(18px,2.2vw,23px)",
                      fontWeight:700, color:"white",
                      letterSpacing:"-0.018em", marginBottom:10,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p itemProp="text" style={{ fontSize:14, color:"rgba(255,255,255,.56)", lineHeight:1.78 }}>
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="hiw-cta" style={{ textAlign:"center", marginTop:40 }}>
            <Link
              href="/export-process"
              className="hiw-cta-btn"
              aria-label="Learn more about our export process"
              style={{
                display:"inline-flex", alignItems:"center", gap:9,
                padding:"13px 26px", borderRadius:13,
                fontSize:14, fontWeight:600,
                textDecoration:"none",
              }}
            >
              Learn More About Our Process
              <ArrowRight size={15} aria-hidden="true"/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
});