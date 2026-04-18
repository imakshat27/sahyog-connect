"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
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
