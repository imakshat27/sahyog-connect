"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2.5rem",
        height: "64px",
        background: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontWeight: 700,
          fontSize: "1.15rem",
          color: "#0f172a",
          letterSpacing: "-0.02em",
          textDecoration: "none",
        }}
      >
        Sahyog
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {["Discover", "NGOs", "Volunteers", "Impact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              fontSize: "0.875rem",
              color: "#475569",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0f172a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/signup"
        id="nav-signup-btn"
        style={{
          background: "#1e3a8a",
          color: "#fff",
          padding: "0.5rem 1.25rem",
          borderRadius: "9999px",
          fontSize: "0.875rem",
          fontWeight: 600,
          textDecoration: "none",
          transition: "background 0.2s, transform 0.15s",
          boxShadow: "0 2px 8px rgba(30,58,138,0.25)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1e40af";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#1e3a8a";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Signup
      </Link>
    </nav>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "60px",
        textAlign: "center",
        background: "#f8fafc",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          color: "#64748b",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "1.25rem",
        }}
      >
        The Operating System for Social Good.
      </p>

      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
          color: "#0f172a",
          marginBottom: "0.25rem",
        }}
      >
        Impact,
      </h1>
      <h1
        style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
          color: "#1e3a8a",
          marginBottom: "1.5rem",
          display: "block",
        }}
      >
        quantified.
      </h1>

      {/* Sub-heading */}
      <p
        style={{
          maxWidth: "480px",
          margin: "0 auto 2.5rem",
          fontSize: "1rem",
          color: "#64748b",
          lineHeight: 1.7,
        }}
      >
        A sculpted, intelligent ecosystem connecting resources, volunteers, and
        NGOs with mathematical precision. We don&apos;t just facilitate good; we
        architect it.
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/signup"
          id="hero-start-btn"
          style={{
            background: "#1e3a8a",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "9999px",
            fontWeight: 600,
            fontSize: "0.9375rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            boxShadow: "0 4px 14px rgba(30,58,138,0.3)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1d4ed8";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(30,58,138,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#1e3a8a";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(30,58,138,0.3)";
          }}
        >
          Start Impacting →
        </Link>
        <Link
          href="/discover"
          id="hero-explore-btn"
          style={{
            background: "transparent",
            color: "#0f172a",
            padding: "0.75rem 1.75rem",
            borderRadius: "9999px",
            fontWeight: 600,
            fontSize: "0.9375rem",
            textDecoration: "none",
            border: "1.5px solid #cbd5e1",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#94a3b8";
            e.currentTarget.style.background = "#f1f5f9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#cbd5e1";
            e.currentTarget.style.background = "transparent";
          }}
        >
          Explore Ecosystem
        </Link>
      </div>
    </section>
  );
}

// ─── Dashboard Mockup ──────────────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <section
      style={{
        padding: "0 2rem 80px",
        display: "flex",
        justifyContent: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow:
            "0 25px 60px rgba(15,23,42,0.12), 0 8px 24px rgba(15,23,42,0.08)",
          position: "relative",
          aspectRatio: "16 / 7",
          background: "linear-gradient(135deg, #0d2137 0%, #0a3a4a 50%, #0d2d3a 100%)",
        }}
      >
        {/* Animated grid lines */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.15,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#4ade80"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "25%",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Waveform lines */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          viewBox="0 0 860 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[0, 1, 2, 3].map((i) => (
            <polyline
              key={i}
              points={generateWave(i)}
              fill="none"
              stroke={i === 1 ? "#38bdf8" : "#4ade80"}
              strokeWidth={i === 1 ? "1.5" : "1"}
              opacity={0.4 - i * 0.06}
            />
          ))}
        </svg>

        {/* Bar chart overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
            alignItems: "flex-end",
          }}
        >
          {[40, 65, 50, 80, 55, 90, 70, 45, 75, 60, 85, 50].map((h, i) => (
            <div
              key={i}
              style={{
                width: "18px",
                height: `${h * 0.6}px`,
                background:
                  "linear-gradient(to top, rgba(56,189,248,0.7), rgba(56,189,248,0.1))",
                borderRadius: "3px 3px 0 0",
                opacity: 0.7,
              }}
            />
          ))}
        </div>

        {/* Gradient overlay at bottom for fade effect */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(13,33,55,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}

function generateWave(offset: number): string {
  const points: string[] = [];
  const step = 30;
  const amplitude = 30 + offset * 12;
  const verticalShift = 120 + offset * 25;
  for (let x = 0; x <= 860; x += step) {
    const y =
      verticalShift +
      Math.sin((x / 860) * Math.PI * 3 + offset * 0.8) * amplitude +
      Math.cos((x / 860) * Math.PI * 2 + offset) * (amplitude * 0.4);
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

// ─── Features Section ──────────────────────────────────────────────────────────
function Features() {
  const cards = [
    {
      id: "feature-analytics",
      icon: "📈",
      title: "Actionable Intelligence",
      description:
        "Transform raw data into strategic foresight. Our analytics engine distils complex community needs into clear, orchestratable directives.",
      dark: false,
    },
    {
      id: "feature-volunteer",
      icon: "🎯",
      title: "Dynamic Volunteer Ecosystem",
      description:
        "A fluid, responsive network matching precise skillsets to critical immediate needs in real-time.",
      dark: false,
    },
    {
      id: "feature-resource",
      icon: "∞",
      title: "Precision Resource Orchestration",
      description:
        "Eradicate waste. Our allocation algorithms ensure every dollar, hour, and asset is deployed where it generates the highest verifiable impact.",
      dark: true,
      cta: { label: "View Methodology", href: "/impact" },
    },
  ];

  return (
    <section
      style={{
        padding: "80px 2rem 100px",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#0f172a",
          marginBottom: "0.75rem",
        }}
      >
        Curated Intelligence
      </h2>
      <p
        style={{
          color: "#64748b",
          fontSize: "0.9375rem",
          maxWidth: "420px",
          margin: "0 auto 3.5rem",
          lineHeight: 1.65,
        }}
      >
        Beyond mere connection, Sahyog offers unparalleled insight and
        operational fluidity for impactful organizations.
      </p>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          maxWidth: "880px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {cards.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  id,
  icon,
  title,
  description,
  dark,
  cta,
}: {
  id: string;
  icon: string;
  title: string;
  description: string;
  dark: boolean;
  cta?: { label: string; href: string };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: dark ? "#1e3a8a" : "#ffffff",
        border: dark ? "none" : "1px solid #e2e8f0",
        borderRadius: "1.25rem",
        padding: "2rem",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? dark
            ? "0 16px 40px rgba(30,58,138,0.35)"
            : "0 12px 32px rgba(15,23,42,0.1)"
          : dark
          ? "0 4px 16px rgba(30,58,138,0.2)"
          : "0 2px 8px rgba(15,23,42,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        gridColumn: dark ? "1 / -1" : undefined,
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>{icon}</span>
      <h3
        style={{
          fontWeight: 700,
          fontSize: "1.0625rem",
          color: dark ? "#ffffff" : "#0f172a",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: dark ? "rgba(255,255,255,0.75)" : "#64748b",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
      {cta && (
        <div style={{ marginTop: "auto" }}>
          <Link
            href={cta.href}
            id={`${id}-cta`}
            style={{
              display: "inline-block",
              marginTop: "0.5rem",
              background: "#22c55e",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "0.8125rem",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#16a34a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#22c55e")
            }
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e2e8f0",
        padding: "1.5rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f8fafc",
        flexWrap: "wrap",
        gap: "0.75rem",
      }}
    >
      <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0f172a" }}>
        Sahyog
      </span>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          fontSize: "0.75rem",
          color: "#94a3b8",
        }}
      >
        {["Privacy Policy", "Terms of Service", "Contact Us", "Careers"].map(
          (item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#475569")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              {item}
            </Link>
          )
        )}
      </div>
      <span
        style={{
          fontSize: "0.7rem",
          color: "#94a3b8",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        © 2024 Sahyog Platform. Built for Impact
      </span>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f8fafc" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <DashboardMockup />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
