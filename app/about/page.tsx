import Image from "next/image";
import { CheckCircle2, ShieldCheck, Heart, Award, Compass, Eye } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";

const stats = [
  { value: "10+", label: "Years Experience", color: "#0F766E" },
  { value: "20+", label: "Expert Doctors", color: "#0EA5E9" },
  { value: "50k+", label: "Happy Patients", color: "#22C55E" },
  { value: "24/7", label: "Emergency Support", color: "#7C3AED" },
];

const values = [
  {
    icon: Compass,
    title: "Our Mission",
    desc: "To deliver compassionate, comprehensive, and state-of-the-art healthcare services that enhance the quality of life for our community, one patient at a time.",
    color: "#0F766E",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be recognized as the region's leading healthcare provider, setting the standard for medical excellence, clinical innovation, and empathetic patient care.",
    color: "#0EA5E9",
  },
];

const reasons = [
  {
    title: "Expert Specialists",
    desc: "Our board-certified doctors bring years of clinical experience and training from top medical institutions globally.",
  },
  {
    title: "Patient-Centered Care",
    desc: "We focus on individualized attention, empathy, and clear communication, prioritizing your comfort and health.",
  },
  {
    title: "Advanced Medical Tech",
    desc: "We invest in modern diagnostic and surgical tools, offering less invasive treatments and faster recovery.",
  },
  {
    title: "Integrity & Trust",
    desc: "Our clinical decisions are guided strictly by evidence-based medicine and the highest ethical standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CarePlus Clinic"
        subtitle="Empowering families with quality, compassionate, and trustworthy healthcare solutions for over a decade."
        image="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1400&auto=format&fit=crop&q=80"
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      {/* Story section */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="about-story-grid"
          >
            {/* Story text */}
            <div>
              <SectionTitle
                badge="Our Legacy"
                title="A Decade of Dedicated"
                highlight="Healthcare Service"
                subtitle="Founded in 2016, CarePlus Clinic began with a simple vision: to bridge the gap between advanced medical technology and compassionate, family-friendly care."
                center={false}
              />
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Over the years, we have grown from a small neighborhood clinic into a state-of-the-art multidisciplinary medical center. Our commitment to clinical excellence, continuous learning, and patient-focused care remains unchanged.
              </p>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                We believe that healing begins with understanding. That's why our specialists take the time to listen, explain, and guide you through every stage of your health journey, ensuring you feel supported, respected, and fully informed.
              </p>

              {/* Stats Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1rem",
                }}
                className="about-stats-grid"
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      padding: "1rem 0.5rem",
                      borderRadius: "0.75rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-poppins, Poppins), sans-serif",
                        fontWeight: 800,
                        fontSize: "1.65rem",
                        color: stat.color,
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: "#64748B", fontSize: "0.72rem", marginTop: "0.25rem", lineHeight: 1.2 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Story image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  height: 440,
                  position: "relative",
                  boxShadow: "0 25px 50px rgba(15, 23, 42, 0.12)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&auto=format&fit=crop&q=80"
                  alt="Doctor with patient"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>

              {/* Overlay card */}
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "-1.5rem",
                  background: "white",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "0.75rem",
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.1)",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  zIndex: 1,
                }}
                className="about-badge"
              >
                <ShieldCheck size={18} color="#22C55E" />
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0F172A" }}>
                  Joint Commission Accredited
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="mission-grid"
          >
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: "1rem",
                    padding: "2.25rem",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "0.6rem",
                      background: `${val.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={22} style={{ color: val.color }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#0F172A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {val.title}
                  </h3>
                  <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <SectionTitle
            badge="Why CarePlus"
            title="Why Choose CarePlus"
            highlight="As Your Healthcare Partner"
            subtitle="We are committed to delivering the highest level of care, prioritizing your health through clinical expertise and premium patient services."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
            className="reasons-grid"
          >
            {reasons.map((reason, i) => (
              <div
                key={i}
                style={{
                  background: "#F8FAFC",
                  borderRadius: "1rem",
                  padding: "1.75rem 1.5rem",
                  border: "1px solid #E2E8F0",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                  <CheckCircle2 size={18} style={{ color: "#0F766E", flexShrink: 0 }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#0F172A",
                    }}
                  >
                    {reason.title}
                  </h3>
                </div>
                <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: 1.65 }}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .mission-grid { grid-template-columns: 1fr !important; }
          .about-badge { right: 0 !important; top: -1.5rem !important; }
        }
        @media (max-width: 1023px) {
          .reasons-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .reasons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
