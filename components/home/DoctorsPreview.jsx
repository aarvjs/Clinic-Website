"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import DoctorCard from "@/components/common/DoctorCard";
import { doctors } from "@/components/data/doctors";

export default function DoctorsPreview() {
  const featured = doctors.slice(0, 3);

  return (
    <section className="section-padding" style={{ background: "#F8FAFC" }}>
      <div className="container">
        <SectionTitle
          badge="Our Doctors"
          title="Meet Our Expert"
          highlight="Medical Team"
          subtitle="Our team of highly qualified, board-certified specialists brings decades of combined experience and a genuine passion for patient care."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
          className="doctors-grid"
        >
          {featured.map((doctor, i) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/doctors" className="btn-primary">
            View All Doctors <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .doctors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .doctors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
