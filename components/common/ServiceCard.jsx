"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, UserRound } from "lucide-react";
import {
  Stethoscope, Smile, Leaf, Activity, Baby, AlertCircle,
} from "lucide-react";

const iconMap = {
  Stethoscope,
  Smile,
  Leaf,
  Activity,
  Baby,
  AlertCircle,
};

export default function ServiceCard({ service, index = 0 }) {
  const [imgSrc, setImgSrc] = useState(service.image);
  const Icon = iconMap[service.icon] || Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="card"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Image
          src={imgSrc}
          alt={service.title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onError={() => setImgSrc("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80")}
        />
        {/* Icon badge */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            width: 44,
            height: 44,
            borderRadius: "0.6rem",
            background: service.color || "#0F766E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          <Icon size={20} color="white" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-poppins, Poppins), sans-serif",
            fontWeight: 600,
            fontSize: "1.05rem",
            color: "#0F172A",
            marginBottom: "0.5rem",
          }}
        >
          {service.title}
        </h3>
        <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem", flex: 1 }}>
          {service.shortDesc}
        </p>

        {/* Meta */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#64748B", fontSize: "0.78rem" }}>
            <Clock size={13} style={{ color: "#0F766E" }} />
            {service.duration}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#64748B", fontSize: "0.78rem" }}>
            <UserRound size={13} style={{ color: "#0F766E" }} />
            {service.doctorType}
          </div>
        </div>

        <Link
          href={`/services`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            color: "#0F766E",
            fontWeight: 600,
            fontSize: "0.85rem",
            textDecoration: "none",
            transition: "gap 0.2s",
          }}
          onMouseEnter={(e) => {
            const arrow = e.currentTarget.querySelector(".arrow");
            if (arrow) arrow.style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            const arrow = e.currentTarget.querySelector(".arrow");
            if (arrow) arrow.style.transform = "translateX(0)";
          }}
        >
          Learn More{" "}
          <ArrowRight size={14} className="arrow" style={{ transition: "transform 0.2s" }} />
        </Link>
      </div>
    </motion.div>
  );
}
