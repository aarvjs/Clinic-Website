"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, CalendarDays, Clock, Award } from "lucide-react";

export default function DoctorCard({ doctor, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{
        background: "white",
        borderRadius: "1rem",
        border: "1px solid #E2E8F0",
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)" }}
    >
      {/* Image area */}
      <div style={{ position: "relative", height: 240, overflow: "hidden", background: "#F1F5F9" }}>
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Availability badge */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            padding: "0.25rem 0.65rem",
            borderRadius: "9999px",
            background: doctor.available ? "#DCFCE7" : "#FEE2E2",
            color: doctor.available ? "#15803D" : "#DC2626",
            fontSize: "0.7rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: doctor.available ? "#22C55E" : "#EF4444",
              display: "inline-block",
            }}
          />
          {doctor.available ? "Available" : "On Leave"}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem" }}>
        <div style={{ marginBottom: "0.4rem" }}>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#0EA5E9",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {doctor.department}
          </span>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-poppins, Poppins), sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#0F172A",
            marginBottom: "0.2rem",
          }}
        >
          {doctor.name}
        </h3>
        <p style={{ color: "#0F766E", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.85rem" }}>
          {doctor.specialization}
        </p>

        {/* Meta */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#64748B", fontSize: "0.78rem" }}>
            <Award size={13} style={{ color: "#0F766E" }} />
            {doctor.experience}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#64748B", fontSize: "0.78rem" }}>
            <Star size={13} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
            4.9 Rating
          </div>
        </div>

        {/* Qualification */}
        <div
          style={{
            padding: "0.45rem 0.75rem",
            borderRadius: "0.4rem",
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            fontSize: "0.78rem",
            color: "#64748B",
            marginBottom: "1rem",
          }}
        >
          {doctor.qualification}
        </div>

        <Link href="/appointment" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "0.65rem" }}>
          <CalendarDays size={14} />
          Book Appointment
        </Link>
      </div>
    </motion.div>
  );
}
