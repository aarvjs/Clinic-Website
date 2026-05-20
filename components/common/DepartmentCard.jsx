"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Smile, Leaf, Baby, Brain, Activity } from "lucide-react";

const iconMap = {
  Heart,
  Smile,
  Leaf,
  Baby,
  Brain,
  Activity,
  Bone: Activity,
};

export default function DepartmentCard({ dept, index = 0 }) {
  const Icon = iconMap[dept.icon] || Heart;

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
        padding: "1.5rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
    >
      {/* Background gradient accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 120,
          height: 120,
          borderRadius: "0 0 0 120px",
          background: `${dept.color}12`,
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 54,
          height: 54,
          borderRadius: "0.75rem",
          background: `${dept.color}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          border: `1.5px solid ${dept.color}25`,
        }}
      >
        <Icon size={24} style={{ color: dept.color }} />
      </div>

      <h3
        style={{
          fontFamily: "var(--font-poppins, Poppins), sans-serif",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#0F172A",
          marginBottom: "0.5rem",
        }}
      >
        {dept.name}
      </h3>

      <p style={{ color: "#64748B", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1rem" }}>
        {dept.shortDesc}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1rem",
          borderTop: "1px solid #F1F5F9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "#64748B", fontSize: "0.78rem" }}>
          <Users size={13} style={{ color: dept.color }} />
          {dept.doctorCount} Specialists
        </div>
        <Link
          href="/departments"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            color: dept.color,
            fontWeight: 600,
            fontSize: "0.8rem",
            textDecoration: "none",
          }}
        >
          View <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
