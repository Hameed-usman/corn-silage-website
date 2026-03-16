"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
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
        @keyframes tm-up { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }

        .tm-vis .tm-h  { animation:tm-up .6s ease .05s both; }
        .tm-vis .tm-c1 { animation:tm-up .6s ease .15s both; }
        .tm-vis .tm-c2 { animation:tm-up .6s ease .26s both; }
        .tm-vis .tm-c3 { animation:tm-up .6s ease .37s both; }

        .tm-h,.tm-c1,.tm-c2,.tm-c3 { opacity:0; }

        .tm-card {
          border-radius:20px;
          background:#F5F0E8;
          border:1px solid transparent;
          position:relative; overflow:hidden;
          transition:transform .27s ease, box-shadow .27s ease, border-color .27s ease;
        }
        .tm-card:hover {
          transform:translateY(-5px);
          box-shadow:0 16px 44px rgba(26,77,46,.1);
          border-color:rgba(200,151,58,.28);
        }
        /* Decorative quote — static, no animation */
        .tm-quote-deco {
          font-family:var(--font-display);
          font-size:90px; font-weight:700; line-height:1;
          color:#C8973A; opacity:.14;
          position:absolute; top:12px; right:20px;
          pointer-events:none; user-select:none;
        }
        /* Gold accent bar on hover */
        .tm-card::before {
          content:"";
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#C8973A,#e8b84b);
          transform:scaleX(0); transform-origin:left;
          transition:transform .32s ease;
          border-radius:3px 3px 0 0;
        }
        .tm-card:hover::before { transform:scaleX(1); }

        @media(prefers-reduced-motion:reduce){
          .tm-h,.tm-c1,.tm-c2,.tm-c3{animation:none !important;opacity:1 !important;transform:none !important}
          .tm-card:hover{transform:none}
        }
      `}</style>

      <section
        id="testimonials"
        ref={secRef}
        aria-labelledby="testimonials-heading"
        itemScope
        itemType="https://schema.org/ItemList"
        className={visible ? "tm-vis" : ""}
        style={{ background:"#ffffff", padding:"clamp(64px,10vh,112px) 0" }}
      >
        <div className="container">
          {/* Header */}
          <div className="tm-h" style={{ textAlign:"center", maxWidth:520, margin:"0 auto clamp(40px,6vh,60px)" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:14 }}>
              <span style={{ width:24, height:2, background:"#C8973A", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
              <span style={{ fontSize:10.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".16em", color:"#2D7A4F" }}>Client Testimonials</span>
              <span style={{ width:24, height:2, background:"#C8973A", borderRadius:2, display:"inline-block" }} aria-hidden="true"/>
            </div>
            <h2
              id="testimonials-heading"
              itemProp="name"
              style={{
                fontFamily:"var(--font-display)",
                fontSize:"clamp(32px,4vw,52px)",
                fontWeight:700, color:"#1C1C1E",
                lineHeight:1.08, letterSpacing:"-0.02em",
              }}
            >
              Trusted by Buyers<br/>Across the Globe
            </h2>
          </div>

          {/* Cards */}
          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
              gap:18,
            }}
            role="list"
            aria-label="Customer testimonials"
            itemProp="itemListElement"
          >
            {(TESTIMONIALS ?? []).map((t: any, i: number) => (
              <article
                key={t.name}
                className={`tm-card tm-c${i + 1}`}
                role="listitem"
                itemScope
                itemType="https://schema.org/Review"
                style={{ padding:"clamp(24px,3vw,36px)" }}
              >
                {/* Decorative quote */}
                <span className="tm-quote-deco" aria-hidden="true">&ldquo;</span>

                {/* Stars */}
                <div
                  style={{ display:"flex", gap:3, marginBottom:18 }}
                  aria-label={`${t.rating} out of 5 stars`}
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(t.rating)}/>
                  <meta itemProp="bestRating"  content="5"/>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M7 1l1.63 3.31L12.5 4.85l-2.75 2.68.65 3.79L7 9.5l-3.4 1.82.65-3.79L1.5 4.85l3.87-.54L7 1z" fill="#C8973A"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  itemProp="reviewBody"
                  style={{
                    fontSize:"clamp(14px,1.6vw,15px)", color:"#1C1C1E",
                    lineHeight:1.78, fontWeight:300, fontStyle:"italic",
                    marginBottom:24, position:"relative", zIndex:1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div aria-hidden="true" style={{ width:32, height:2, background:"#C8973A", borderRadius:2, marginBottom:18 }}/>

                {/* Author */}
                <footer itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div itemProp="name" style={{ fontSize:14.5, fontWeight:700, color:"#1C1C1E" }}>{t.name}</div>
                  <div style={{ fontSize:12, color:"#2D7A4F", fontWeight:500, marginTop:2 }} itemProp="jobTitle">
                    {t.role} — <span itemProp="worksFor">{t.company}</span>
                  </div>
                  <div style={{ display:"inline-flex", alignItems:"center", gap:5, marginTop:6, fontSize:11, color:"#9ca3af", fontWeight:500 }}>
                    <span aria-hidden="true">{t.flag}</span>
                    <span itemProp="addressCountry">{t.country}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}