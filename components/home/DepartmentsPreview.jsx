"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import DepartmentCard from "@/components/common/DepartmentCard";
import { departments } from "@/components/data/departments";

export default function DepartmentsPreview() {
  return (
    <section className="section-padding" style={{ background: "white" }}>
      <div className="container">
        <SectionTitle
          badge="Departments"
          title="Specialized Medical"
          highlight="Departments"
          subtitle="Our clinic houses dedicated departments led by experienced specialists, ensuring you receive expert care in every area of medicine."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
          className="dept-grid"
        >
          {departments.map((dept, i) => (
            <DepartmentCard key={dept.id} dept={dept} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/departments" className="btn-primary">
            View All Departments <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .dept-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .dept-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
