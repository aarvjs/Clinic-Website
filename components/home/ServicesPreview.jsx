"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/components/data/services";

export default function ServicesPreview() {
  return (
    <section className="section-padding" style={{ background: "#F8FAFC" }}>
      <div className="container">
        <SectionTitle
          badge="Our Services"
          title="Comprehensive Medical"
          highlight="Care For You"
          subtitle="From routine checkups to specialized treatments, we offer a full spectrum of healthcare services designed to meet all your medical needs."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
          className="services-grid"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/services" className="btn-primary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
