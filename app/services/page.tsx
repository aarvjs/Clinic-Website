"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, UserRound, CheckCircle, Stethoscope, Smile, Leaf, Activity, Baby, AlertCircle, CalendarDays } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { services } from "@/components/data/services";

const iconMap: Record<string, any> = {
  Stethoscope,
  Smile,
  Leaf,
  Activity,
  Baby,
  AlertCircle,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Medical Services"
        subtitle="Specialized treatments, expert consultations, and rapid response emergency services tailored to your family's needs."
        image="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&auto=format&fit=crop&q=80"
        breadcrumb={[{ label: "Services", href: "/services" }]}
      />

      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <SectionTitle
            badge="Medical Offerings"
            title="Comprehensive Treatment"
            highlight="& Patient Services"
            subtitle="Browse our full range of medical services. Each service is provided by experienced specialists in custom-designed treatment environments."
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3.5rem",
            }}
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "white",
                    borderRadius: "1.25rem",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: isEven ? "1.1fr 0.9fr" : "0.9fr 1.1fr",
                    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.03)",
                  }}
                  className="service-row"
                >
                  {/* Text panel */}
                  <div
                    style={{
                      padding: "2.5rem 3rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      order: isEven ? 1 : 2,
                    }}
                    className="service-text-panel"
                  >
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "0.6rem",
                          background: `${service.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={20} style={{ color: service.color }} />
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-poppins, Poppins), sans-serif",
                          fontWeight: 700,
                          fontSize: "1.35rem",
                          color: "#0F172A",
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                      {service.fullDesc}
                    </p>

                    {/* Metadata tags */}
                    <div style={{ display: "flex", gap: "1.25rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#64748B", fontSize: "0.82rem" }}>
                        <Clock size={14} style={{ color: service.color }} />
                        <span style={{ fontWeight: 600, color: "#0F172A" }}>Duration:</span> {service.duration}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#64748B", fontSize: "0.82rem" }}>
                        <UserRound size={14} style={{ color: service.color }} />
                        <span style={{ fontWeight: 600, color: "#0F172A" }}>Physician:</span> {service.doctorType}
                      </div>
                    </div>

                    {/* Treatments / Checklist */}
                    <div style={{ marginBottom: "2rem" }}>
                      <h4
                        style={{
                          fontFamily: "var(--font-poppins, Poppins), sans-serif",
                          fontWeight: 600,
                          fontSize: "0.88rem",
                          color: "#0F172A",
                          marginBottom: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Treatments & Diagnostic Cover
                      </h4>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.5rem 1rem",
                        }}
                        className="treatments-grid"
                      >
                        {service.treatments.map((treatment, tIdx) => (
                          <div key={tIdx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <CheckCircle size={14} style={{ color: "#22C55E", flexShrink: 0 }} />
                            <span style={{ color: "#475569", fontSize: "0.82rem" }}>{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA button */}
                    <div>
                      <Link
                        href="/appointment"
                        className="btn-primary"
                        style={{ background: service.color, borderColor: service.color }}
                      >
                        <CalendarDays size={15} />
                        Book Appointment
                      </Link>
                    </div>
                  </div>

                  {/* Image panel */}
                  <div
                    style={{
                      position: "relative",
                      minHeight: 340,
                      order: isEven ? 2 : 1,
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; }
          .service-text-panel { order: 2 !important; padding: 1.75rem 1.5rem !important; }
          .service-row > div:nth-child(2) { order: 1 !important; min-height: 250px !important; }
          .treatments-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
