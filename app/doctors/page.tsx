"use client";

import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import DoctorCard from "@/components/common/DoctorCard";
import { doctors } from "@/components/data/doctors";

const categories = ["All Doctors", "Cardiologist", "Orthopedic Surgeon", "Dermatologist", "Pediatrician", "Neurologist", "General Physician"];

export default function DoctorsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All Doctors");

  const filteredDoctors = selectedFilter === "All Doctors"
    ? doctors
    : doctors.filter(doc => doc.specialization === selectedFilter);

  return (
    <>
      <PageHero
        title="Meet Our Doctors"
        subtitle="Highly qualified, board-certified medical specialists dedicated to bringing you the best healthcare service."
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&auto=format&fit=crop&q=80"
        breadcrumb={[{ label: "Doctors", href: "/doctors" }]}
      />

      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <SectionTitle
            badge="Expert Medical Team"
            title="Our Medical"
            highlight="Specialists"
            subtitle="Filter by medical specialty to find the right doctor for your appointment. Our team is available for routine visits and complex consultations."
          />

          {/* Filtering UI */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: "1.5px solid",
                  borderColor: selectedFilter === cat ? "#0F766E" : "#E2E8F0",
                  background: selectedFilter === cat ? "#0F766E" : "white",
                  color: selectedFilter === cat ? "white" : "#64748B",
                }}
                onMouseEnter={(e) => {
                  if (selectedFilter !== cat) {
                    e.currentTarget.style.borderColor = "#0F766E";
                    e.currentTarget.style.color = "#0F766E";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== cat) {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.color = "#64748B";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="doctors-grid"
          >
            {filteredDoctors.map((doc, index) => (
              <DoctorCard key={doc.id} doctor={doc} index={index} />
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#64748B" }}>
              No doctors found matching the selected filter.
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .doctors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .doctors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
