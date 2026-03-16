"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* ── Scroll detection with useCallback ── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ── Toggle menu with useCallback ── */
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* ── Close drawer on outside click (backdrop) ── */
  useEffect(() => {
    if (!menuOpen) return;
    
    const handler = (e: MouseEvent) => {
      // Don't close if clicking on drawer or toggle button
      if (drawerRef.current?.contains(e.target as Node)) return;
      closeMenu();
    };
    
    // Use capture phase to intercept backdrop clicks reliably
    document.addEventListener("mousedown", handler, true);
    return () => document.removeEventListener("mousedown", handler, true);
  }, [menuOpen, closeMenu]);

  /* ── Prevent body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Escape key closes drawer ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { 
      if (e.key === "Escape" && menuOpen) closeMenu(); 
    };
    if (menuOpen) {
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* ─────────────────────────────────────────────
          Scoped CSS
          KEY FIX: .ham-btn uses display:none by default
          and display:flex only below 1024 px — never
          touched by any inline style, so lg never fights it.
      ───────────────────────────────────────────── */}
      <style>{`
        /* Keyframes */
        @keyframes grain-drift {
          0%,100% { transform:translate(0,0); }
          25%     { transform:translate(-1%,1%); }
          50%     { transform:translate(1%,-1%); }
          75%     { transform:translate(-.5%,.5%); }
        }
        @keyframes drawer-in {
          from { transform:translateX(100%) skewX(-2deg); opacity:0; }
          to   { transform:translateX(0) skewX(0deg); opacity:1; }
        }
        @keyframes nav-item-in {
          from { transform:translateX(28px); opacity:0; }
          to   { transform:translateX(0); opacity:1; }
        }
        @keyframes logo-shimmer {
          0%   { background-position:-200% center; }
          100% { background-position:200% center; }
        }
        @keyframes cta-pulse {
          0%,100% { box-shadow:0 4px 20px rgba(200,151,58,.45),inset 0 1px 0 rgba(255,255,255,.25); }
          50%     { box-shadow:0 4px 30px rgba(200,151,58,.72),inset 0 1px 0 rgba(255,255,255,.25); }
        }

        /* Desktop nav pill links — gold underline sweep */
        .nav-link-hover { position:relative; }
        .nav-link-hover::after {
          content:"";
          position:absolute;
          bottom:6px; left:14px; right:14px;
          height:1.5px;
          background:#C8973A;
          transform:scaleX(0);
          transform-origin:right;
          transition:transform .3s cubic-bezier(.16,1,.3,1);
          border-radius:2px;
        }
        .nav-link-hover:hover::after {
          transform:scaleX(1);
          transform-origin:left;
        }

        /* CTA shimmer sweep */
        .cta-btn { position:relative; overflow:hidden; }
        .cta-btn::before {
          content:"";
          position:absolute; inset:0;
          background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.2) 50%,transparent 60%);
          transform:translateX(-100%);
          transition:transform .5s ease;
          pointer-events:none;
        }
        .cta-btn:hover::before { transform:translateX(100%); }

        /* Logo shimmer */
        .logo-text {
          background:linear-gradient(90deg,#fff 0%,#fff 35%,#C8973A 50%,#fff 65%,#fff 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .logo-text:hover { animation:logo-shimmer 1.2s ease forwards; }

        /* Grain overlay */
        .grain-overlay {
          position:absolute; inset:-50%; width:200%; height:200%;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          opacity:.4; pointer-events:none;
          animation:grain-drift 8s steps(2) infinite;
        }

        /* Scrolled gold border */
        .top-bar-line {
          position:absolute; bottom:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(200,151,58,.35),transparent);
          transform:scaleX(0);
          transition:transform .6s cubic-bezier(.16,1,.3,1);
          pointer-events:none;
        }
        .scrolled-bar .top-bar-line { transform:scaleX(1); }

        /* ── HAMBURGER BUTTON ──
           NEVER set display via inline style.
           Hidden on desktop (≥1024 px), flex on mobile (<1024 px). */
        .ham-btn {
          display:none;   /* desktop: invisible */
          flex-direction:column;
          gap:5px;
          padding:10px;
          border-radius:10px;
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.12);
          cursor:pointer;
          transition:background .2s ease, border-color .2s ease;
          flex-shrink:0;
        }
        .ham-btn:hover {
          background:rgba(255,255,255,.14);
          border-color:rgba(255,255,255,.2);
        }
        @media (max-width:1023px) {
          .ham-btn { display:flex; }   /* mobile: show */
        }

        /* Animated hamburger lines */
        .ham-line {
          display:block; width:22px; height:1.5px;
          background:white; border-radius:2px;
          transition:all .35s cubic-bezier(.16,1,.3,1);
          transform-origin:center;
        }
        .ham-btn[aria-expanded="true"] .ham-line:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
        .ham-btn[aria-expanded="true"] .ham-line:nth-child(2) { transform:scaleX(0); opacity:0; }
        .ham-btn[aria-expanded="true"] .ham-line:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

        /* ── DESKTOP NAV WRAPPER ──
           Hidden on mobile (<1024 px), flex on desktop (≥1024 px). */
        .desktop-nav {
          display:none;   /* mobile: hidden */
          align-items:center;
          gap:2px;
        }
        @media (min-width:1024px) {
          .desktop-nav { display:flex; }   /* desktop: show */
        }

        /* Mobile drawer */
        .drawer-panel {
          animation:drawer-in .42s cubic-bezier(.16,1,.3,1) forwards;
        }
        .mobile-nav-item {
          opacity:0;
          animation:nav-item-in .42s cubic-bezier(.16,1,.3,1) forwards;
        }

        /* Contact pills */
        .contact-pill {
          display:inline-flex; align-items:center; gap:7px;
          padding:6px 14px 6px 6px; border-radius:100px;
          border:1px solid rgba(200,151,58,.22);
          background:rgba(200,151,58,.07);
          font-size:11.5px; font-weight:600;
          color:rgba(255,255,255,.62); letter-spacing:.02em;
          text-decoration:none;
          transition:all .25s ease;
        }
        .contact-pill:hover {
          border-color:rgba(200,151,58,.5);
          background:rgba(200,151,58,.14);
          color:rgba(255,255,255,.92);
        }
        .contact-pill-dot {
          width:22px; height:22px; border-radius:50%;
          background:rgba(200,151,58,.18);
          display:flex; align-items:center; justify-content:center;
          font-size:11px; flex-shrink:0;
        }
      `}</style>

      {/* ══════════════════════════════════════════
          HEADER
          — role="banner"   → landmarks for screen readers
          — itemScope/Type  → Schema.org WPHeader for SEO
      ══════════════════════════════════════════ */}
      <header
        role="banner"
        itemScope
        itemType="https://schema.org/WPHeader"
        className={cn("fixed top-0 left-0 right-0 z-50", scrolled ? "scrolled-bar" : "")}
        style={{
          background: scrolled
            ? "rgba(15,46,26,0.93)"
            : "linear-gradient(to bottom,rgba(15,46,26,0.72) 0%,transparent 100%)",
          backdropFilter: scrolled ? "blur(22px) saturate(1.5)" : "none",
          boxShadow: scrolled
            ? "0 1px 0 rgba(200,151,58,.14),0 8px 48px rgba(0,0,0,.32)"
            : "none",
          transition: "background .5s ease,backdrop-filter .5s ease,box-shadow .5s ease",
        }}
      >
        {/* Film-grain depth layer */}
        {scrolled && (
          <div
            aria-hidden="true"
            style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}
          >
            <div className="grain-overlay" />
          </div>
        )}
        <div className="top-bar-line" aria-hidden="true" />

        {/* ── MAIN NAV ──
            itemScope/Type → Schema.org SiteNavigationElement
            This tells Google crawlers this is the primary nav. */}
        <nav
          aria-label="Primary site navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
          style={{
            maxWidth:"1280px", margin:"0 auto",
            padding: scrolled ? "12px 2rem" : "20px 2rem",
            display:"flex", alignItems:"center", justifyContent:"space-between",
            position:"relative",
            transition:"padding .45s cubic-bezier(.16,1,.3,1)",
          }}
        >
          {/* ── LOGO / HOME LINK ── */}
          <Link
            href="/"
            aria-label="GreenValley Agri Exports — Go to homepage"
            title="GreenValley Agri Exports"
            itemProp="url"
            style={{ display:"flex", alignItems:"center", gap:12, textDecoration:"none" }}
            className="group"
          >
            <div
              aria-hidden="true"
              style={{
                width:42, height:42, borderRadius:12,
                background:"linear-gradient(135deg,#C8973A 0%,#e8b84b 100%)",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:20, flexShrink:0,
                boxShadow:"0 4px 16px rgba(200,151,58,.4),inset 0 1px 0 rgba(255,255,255,.22)",
                transition:"transform .4s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease",
              }}
              className="group-hover:[transform:rotate(-8deg)_scale(1.08)] group-hover:[box-shadow:0_6px_24px_rgba(200,151,58,.62),inset_0_1px_0_rgba(255,255,255,.22)]"
            >
              🌿
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
              <span
                className="logo-text"
                itemProp="name"
                style={{
                  fontFamily:"var(--font-display)",
                  fontSize:20, fontWeight:700,
                  lineHeight:1, letterSpacing:"-0.01em",
                }}
              >
                GreenValley
              </span>
              <span
                aria-hidden="true"
                style={{
                  fontSize:9, fontWeight:700,
                  letterSpacing:"0.2em", textTransform:"uppercase",
                  color:"rgba(200,151,58,.72)", lineHeight:1,
                }}
              >
                Agri Exports
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV — visible ≥1024 px only via CSS ── */}
          <div className="desktop-nav" aria-label="Desktop navigation">
            {/* Nav links inside a pill container */}
            <div
              style={{
                display:"flex", alignItems:"center", gap:2,
                padding:"4px", borderRadius:100,
                background:"rgba(255,255,255,.05)",
                border:"1px solid rgba(255,255,255,.09)",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  itemProp="url"
                  className="nav-link-hover"
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink(null)}
                  style={{
                    color: activeLink === link.href
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,.72)",
                    fontSize:13, fontWeight:500,
                    letterSpacing:".015em",
                    padding:"8px 16px", borderRadius:100,
                    textDecoration:"none",
                    background: activeLink === link.href
                      ? "rgba(255,255,255,.1)" : "transparent",
                    transition:"all .2s ease",
                    display:"block", whiteSpace:"nowrap",
                  }}
                >
                  <span itemProp="name">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div
              aria-hidden="true"
              style={{
                width:1, height:28,
                background:"rgba(255,255,255,.1)",
                margin:"0 14px", flexShrink:0,
              }}
            />

            {/* CTA */}
            <Link
              href="/contact"
              className="cta-btn"
              aria-label="Request a quote from GreenValley Agri Exports"
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"10px 22px", borderRadius:100,
                background:"linear-gradient(135deg,#C8973A 0%,#dda83e 100%)",
                color:"#0f2e1a", fontSize:13, fontWeight:700,
                letterSpacing:".01em", textDecoration:"none",
                animation:"cta-pulse 3s ease-in-out infinite",
                transition:"transform .25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px) scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
              }}
            >
              Get a Quote
              <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>
          </div>

          {/* ── HAMBURGER — visible <1024 px only via CSS ──
              NO inline display style — CSS media query controls visibility.
              aria-expanded drives the line → X animation. */}
          <button
            className="ham-btn"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            aria-haspopup="dialog"
          >
            <span className="ham-line" aria-hidden="true" />
            <span className="ham-line" aria-hidden="true" />
            <span className="ham-line" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE BACKDROP
      ══════════════════════════════════════════ */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          style={{
            position:"fixed", inset:0, zIndex:39,
            background:"rgba(0,0,0,.65)", backdropFilter:"blur(4px)",
          }}
        />
      )}

      {/* ══════════════════════════════════════════
          MOBILE DRAWER
          — Single logo instance in drawer header
          — Single X/close button in drawer header
          — No duplication with main header
      ══════════════════════════════════════════ */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="drawer-panel"
          style={{
            position:"fixed", top:0, right:0, bottom:0,
            width:"min(340px,88vw)", zIndex:40,
            display:"flex", flexDirection:"column",
            background:"linear-gradient(160deg,#0d2918 0%,#1A4D2E 55%,#0d2918 100%)",
            boxShadow:"-10px 0 60px rgba(0,0,0,.5),inset 1px 0 0 rgba(200,151,58,.13)",
            overflowY:"auto", overflowX:"hidden",
          }}
        >
          {/* Grain */}
          <div
            aria-hidden="true"
            style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}
          >
            <div className="grain-overlay" />
          </div>

          {/* Radial glow accents */}
          <div aria-hidden="true" style={{
            position:"absolute", top:-70, right:-70,
            width:200, height:200, borderRadius:"50%",
            background:"radial-gradient(circle,rgba(200,151,58,.14) 0%,transparent 70%)",
            pointerEvents:"none",
          }} />
          <div aria-hidden="true" style={{
            position:"absolute", bottom:100, left:-50,
            width:160, height:160, borderRadius:"50%",
            background:"radial-gradient(circle,rgba(45,122,79,.18) 0%,transparent 70%)",
            pointerEvents:"none",
          }} />

          {/* ── Drawer top bar ──
              Logo (compact) + single close ×
              This is the ONLY place logo and × appear in the drawer. */}
          <div
            style={{
              display:"flex", alignItems:"center", justifyContent:"space-between",
              padding:"20px 22px 18px",
              borderBottom:"1px solid rgba(255,255,255,.07)",
              position:"relative", flexShrink:0,
            }}
          >
            {/* Compact brand */}
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div
                aria-hidden="true"
                style={{
                  width:34, height:34, borderRadius:9,
                  background:"linear-gradient(135deg,#C8973A,#e8b84b)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:16,
                  boxShadow:"0 3px 12px rgba(200,151,58,.32)",
                  flexShrink:0,
                }}
              >
                🌿
              </div>
              <div>
                <p style={{
                  fontFamily:"var(--font-display)",
                  fontSize:17, fontWeight:700, color:"white",
                  lineHeight:1, margin:0,
                }}>
                  GreenValley
                </p>
                <p style={{
                  fontSize:8.5, fontWeight:700,
                  letterSpacing:"0.18em", textTransform:"uppercase",
                  color:"rgba(200,151,58,.68)",
                  lineHeight:1, marginTop:3,
                }}>
                  Agri Exports
                </p>
              </div>
            </div>

            {/* Close button */}
            {/* <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                width:36, height:36, borderRadius:10,
                background:"rgba(255,255,255,.07)",
                border:"1px solid rgba(255,255,255,.11)",
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer", flexShrink:0,
                transition:"background .2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.14)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.07)";
              }}
            > */}

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              style={{
                width:36,
                height:36,
                borderRadius:10,
                background:"rgba(255,255,255,.07)",
                border:"1px solid rgba(255,255,255,.11)",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                cursor:"pointer",
                flexShrink:0,
                transition:"background .2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.14)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.07)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 2L14 14M14 2L2 14"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* ── Nav links ── */}
          <nav
            aria-label="Mobile site navigation"
            style={{ padding:"20px 18px 0", flex:1, position:"relative" }}
          >
            <p
              aria-hidden="true"
              style={{
                fontSize:9.5, fontWeight:700,
                letterSpacing:"0.18em", textTransform:"uppercase",
                color:"rgba(200,151,58,.55)",
                paddingLeft:10, marginBottom:8,
              }}
            >
              Navigation
            </p>

            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="mobile-nav-item"
                aria-label={`Go to ${link.label}`}
                style={{
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                  padding:"13px 14px", borderRadius:12,
                  textDecoration:"none", color:"rgba(255,255,255,.8)",
                  fontSize:15, fontWeight:500,
                  marginBottom:3, border:"1px solid transparent",
                  transition:"all .2s ease",
                  animationDelay:`${i * 0.055 + 0.08}s`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,.07)";
                  el.style.borderColor = "rgba(255,255,255,.09)";
                  el.style.color = "white";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.borderColor = "transparent";
                  el.style.color = "rgba(255,255,255,.8)";
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={13} aria-hidden="true"
                  style={{ color:"rgba(200,151,58,.45)", flexShrink:0 }} />
              </Link>
            ))}
          </nav>

          {/* ── Footer CTA + quick contact ── */}
          <div
            style={{
              padding:"20px 18px 36px",
              borderTop:"1px solid rgba(255,255,255,.07)",
              position:"relative", flexShrink:0,
            }}
          >
            <Link
              href="/contact"
              onClick={closeMenu}
              className="cta-btn"
              aria-label="Request a quote from GreenValley Agri Exports"
              style={{
                display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                width:"100%", padding:"14px", borderRadius:14,
                background:"linear-gradient(135deg,#C8973A 0%,#dda83e 100%)",
                color:"#0f2e1a", fontSize:14, fontWeight:700,
                letterSpacing:".01em", textDecoration:"none",
                boxShadow:"0 4px 20px rgba(200,151,58,.38)",
                marginBottom:18,
              }}
            >
              Get a Quote
              <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </Link>

            <p
              aria-hidden="true"
              style={{
                fontSize:9.5, fontWeight:700,
                letterSpacing:"0.18em", textTransform:"uppercase",
                color:"rgba(200,151,58,.55)", marginBottom:10,
              }}
            >
              Quick Contact
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="contact-pill"
                aria-label={`Call us at ${CONTACT.phone}`}
              >
                <span className="contact-pill-dot" aria-hidden="true">📞</span>
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="contact-pill"
                aria-label={`Email us at ${CONTACT.email}`}
              >
                <span className="contact-pill-dot" aria-hidden="true">✉️</span>
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}