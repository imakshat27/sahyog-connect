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

export function DashboardMockup() {
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
          background:
            "linear-gradient(135deg, #0d2137 0%, #0a3a4a 50%, #0d2d3a 100%)",
        }}
      >
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
