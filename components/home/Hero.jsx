"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, CalendarDays, Shield, Award, Clock } from "lucide-react";

const slides = [
  {
    id: 0,
    title: "Trusted Healthcare",
    titleHighlight: "for Your Family",
    subtitle:
      "Experience compassionate, expert medical care with our team of 20+ specialists. Your health and wellbeing are our highest priority.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&auto=format&fit=crop&q=80",
    badge: "Family-Centered Care",
  },
  {
    id: 1,
    title: "Advanced Treatment",
    titleHighlight: "With Expert Doctors",
    subtitle:
      "Cutting-edge medical technology combined with decades of expertise. Receive accurate diagnoses and effective treatments you can trust.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1400&auto=format&fit=crop&q=80",
    badge: "Advanced Medical Technology",
  },
  {
    id: 2,
    title: "Book Your",
    titleHighlight: "Appointment Anytime",
    subtitle:
      "Convenient online booking, flexible scheduling, and 24/7 emergency services. Getting the care you need has never been easier.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&auto=format&fit=crop&q=80",
    badge: "24/7 Medical Support",
  },
];

const floatingCards = [
  { icon: Shield, text: "10+ Years Trusted", sub: "Medical Excellence", color: "#0F766E" },
  { icon: Award, text: "20+ Specialists", sub: "Expert Doctors", color: "#0EA5E9" },
  { icon: Clock, text: "24/7 Emergency", sub: "Always Available", color: "#22C55E" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next, paused]);

  return (
    <section
      style={{ position: "relative", minHeight: "90vh", overflow: "hidden", background: "#0F172A" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.28 }}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(15,118,110,0.55) 0%, rgba(15,23,42,0.88) 60%, rgba(15,23,42,0.95) 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="hero-blob-1"
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          top: -200,
          right: -200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="hero-blob-2"
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          bottom: -100,
          left: -100,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15, 118, 110, 0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          minHeight: "90vh",
          padding: "5rem 1rem 4rem",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.04em",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22C55E",
                    animation: "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
                  }}
                />
                {slides[current].badge}
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "var(--font-poppins, Poppins), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
                  color: "white",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  marginBottom: "1.25rem",
                }}
              >
                {slides[current].title}{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #4ADE80, #0EA5E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {slides[current].titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  lineHeight: 1.8,
                  marginBottom: "2.25rem",
                  maxWidth: 540,
                }}
              >
                {slides[current].subtitle}
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
                <Link href="/appointment" className="btn-primary" style={{ padding: "0.85rem 2rem", fontSize: "0.95rem" }}>
                  <CalendarDays size={17} />
                  Book Appointment
                </Link>
                <a
                  href="tel:+18001234567"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 2rem",
                    borderRadius: "0.5rem",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "2px solid rgba(255,255,255,0.25)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  }}
                >
                  <Phone size={17} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating stat cards */}
      <div
        style={{
          position: "absolute",
          bottom: "6rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          zIndex: 2,
        }}
        className="floating-stats"
      >
        {floatingCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.75rem 1.1rem",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0.75rem",
                minWidth: 170,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "0.5rem",
                  background: `${card.color}25`,
                  border: `1px solid ${card.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={17} style={{ color: card.color }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "white", fontSize: "0.85rem", lineHeight: 1.2 }}>
                  {card.text}
                </div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.72rem" }}>{card.sub}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Slider controls */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Prev/Next */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? "#22C55E" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-stats { display: none !important; }
          .hero-blob-1, .hero-blob-2 { display: none !important; }
        }
      `}</style>
    </section>
  );
}
