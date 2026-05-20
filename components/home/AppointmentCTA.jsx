"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarDays, ShieldCheck } from "lucide-react";

export default function AppointmentCTA() {
  const defaultFallback = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&auto=format&fit=crop&q=80";
  const [imgSrc, setImgSrc] = useState("https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&auto=format&fit=crop&q=80");
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#0F172A", padding: "5rem 0" }}>
      {/* Background Image with Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&auto=format&fit=crop&q=80"
          alt="Clinic Interior Background"
          fill
          style={{ objectFit: "cover", opacity: 0.15 }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 118, 110, 0.82) 100%)",
          }}
        />
      </div>

      {/* Decorative patterns */}
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "rgba(14, 165, 233, 0.12)",
          borderRadius: "50%",
          top: -100,
          left: -100,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "rgba(15, 118, 110, 0.15)",
          borderRadius: "50%",
          bottom: -150,
          right: -100,
          filter: "blur(70px)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="cta-grid"
        >
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.3rem 0.8rem",
                borderRadius: "9999px",
                background: "rgba(34, 197, 94, 0.15)",
                color: "#4ADE80",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              <ShieldCheck size={13} />
              Accredited Medical Center
            </div>

            <h2
              style={{
                fontFamily: "var(--font-poppins, Poppins), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "white",
                lineHeight: 1.25,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Need Medical Help? <br />
              <span style={{ color: "#0EA5E9" }}>Book Your Appointment Today.</span>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2.25rem", maxWidth: 520 }}>
              Don't delay your healthcare needs. Book an appointment online with one of our specialized doctors, or call our clinic directly. We're here for you.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
              <Link href="/appointment" className="btn-primary" style={{ padding: "0.85rem 1.8rem" }}>
                <CalendarDays size={16} />
                Book Appointment
              </Link>
              <a
                href="tel:+18001234567"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.8rem",
                  borderRadius: "0.5rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "2px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <Phone size={16} />
                Call Clinic
              </a>
            </div>
          </motion.div>

          {/* Image content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                height: 380,
                position: "relative",
                boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={imgSrc}
                alt="Doctor consultation"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImgSrc(defaultFallback)}
              />
            </div>

            {/* Glass stats badge overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                background: "rgba(15, 23, 42, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "0.85rem 1.25rem",
                borderRadius: "0.75rem",
                color: "white",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>In-house Laboratory</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#4ADE80", marginTop: "0.15rem" }}>
                100% Reliable Results
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
