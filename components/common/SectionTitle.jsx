"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ badge, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "3rem",
      }}
    >
      {badge && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.3rem 0.9rem",
            borderRadius: "9999px",
            background: "rgba(15, 118, 110, 0.08)",
            border: "1px solid rgba(15, 118, 110, 0.2)",
            color: "#0F766E",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "0.9rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#0F766E",
              display: "inline-block",
              animation: "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
            }}
          />
          {badge}
        </div>
      )}

      <h2
        style={{
          fontFamily: "var(--font-poppins, Poppins), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
          color: "#0F172A",
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
        }}
      >
        {title}{" "}
        {highlight && (
          <span
            style={{
              background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {highlight}
          </span>
        )}
      </h2>

      {/* Divider */}
      <div
        style={{
          width: 50,
          height: 3,
          background: "linear-gradient(to right, #0F766E, #0EA5E9)",
          borderRadius: 2,
          margin: center ? "0.75rem auto" : "0.75rem 0",
        }}
      />

      {subtitle && (
        <p
          style={{
            color: "#64748B",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            lineHeight: 1.75,
            maxWidth: center ? 580 : "none",
            margin: center ? "0 auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
