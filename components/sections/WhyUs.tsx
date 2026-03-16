"use client";

import { useEffect, useRef, useState } from "react";
import { FlaskConical, Link2, BadgeDollarSign, Clock } from "lucide-react";

const cards = [
  {
    Icon: FlaskConical,
    num: "01",
    title: "Lab-Tested Quality",
    body: "Every batch undergoes third-party nutritional analysis before dispatch. Full Certificate of Analysis provided with each shipment.",
  },
  {
    Icon: Link2,
    num: "02",
    title: "Full Traceability",
    body: "Farm-to-port documentation. Know exactly which fields your silage came from, harvest dates, and storage conditions.",
  },
  {
    Icon: BadgeDollarSign,
    num: "03",
    title: "Competitive Pricing",
    body: "Direct farmer relationships — no middlemen. Better margins for you with flexible MOQs starting from 20MT.",
  },
  {
    Icon: Clock,
    num: "04",
    title: "On-Time Delivery",
    body: "98.4% on-time rate across all markets. Real-time container tracking and a dedicated account manager per buyer.",
  },
];

export default function WhyUs() {
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
        @keyframes wu-up { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }

        .wu-vis .wu-h  { animation:wu-up .6s ease .05s both; }
        .wu-vis .wu-c1 { animation:wu-up .6s ease .15s both; }
        .wu-vis .wu-c2 { animation:wu-up .6s ease .24s both; }
        .wu-vis .wu-c3 { animation:wu-up .6s ease .33s both; }
        .wu-vis .wu-c4 { animation:wu-up .6s ease .42s both; }

        .wu-h,.wu-c1,.wu-c2,.wu-c3,.wu-c4 { opacity:0; }

        .wu-card {
          border-radius:20px;
          border:1px solid rgba(26,77,46,.08);
          background:#fff;
          transition:transform .28s ease, box-shadow .28s ease, border-color .28s ease;
          position:relative; overflow:hidden;
        }
        .wu-card:hover {
          transform:translateY(-5px);
          box-shadow:0 16px 44px rgba(26,77,46,.12);
          border-color:rgba(26,77,46,.2);
        }
        .wu-icon-wrap {
          transition:transform .28s cubic-bezier(.34,1.56,.64,1), background .25s ease;
        }
        .wu-card:hover .wu-icon-wrap {
          transform:scale(1.1) rotate(-4deg);
          background:rgba(26,77,46,.13) !important;
        }
        /* Corner number */
        .wu-num {
          font-family:var(--font-mono);
          font-size:10.5px; font-weight:600;
          color:rgba(26,77,46,.14);
          position:absolute; top:18px; right:20px;
          letter-spacing:.05em;
        }
        /* Top accent bar on hover */
        .wu-card::before {
          content:"";
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#2D7A4F,#C8973A);
          transform:scaleX(0); transform-origin:left;
          transition:transform .32s ease;
          border-radius:3px 3px 0 0;
        }
        .wu-card:hover::before { transform:scaleX(1); }

        @media(prefers-reduced-motion:reduce){
          .wu-h,.wu-c1,.wu-c2,.wu-c3,.wu-c4{animation:none !important;opacity:1 !important;transform:none !important}
          .wu-card:hover{transform:none}
        }
      `}</style>

      <section
        id="why-us"
        ref={secRef}
        aria-labelledby="why-us-heading"
        itemScope
        itemType="https://schema.org/ItemList"
        className={visible ? "wu-vis" : ""}
        style={{ background:"#ffffff", padding:"clamp(64px,10vh,112px) 0" }}
      >
        <div className="container">
          {/* Header */}
          <div className="wu-h" style={{ textAlign:"center", maxWidth:560, margin:"0 auto clamp(40px,6vh,64px)" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:14 }}>
              <span style={{ width:24, height:2, background:"#C8973A", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
              <span style={{ fontSize:10.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".16em", color:"#2D7A4F" }}>Why Choose Us</span>
              <span style={{ width:24, height:2, background:"#C8973A", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
            </div>
            <h2
              id="why-us-heading"
              itemProp="name"
              style={{
                fontFamily:"var(--font-display)",
                fontSize:"clamp(32px,4vw,52px)",
                fontWeight:700, color:"#1C1C1E",
                lineHeight:1.08, letterSpacing:"-0.02em",
              }}
            >
              Built on Trust,<br/>Delivered with Precision
            </h2>
            <p style={{ fontSize:"clamp(15px,1.7vw,17px)", color:"#6B7280", lineHeight:1.74, fontWeight:300, marginTop:16, maxWidth:480, margin:"16px auto 0" }}>
              We don&apos;t just ship — we partner. Every order comes with lab reports,
              phytosanitary certificates, and dedicated logistics support.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
              gap:18,
            }}
            role="list"
            aria-label="Key reasons to choose GreenValley"
            itemProp="itemListElement"
          >
            {cards.map((card, i) => (
              <article
                key={card.num}
                className={`wu-card wu-c${i + 1}`}
                role="listitem"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="item"
                style={{ padding:"clamp(24px,3vw,36px)" }}
              >
                <meta itemProp="position" content={String(i + 1)}/>
                <span className="wu-num" aria-hidden="true">{card.num}</span>

                {/* Icon */}
                <div
                  className="wu-icon-wrap"
                  style={{
                    width:52, height:52, borderRadius:16,
                    background:"rgba(26,77,46,.07)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:"#1A4D2E", marginBottom:22,
                  }}
                  aria-hidden="true"
                >
                  <card.Icon size={24}/>
                </div>

                <h3
                  itemProp="name"
                  style={{
                    fontFamily:"var(--font-display)",
                    fontSize:"clamp(18px,2.2vw,21px)",
                    fontWeight:700, color:"#1C1C1E",
                    letterSpacing:"-0.018em", marginBottom:10,
                  }}
                >
                  {card.title}
                </h3>
                <p itemProp="description" style={{ fontSize:14, color:"#6B7280", lineHeight:1.76 }}>
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}