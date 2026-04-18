"use client";

import Link from "next/link";

export function Footer() {
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
          ),
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
