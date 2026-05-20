"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowRight, Heart, Leaf, Smile, Activity } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { healthTips } from "@/components/data/testimonials";

const iconMap = {
  Heart,
  Leaf,
  Smile,
  Activity,
};

export default function HealthTips() {
  return (
    <section className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <SectionTitle
          badge="Health & Wellness"
          title="Latest Health Tips"
          highlight="& Articles"
          subtitle="Stay informed with health insights, wellness guides, and expert advice curated by our medical specialists."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
          className="tips-grid"
        >
          {healthTips.map((tip, i) => {
            const Icon = iconMap[tip.icon] || BookOpen;
            return (
              <motion.article
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="card"
                style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* Category badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      background: "rgba(15, 23, 42, 0.75)",
                      backdropFilter: "blur(4px)",
                      color: "white",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "0.4rem",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <Icon size={12} style={{ color: "#22C55E" }} />
                    {tip.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Meta */}
                  <div style={{ display: "flex", gap: "0.85rem", marginBottom: "0.6rem", fontSize: "0.75rem", color: "#64748B" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Clock size={12} />
                      {tip.readTime}
                    </div>
                    <span>•</span>
                    <span>{tip.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#0F172A",
                      lineHeight: 1.4,
                      marginBottom: "0.5rem",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {tip.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {tip.excerpt}
                  </p>

                  {/* Link */}
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "#0F766E",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      textDecoration: "none",
                    }}
                  >
                    Read Article <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .tips-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .tips-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
