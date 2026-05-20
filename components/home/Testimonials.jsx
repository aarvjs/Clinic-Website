"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { testimonials } from "@/components/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, paused]);

  return (
    <section className="section-padding" style={{ background: "#F8FAFC" }}>
      <div className="container">
        <SectionTitle
          badge="Patient Testimonials"
          title="What Our Patients"
          highlight="Say About Us"
          subtitle="Real feedback from families and individuals who have experienced our comprehensive, compassionate medical care."
        />

        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            position: "relative",
            minHeight: "260px",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: "white",
                borderRadius: "1.25rem",
                padding: "2.25rem 2.5rem",
                boxShadow: "0 15px 40px rgba(15, 23, 42, 0.06)",
                border: "1px solid #E2E8F0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Quote icon watermark */}
              <Quote
                size={70}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  color: "rgba(15, 118, 110, 0.05)",
                  pointerEvents: "none",
                }}
              />

              {/* Stars */}
              <div style={{ display: "flex", gap: "2px", marginBottom: "1.25rem" }}>
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={15} style={{ fill: "#F59E0B", color: "#F59E0B" }} />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "#334155",
                  fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                  lineHeight: 1.8,
                  fontWeight: 500,
                  marginBottom: "1.75rem",
                  fontStyle: "italic",
                }}
              >
                "{testimonials[current].review}"
              </p>

              {/* Profile info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  textAlign: "left",
                }}
              >
                <div style={{ position: "relative", width: 50, height: 50, borderRadius: "50%", overflow: "hidden" }}>
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="50px"
                  />
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins, Poppins), sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0F172A" }}>
                    {testimonials[current].name}
                  </h4>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.75rem", color: "#64748B" }}>
                    <span>{testimonials[current].role}</span>
                    <span>•</span>
                    <span style={{ color: "#0F766E", fontWeight: 600 }}>{testimonials[current].department}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "-3.5rem",
              zIndex: 2,
            }}
            className="carousel-btn-left"
          >
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "white",
                border: "1px solid #E2E8F0",
                color: "#0F766E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F766E";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#0F766E";
              }}
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "-3.5rem",
              zIndex: 2,
            }}
            className="carousel-btn-right"
          >
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "white",
                border: "1px solid #E2E8F0",
                color: "#0F766E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F766E";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#0F766E";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === current ? 20 : 7,
                height: 7,
                borderRadius: 4,
                background: idx === current ? "#0F766E" : "#CBD5E1",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .carousel-btn-left, .carousel-btn-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
