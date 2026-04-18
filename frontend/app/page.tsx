import {
  DashboardMockup,
  Features,
  Footer,
  Hero,
  Navbar,
} from "@/components/home";

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
