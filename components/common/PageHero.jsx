"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHero({ title, subtitle, image, breadcrumb }) {
  const defaultFallback = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&auto=format&fit=crop&q=80";
  const [imgSrc, setImgSrc] = useState(image || defaultFallback);
  return (
    <section
      style={{
        position: "relative",
        minHeight: "340px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0F172A",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={imgSrc}
          alt={title}
          fill
          style={{ objectFit: "cover", opacity: 0.25 }}
          priority
          sizes="100vw"
          onError={() => setImgSrc(defaultFallback)}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(15, 118, 110, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%)",
          }}
        />
      </div>

      {/* Decorative shapes */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "rgba(14, 165, 233, 0.15)",
          borderRadius: "50%",
          top: -100,
          right: -100,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "rgba(15, 118, 110, 0.2)",
          borderRadius: "50%",
          bottom: -80,
          left: -80,
          filter: "blur(50px)",
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 1, padding: "4rem 1rem 3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Breadcrumb */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "1.25rem" }}>
            <Link
              href="/"
              style={{
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "0.8rem",
                transition: "color 0.2s",
              }}
            >
              Home
            </Link>
            {breadcrumb?.map((crumb, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <ChevronRight size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
                {i === breadcrumb.length - 1 ? (
                  <span style={{ color: "#0EA5E9", fontSize: "0.8rem", fontWeight: 500 }}>{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.8rem" }}
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-poppins, Poppins), sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
              color: "white",
              lineHeight: 1.2,
              marginBottom: subtitle ? "0.75rem" : 0,
              maxWidth: 640,
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", maxWidth: 520, lineHeight: 1.7 }}>
              {subtitle}
            </p>
          )}

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(to right, #0F766E, #0EA5E9)",
              borderRadius: 2,
              marginTop: "1.25rem",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
