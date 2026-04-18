"use client";

import Link from "next/link";
import { useState } from "react";

type FeatureCardProps = {
  id: string;
  icon: string;
  title: string;
  description: string;
  dark: boolean;
  cta?: { label: string; href: string };
};

function FeatureCard({
  id,
  icon,
  title,
  description,
  dark,
  cta,
}: FeatureCardProps) {
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
      {cta ? (
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
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#16a34a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#22c55e";
            }}
          >
            {cta.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function Features() {
  const cards: FeatureCardProps[] = [
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
