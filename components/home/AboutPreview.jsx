"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

const stats = [
  { value: "10+", label: "Years Experience", color: "#0F766E" },
  { value: "20+", label: "Expert Doctors", color: "#0EA5E9" },
  { value: "50k+", label: "Happy Patients", color: "#22C55E" },
  { value: "24/7", label: "Support Available", color: "#7C3AED" },
];

const highlights = [
  "Board-certified specialists across all major departments",
  "State-of-the-art diagnostic and treatment equipment",
  "Patient-centered care with compassion and respect",
  "Seamless appointment booking and follow-up care",
];

export default function AboutPreview() {
  return (
    <section className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            {/* Main image */}
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                position: "relative",
                height: 480,
                boxShadow: "0 25px 50px rgba(15, 23, 42, 0.12)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&auto=format&fit=crop&q=80"
                alt="CarePlus Clinic interior"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="about-floating-stat"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "-2rem",
                background: "white",
                borderRadius: "1rem",
                padding: "1.25rem 1.5rem",
                boxShadow: "0 15px 40px rgba(15, 23, 42, 0.15)",
                border: "1px solid #E2E8F0",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-poppins, Poppins), sans-serif",
                  fontWeight: 800,
                  fontSize: "2.25rem",
                  color: "#0F766E",
                  lineHeight: 1,
                  marginBottom: "0.2rem",
                }}
              >
                50k+
              </div>
              <div style={{ color: "#64748B", fontSize: "0.82rem", fontWeight: 500 }}>Happy Patients</div>
              <div style={{ display: "flex", gap: "2px", marginTop: "0.5rem" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              className="about-experience-badge"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              style={{
                position: "absolute",
                top: "2rem",
                left: "-1.5rem",
                background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                borderRadius: "0.875rem",
                padding: "1rem 1.25rem",
                boxShadow: "0 10px 25px rgba(15, 118, 110, 0.35)",
                zIndex: 1,
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "1.75rem", color: "white", lineHeight: 1 }}>10+</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                Years of Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle
              badge="About CarePlus Clinic"
              title="Your Health is Our"
              highlight="Greatest Priority"
              subtitle="Founded with a mission to make quality healthcare accessible to all, CarePlus Clinic has been serving our community with dedication, expertise, and compassion for over a decade."
              center={false}
            />

            {/* Highlights */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", listStyle: "none" }}
                >
                  <CheckCircle size={17} style={{ color: "#22C55E", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                marginBottom: "2rem",
                padding: "1.25rem",
                background: "#F8FAFC",
                borderRadius: "0.875rem",
                border: "1px solid #E2E8F0",
              }}
            >
              {stats.map((stat, i) => (
                <div key={i} style={{ textAlign: "center", padding: "0.5rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 800,
                      fontSize: "1.75rem",
                      color: stat.color,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: "#64748B", fontSize: "0.78rem", marginTop: "0.2rem" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-floating-stat { right: 0.5rem !important; bottom: 1rem !important; }
          .about-experience-badge { left: 0.5rem !important; top: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
