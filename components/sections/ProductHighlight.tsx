"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, FlaskConical, Leaf, Globe, Award } from "lucide-react";
import { PRODUCT_SPECS } from "@/lib/constants";

/* ─────────────────────────────────────────────────────
   SVG circular progress ring
───────────────────────────────────────────────────── */
function RingProgress({
  pct,
  size = 52,
  stroke = 3.5,
  animate = false,
  color = "#C8973A",
}: {
  pct: number;
  size?: number;
  stroke?: number;
  animate?: boolean;
  color?: string;
}) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      style={{ transform: "rotate(-90deg)", flexShrink: 0 }}
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(200,151,58,0.1)"
        strokeWidth={stroke}
      />
      {/* Fill */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={animate ? circ : offset}
        style={
          animate
            ? {
                transition: `stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)`,
                strokeDashoffset: offset,
              }
            : {}
        }
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   Spec card
───────────────────────────────────────────────────── */
function SpecCard({
  spec,
  index,
  visible,
}: {
  spec: { label: string; value: string | number; unit?: string; pct: number };
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="ph-spec-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: 0,
        animation: visible
          ? `ph-rise .6s cubic-bezier(.16,1,.3,1) ${0.55 + index * 0.09}s forwards`
          : "none",
        borderRadius: 18,
        background: hovered
          ? "linear-gradient(135deg, #1A4D2E 0%, #0f2e1a 100%)"
          : "rgba(255,255,255,0.72)",
        border: `1px solid ${hovered ? "rgba(200,151,58,0.35)" : "rgba(26,77,46,0.1)"}`,
        backdropFilter: "blur(12px)",
        padding: "18px 18px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: hovered
          ? "0 12px 40px rgba(26,77,46,0.25), inset 0 1px 0 rgba(255,255,255,0.06)"
          : "0 2px 12px rgba(26,77,46,0.06)",
        transition:
          "background .35s ease, border-color .35s ease, box-shadow .35s ease, transform .3s cubic-bezier(.34,1.56,.64,1)",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shimmer on hover */}
      <div
        aria-hidden="true"
        className="ph-shimmer"
        style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.06) 50%,transparent 65%)",
          transform: hovered ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform .6s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top row: ring + value */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 30,
              fontWeight: 700,
              lineHeight: 1,
              color: hovered ? "#e8b84b" : "#1A4D2E",
              transition: "color .3s ease",
              letterSpacing: "-0.02em",
            }}
          >
            {spec.value}
            {spec.unit && (
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  opacity: 0.55,
                  marginLeft: 3,
                  fontFamily: "var(--font-body)",
                  letterSpacing: 0,
                }}
              >
                {spec.unit}
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: 9.5,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginTop: 4,
              color: hovered ? "rgba(255,255,255,0.45)" : "#9ca3af",
              transition: "color .3s ease",
            }}
          >
            {spec.label}
          </div>
        </div>

        {/* Ring */}
        <RingProgress
          pct={spec.pct}
          size={50}
          stroke={3.5}
          animate={visible}
          color={hovered ? "#e8b84b" : "#C8973A"}
        />
      </div>

      {/* Progress bar (thin) */}
      <div
        aria-hidden="true"
        style={{
          height: 2,
          borderRadius: 2,
          background: hovered ? "rgba(255,255,255,0.1)" : "rgba(26,77,46,0.08)",
          overflow: "hidden",
          transition: "background .3s ease",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 2,
            background: hovered
              ? "linear-gradient(90deg, #C8973A, #e8b84b)"
              : "linear-gradient(90deg, #2D7A4F, #C8973A)",
            width: visible ? `${spec.pct}%` : "0%",
            transition: `width 1.4s cubic-bezier(0.16,1,0.3,1) ${0.6 + index * 0.09}s`,
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────── */
export default function ProductHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const badges = [
    { icon: <Award size={13} aria-hidden="true" />, label: "ISO 22000:2018" },
    { icon: <Leaf size={13} aria-hidden="true" />, label: "Halal Certified" },
    { icon: <Globe size={13} aria-hidden="true" />, label: "15+ Countries" },
    { icon: <FlaskConical size={13} aria-hidden="true" />, label: "Lab Tested" },
  ];

  return (
    <>
      <style>{`
        /* GPU-composited only — transform + opacity */
        @keyframes ph-rise {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ph-left {
          from { opacity:0; transform:translateX(-28px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes ph-scale {
          from { opacity:0; transform:scale(0.92); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes ph-float {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          40%     { transform:translateY(-14px) rotate(1.5deg); }
          70%     { transform:translateY(-7px) rotate(-1deg); }
        }
        @keyframes ph-grain {
          0%,100% { transform:translate(0,0); }
          20%     { transform:translate(-1%,1%); }
          60%     { transform:translate(1%,-1%); }
        }
        @keyframes ph-scan {
          from { top:-2px; }
          to   { top:100%; }
        }
        @keyframes ph-dot-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%     { opacity:.5; transform:scale(.7); }
        }
        @keyframes ph-badge-in {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .ph-heading {
          opacity:0;
        }
        .ph-visible .ph-heading {
          animation:ph-left .7s cubic-bezier(.16,1,.3,1) .1s forwards;
        }
        .ph-sub {
          opacity:0;
        }
        .ph-visible .ph-sub {
          animation:ph-left .7s cubic-bezier(.16,1,.3,1) .22s forwards;
        }
        .ph-visual {
          opacity:0;
        }
        .ph-visible .ph-visual {
          animation:ph-scale .85s cubic-bezier(.16,1,.3,1) .15s forwards;
        }
        .ph-cta {
          opacity:0;
        }
        .ph-visible .ph-cta {
          animation:ph-rise .6s cubic-bezier(.16,1,.3,1) 1s forwards;
        }

        /* Grain */
        .ph-grain-layer {
          position:absolute; inset:-50%; width:200%; height:200%;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.035'/%3E%3C/svg%3E");
          opacity:.6; pointer-events:none;
          animation:ph-grain 10s steps(3) infinite;
        }

        /* Spec card shimmer handled inline */
        .ph-spec-card { will-change:transform; }

        /* CTA button shimmer */
        .ph-cta-btn {
          position:relative; overflow:hidden;
        }
        .ph-cta-btn::after {
          content:"";
          position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,.12) 50%,transparent 65%);
          transform:translateX(-100%);
          transition:transform .55s ease;
          pointer-events:none;
        }
        .ph-cta-btn:hover::after { transform:translateX(100%); }

        /* Annotation lines */
        @keyframes ph-anno-grow {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }
        .ph-anno-line {
          transform-origin:left;
          transform:scaleX(0); opacity:0;
        }
        .ph-visible .ph-anno-line {
          animation:ph-anno-grow .6s ease forwards;
        }

        @media (prefers-reduced-motion:reduce) {
          .ph-heading,.ph-sub,.ph-visual,.ph-cta,
          .ph-spec-card,.ph-anno-line {
            animation:none !important;
            opacity:1 !important;
            transform:none !important;
          }
        }
      `}</style>

      <section
        id="product"
        ref={sectionRef}
        aria-labelledby="product-heading"
        itemScope
        itemType="https://schema.org/Product"
        className={visible ? "ph-visible" : ""}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(175deg, #F5F0E8 0%, #EDE6D8 50%, #F5F0E8 100%)",
          padding: "clamp(72px,10vh,120px) 0",
        }}
      >
        {/* ── Background textures ── */}
        <div aria-hidden="true" style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
          <div className="ph-grain-layer" />
        </div>

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:`
              linear-gradient(rgba(26,77,46,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,77,46,0.035) 1px, transparent 1px)
            `,
            backgroundSize:"56px 56px",
          }}
        />

        {/* Large decorative circle, right edge */}
        <div
          aria-hidden="true"
          style={{
            position:"absolute",
            right:-240, top:"50%",
            transform:"translateY(-50%)",
            width:600, height:600,
            borderRadius:"50%",
            border:"1px solid rgba(26,77,46,0.07)",
            pointerEvents:"none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position:"absolute",
            right:-360, top:"50%",
            transform:"translateY(-50%)",
            width:860, height:860,
            borderRadius:"50%",
            border:"1px solid rgba(26,77,46,0.04)",
            pointerEvents:"none",
          }}
        />

        <div
          className="container"
          style={{ position:"relative", zIndex:1 }}
        >
          {/* ══════════════════════════════════════════
              SECTION HEADER
          ══════════════════════════════════════════ */}
          <div style={{ marginBottom:"clamp(44px,7vh,72px)" }}>
            <div className="ph-heading">
              {/* Tag */}
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                <span
                  style={{
                    display:"inline-block", width:28, height:2,
                    background:"#C8973A", borderRadius:2, flexShrink:0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontSize:10.5, fontWeight:700, textTransform:"uppercase",
                    letterSpacing:"0.16em", color:"#2D7A4F",
                  }}
                >
                  Our Product
                </span>
              </div>

              {/* Headline — itemProp for Schema.org */}
              <h2
                id="product-heading"
                itemProp="name"
                style={{
                  fontFamily:"var(--font-display)",
                  fontSize:"clamp(34px,4.2vw,58px)",
                  fontWeight:700,
                  lineHeight:1.05,
                  letterSpacing:"-0.025em",
                  color:"#1C1C1E",
                  maxWidth:560,
                }}
              >
                Nutritionally Dense{" "}
                <span style={{ position:"relative", display:"inline-block" }}>
                  <span style={{ color:"#1A4D2E" }}>Corn Silage</span>
                  {/* Underline */}
                  <svg
                    aria-hidden="true"
                    style={{ position:"absolute", bottom:-4, left:0, width:"100%", height:8 }}
                    viewBox="0 0 220 8"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M0 6 Q55 1 110 5 Q165 9 220 4"
                      stroke="#C8973A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity=".6"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <p
              className="ph-sub"
              itemProp="description"
              style={{
                fontSize:"clamp(15px,1.7vw,17.5px)",
                color:"#6B7280",
                lineHeight:1.76,
                fontWeight:300,
                maxWidth:520,
                marginTop:18,
              }}
            >
              Every bale fermented to optimal pH, tested for protein and energy content,
              then vacuum-sealed for international shipping —{" "}
              <strong style={{ fontWeight:600, color:"#4B5563" }}>quality from farm to feedlot</strong>.
            </p>
          </div>

          {/* ══════════════════════════════════════════
              MAIN GRID — visual left, specs right
          ══════════════════════════════════════════ */}
          <div
            style={{
              display:"grid",
              gridTemplateColumns:"1fr",
              gap:"clamp(32px,5vw,72px)",
              alignItems:"start",
            }}
            className="lg:!grid-cols-[1fr_1fr]"
          >
            {/* ── LEFT COLUMN — specimen panel ── */}
            <div className="ph-visual" style={{ position:"relative" }}>

              {/* Main dark panel */}
              <div
                style={{
                  borderRadius:28,
                  overflow:"hidden",
                  background:"linear-gradient(145deg, #0f2e1a 0%, #1A4D2E 50%, #0b2116 100%)",
                  aspectRatio:"4/3",
                  position:"relative",
                  boxShadow:"0 24px 80px rgba(15,46,26,0.35), 0 4px 0 rgba(200,151,58,0.2)",
                  border:"1px solid rgba(200,151,58,0.15)",
                }}
                role="img"
                aria-label="GreenValley premium corn silage product specimen display"
              >
                {/* Inner grid */}
                <div
                  aria-hidden="true"
                  style={{
                    position:"absolute", inset:0,
                    backgroundImage:`
                      linear-gradient(rgba(200,151,58,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(200,151,58,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize:"36px 36px",
                  }}
                />

                {/* Radial glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position:"absolute", inset:0,
                    background:"radial-gradient(ellipse 70% 60% at 45% 45%, rgba(200,151,58,0.1) 0%, transparent 65%)",
                  }}
                />

                {/* Scan line */}
                <div
                  aria-hidden="true"
                  style={{
                    position:"absolute", left:0, right:0, height:1,
                    background:"linear-gradient(90deg,transparent,rgba(200,151,58,0.3),transparent)",
                    animation:"ph-scan 6s linear infinite",
                    pointerEvents:"none",
                  }}
                />

                {/* Corner brackets */}
                {[
                  { top:14, left:14, rotate:0 },
                  { top:14, right:14, rotate:90 },
                  { bottom:14, right:14, rotate:180 },
                  { bottom:14, left:14, rotate:270 },
                ].map((pos, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    style={{ position:"absolute", ...pos as any }}
                  >
                    <svg
                      width="20" height="20" viewBox="0 0 20 20" fill="none"
                      style={{ transform:`rotate(${pos.rotate}deg)` }}
                    >
                      <path
                        d="M0 16V0H16"
                        stroke="rgba(200,151,58,0.45)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                ))}

                {/* Central product emoji */}
                <div
                  style={{
                    position:"absolute", inset:0,
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}
                >
                  <div
                    style={{
                      fontSize:"clamp(72px,9vw,108px)",
                      animation:"ph-float 7s ease-in-out infinite",
                      filter:"drop-shadow(0 16px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(200,151,58,0.15))",
                      lineHeight:1,
                      userSelect:"none",
                    }}
                    aria-hidden="true"
                  >
                    🌽
                  </div>
                </div>

                {/* ── Annotation lines ── */}
                {/* Left annotation */}
                <div
                  aria-hidden="true"
                  style={{
                    position:"absolute", left:28, top:"38%",
                    display:"flex", alignItems:"center", gap:0,
                  }}
                >
                  <div
                    className="ph-anno-line"
                    style={{
                      width:40, height:1,
                      background:"rgba(200,151,58,0.45)",
                      animationDelay:".7s",
                    }}
                  />
                  <div
                    style={{
                      padding:"4px 8px",
                      borderRadius:6,
                      background:"rgba(200,151,58,0.12)",
                      border:"1px solid rgba(200,151,58,0.25)",
                      marginLeft:6,
                      opacity:0,
                      animation: visible ? "ph-rise .5s ease .9s forwards" : "none",
                    }}
                  >
                    <div style={{ fontSize:8.5, fontWeight:700, color:"#C8973A", letterSpacing:"0.1em", textTransform:"uppercase" }}>
                      pH Optimised
                    </div>
                    <div style={{ fontSize:9, color:"rgba(255,255,255,0.4)", marginTop:1 }}>
                      4.0 – 4.5
                    </div>
                  </div>
                </div>

                {/* Right annotation */}
                <div
                  aria-hidden="true"
                  style={{
                    position:"absolute", right:28, bottom:"35%",
                    display:"flex", alignItems:"center", gap:0,
                    flexDirection:"row-reverse",
                  }}
                >
                  <div
                    className="ph-anno-line"
                    style={{
                      width:36, height:1,
                      background:"rgba(200,151,58,0.35)",
                      animationDelay:".85s",
                      transformOrigin:"right",
                    }}
                  />
                  <div
                    style={{
                      padding:"4px 8px",
                      borderRadius:6,
                      background:"rgba(45,122,79,0.15)",
                      border:"1px solid rgba(45,122,79,0.3)",
                      marginRight:6,
                      textAlign:"right",
                      opacity:0,
                      animation: visible ? "ph-rise .5s ease 1.05s forwards" : "none",
                    }}
                  >
                    <div style={{ fontSize:8.5, fontWeight:700, color:"#3a9362", letterSpacing:"0.1em", textTransform:"uppercase" }}>
                      Vacuum Sealed
                    </div>
                    <div style={{ fontSize:9, color:"rgba(255,255,255,0.4)", marginTop:1 }}>
                      Intl. Grade
                    </div>
                  </div>
                </div>

                {/* Grade badge — bottom right overlap */}
                <div
                  style={{
                    position:"absolute",
                    bottom:-1, right:-1,
                    borderRadius:"28px 0 28px 0",
                    background:"linear-gradient(135deg, #C8973A 0%, #e8b84b 100%)",
                    padding:"14px 22px",
                    boxShadow:"0 -4px 24px rgba(200,151,58,0.35)",
                  }}
                  itemProp="additionalProperty"
                  aria-label="Product quality grade: A+"
                >
                  <div
                    style={{
                      fontFamily:"var(--font-display)",
                      fontSize:34,
                      fontWeight:700,
                      color:"#0b2116",
                      lineHeight:1,
                    }}
                  >
                    A+
                  </div>
                  <div style={{ fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:"rgba(11,33,22,0.65)", marginTop:3 }}>
                    Quality Grade
                  </div>
                </div>
              </div>

              {/* ── Origin badge (floating outside panel) ── */}
              <div
                style={{
                  position:"absolute",
                  top:-18, left:-14,
                  borderRadius:14,
                  background:"white",
                  border:"1px solid rgba(26,77,46,0.1)",
                  boxShadow:"0 6px 24px rgba(26,77,46,0.12)",
                  padding:"10px 14px",
                  display:"flex",
                  alignItems:"center",
                  gap:8,
                  opacity:0,
                  animation: visible ? "ph-rise .55s ease .4s forwards" : "none",
                }}
                aria-label="Product origin: Pakistan"
              >
                <span style={{ fontSize:20, lineHeight:1 }} aria-hidden="true">🇵🇰</span>
                <div>
                  <div style={{ fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:"#9ca3af" }}>
                    Origin
                  </div>
                  <div style={{ fontSize:13.5, fontWeight:700, color:"#1A4D2E", lineHeight:1, marginTop:2 }}>
                    Pakistan
                  </div>
                </div>
              </div>

              {/* ── Certification badges row ── */}
              <div
                style={{
                  display:"flex",
                  flexWrap:"wrap",
                  gap:8,
                  marginTop:20,
                }}
                role="list"
                aria-label="Product certifications"
              >
                {badges.map((b, i) => (
                  <div
                    key={i}
                    role="listitem"
                    style={{
                      display:"inline-flex",
                      alignItems:"center",
                      gap:6,
                      padding:"6px 12px 6px 8px",
                      borderRadius:100,
                      background:"rgba(26,77,46,0.07)",
                      border:"1px solid rgba(26,77,46,0.12)",
                      opacity:0,
                      animation: visible
                        ? `ph-badge-in .45s ease ${0.7 + i * 0.08}s forwards`
                        : "none",
                    }}
                  >
                    <span style={{ color:"#2D7A4F", display:"flex", alignItems:"center" }}>
                      {b.icon}
                    </span>
                    <span style={{ fontSize:11, fontWeight:600, color:"#4B5563", letterSpacing:"0.02em" }}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN — spec cards ── */}
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>

              {/* Specs label */}
              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-between",
                  marginBottom:16,
                  opacity:0,
                  animation: visible ? "ph-rise .55s ease .45s forwards" : "none",
                }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <div
                    style={{
                      width:6, height:6, borderRadius:"50%",
                      background:"#C8973A",
                      animation:"ph-dot-pulse 2.4s ease-in-out infinite",
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize:10.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.16em", color:"#6B7280" }}>
                    Nutritional Profile
                  </span>
                </div>
                <span
                  style={{
                    fontSize:10.5, fontWeight:700,
                    color:"rgba(45,122,79,0.8)",
                    letterSpacing:"0.1em",
                    textTransform:"uppercase",
                  }}
                >
                  Lab Verified ✓
                </span>
              </div>

              {/* Spec grid */}
              <div
                style={{
                  display:"grid",
                  gridTemplateColumns:"repeat(2, 1fr)",
                  gap:12,
                }}
                role="list"
                aria-label="Product nutritional specifications"
                itemProp="additionalProperty"
              >
                {(PRODUCT_SPECS ?? [
                  { label:"Crude Protein",  value:"8–10",  unit:"%",  pct:82 },
                  { label:"Dry Matter",     value:"28–35", unit:"%",  pct:65 },
                  { label:"Moisture",       value:"65–70", unit:"%",  pct:68 },
                  { label:"Energy (ME)",    value:"2.4",   unit:"Mcal",pct:75 },
                  { label:"NDF Fibre",      value:"45–55", unit:"%",  pct:50 },
                  { label:"Starch Content", value:"25–30", unit:"%",  pct:72 },
                ]).map((spec: any, i: number) => (
                  <div key={spec.label} role="listitem">
                    <SpecCard spec={spec} index={i} visible={visible} />
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                style={{
                  height:1,
                  background:"linear-gradient(90deg, rgba(26,77,46,0.12), transparent)",
                  margin:"24px 0",
                  opacity:0,
                  animation: visible ? "ph-rise .5s ease .9s forwards" : "none",
                }}
              />

              {/* Quality note */}
              <div
                style={{
                  padding:"14px 18px",
                  borderRadius:14,
                  background:"rgba(26,77,46,0.05)",
                  border:"1px solid rgba(26,77,46,0.1)",
                  display:"flex",
                  gap:12,
                  alignItems:"flex-start",
                  opacity:0,
                  animation: visible ? "ph-rise .55s ease .95s forwards" : "none",
                }}
              >
                <span style={{ fontSize:18, lineHeight:1, marginTop:1, flexShrink:0 }} aria-hidden="true">🔬</span>
                <p style={{ fontSize:12.5, color:"#6B7280", lineHeight:1.65, margin:0, fontWeight:400 }}>
                  All nutritional values independently verified via{" "}
                  <strong style={{ fontWeight:600, color:"#4B5563" }}>AOAC-certified laboratory analysis</strong>.
                  Batch test certificates available on request.
                </p>
              </div>

              {/* CTA */}
              <div className="ph-cta" style={{ marginTop:24 }}>
                <Link
                  href="/product"
                  className="ph-cta-btn"
                  aria-label="Download full corn silage product datasheet"
                  style={{
                    display:"inline-flex",
                    alignItems:"center",
                    gap:10,
                    padding:"15px 30px",
                    borderRadius:14,
                    background:"linear-gradient(135deg, #1A4D2E 0%, #0f2e1a 100%)",
                    color:"white",
                    fontSize:14,
                    fontWeight:700,
                    letterSpacing:"0.01em",
                    textDecoration:"none",
                    boxShadow:"0 6px 28px rgba(26,77,46,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                    transition:"transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .25s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-2px) scale(1.02)";
                    el.style.boxShadow = "0 12px 40px rgba(26,77,46,0.4), inset 0 1px 0 rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0) scale(1)";
                    el.style.boxShadow = "0 6px 28px rgba(26,77,46,0.3), inset 0 1px 0 rgba(255,255,255,0.08)";
                  }}
                >
                  Full Product Datasheet
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}