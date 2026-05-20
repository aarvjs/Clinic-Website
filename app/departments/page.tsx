"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Smile, Leaf, Baby, Brain, Activity, CalendarDays, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { departments } from "@/components/data/departments";

const iconMap: Record<string, any> = {
  Heart,
  Smile,
  Leaf,
  Baby,
  Brain,
  Activity,
  Bone: Activity,
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        title="Medical Departments"
        subtitle="Explore our specialized clinical divisions, each led by dedicated experts equipped with the latest medical diagnostics."
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1400&auto=format&fit=crop&q=80"
        breadcrumb={[{ label: "Departments", href: "/departments" }]}
      />

      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <SectionTitle
            badge="Clinic Specialties"
            title="Our Dedicated"
            highlight="Clinical Divisions"
            subtitle="CarePlus Clinic hosts state-of-the-art departments with customized environments to treat orthopedic, pediatric, dermatological, cardiac, neurological and dental cases."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="dept-grid"
          >
            {departments.map((dept, index) => {
              const Icon = iconMap[dept.icon] || Heart;
              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{
                    background: "white",
                    borderRadius: "1.25rem",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                  }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)" }}
                >
                  {/* Photo cover */}
                  <div style={{ position: "relative", height: 180 }}>
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(15, 23, 42, 0.55), transparent)",
                      }}
                    />
                    {/* Icon */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-1.25rem",
                        left: "1.5rem",
                        width: 50,
                        height: 50,
                        borderRadius: "0.6rem",
                        background: dept.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                        border: "2.5px solid white",
                      }}
                    >
                      <Icon size={20} color="white" />
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "2.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-poppins, Poppins), sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#0F172A",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {dept.name} Department
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.5rem", flex: 1 }}>
                      {dept.shortDesc} We provide comprehensive evaluation, diagnostic tests, therapy options, and personalized outpatient recovery tracks.
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
                      <Link
                        href="/appointment"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          color: dept.color,
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          textDecoration: "none",
                        }}
                      >
                        Book Visit <ArrowRight size={13} />
                      </Link>

                      <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                        {dept.doctorCount} Doctors
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .dept-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .dept-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
