"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "60px",
        textAlign: "center",
        background: "#f8fafc",
      }}
    >
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
