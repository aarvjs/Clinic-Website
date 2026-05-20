"use client";

import React, { useState } from "react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(false);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with CarePlus Clinic. Our admin team will respond to your queries as soon as possible."
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&auto=format&fit=crop&q=80"
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          {/* Quick contact methods */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
            className="contact-cards"
          >
            {[
              {
                icon: Phone,
                title: "Call Us Anytime",
                detail: "+1 (800) 123-4567",
                sub: "Emergency Call: +1 (800) 911-CARE",
                href: "tel:+18001234567",
                color: "#0F766E",
              },
              {
                icon: Mail,
                title: "Email Assistance",
                detail: "info@careplus.com",
                sub: "Careers: hr@careplus.com",
                href: "mailto:info@careplus.com",
                color: "#0EA5E9",
              },
              {
                icon: MapPin,
                title: "Visit Our Clinic",
                detail: "245 Medical Center Drive",
                sub: "Healthcare District, NY 10001",
                href: "#",
                color: "#22C55E",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <a
                  key={i}
                  href={card.href}
                  style={{
                    background: "white",
                    borderRadius: "1.25rem",
                    padding: "2rem 1.5rem",
                    border: "1px solid #E2E8F0",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  className="contact-card-item"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(15, 23, 42, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.02)";
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      background: `${card.color}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                      color: card.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#0F172A",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {card.title}
                  </h4>
                  <div style={{ color: "#0F766E", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                    {card.detail}
                  </div>
                  <div style={{ color: "#64748B", fontSize: "0.78rem" }}>{card.sub}</div>
                </a>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "3.5rem",
              alignItems: "start",
            }}
            className="contact-grid-main"
          >
            {/* Form */}
            <div
              style={{
                background: "white",
                borderRadius: "1.25rem",
                padding: "2.5rem",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.03)",
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#0F172A",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Send Us A Message
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.82rem", marginBottom: "2rem" }}>
                    Fill out the form below and our customer support desk will reach out within 24 hours.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row-2">
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1.25rem" }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Feedback, billing inquiry, clinic visit..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your query details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input"
                      style={{ resize: "none", fontFamily: "inherit" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
                  >
                    <Send size={15} />
                    {loading ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: "50%",
                      background: "#DCFCE7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    <CheckCircle2 size={30} color="#15803D" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.35rem",
                      color: "#0F172A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 400, margin: "0 auto 2rem" }}>
                    Thank you, <strong style={{ color: "#0F172A" }}>{formData.name}</strong>. Your message regarding &ldquo;<strong style={{ color: "#0F172A" }}>{formData.subject}</strong>&rdquo; has been sent. We will get back to you shortly.
                  </p>
                  <button onClick={handleReset} className="btn-secondary" style={{ padding: "0.65rem 1.5rem" }}>
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* Map & timings */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Timing */}
              <div
                style={{
                  background: "white",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.02)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-poppins, Poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0F172A",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Clock size={16} style={{ color: "#0F766E" }} />
                  Clinic Timings
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { label: "Monday – Saturday", value: "8:00 AM – 8:00 PM" },
                    { label: "Sunday", value: "Outpatient Closed (Emergency Available)" },
                    { label: "Diagnostic Lab", value: "7:30 AM – 7:00 PM (Mon-Sat)" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.8rem",
                        paddingBottom: "0.5rem",
                        borderBottom: i === 2 ? "none" : "1px solid #F1F5F9",
                      }}
                    >
                      <span style={{ color: "#64748B", fontWeight: 500 }}>{row.label}</span>
                      <span style={{ color: "#0F172A", fontWeight: 600 }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map block placeholder */}
              <div className="map-placeholder" style={{ flex: 1, padding: "2rem", flexDirection: "column" }}>
                <MapPin size={36} style={{ color: "#0F766E", marginBottom: "0.75rem" }} />
                <h4
                  style={{
                    fontFamily: "var(--font-poppins, Poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0F172A",
                    marginBottom: "0.25rem",
                  }}
                >
                  CarePlus Medical Center
                </h4>
                <p style={{ color: "#64748B", fontSize: "0.78rem", textAlign: "center", maxWidth: 280, marginBottom: "1.25rem" }}>
                  245 Medical Center Drive, Healthcare District, New York, NY 10001
                </p>
                <div
                  style={{
                    padding: "0.45rem 1rem",
                    background: "rgba(15, 118, 110, 0.08)",
                    border: "1px solid rgba(15, 118, 110, 0.2)",
                    borderRadius: "0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#0F766E",
                  }}
                >
                  Directions: Easily reachable via Subway (Line A/C)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-cards { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .contact-grid-main { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .contact-grid-main > div:nth-child(1) { padding: 1.5rem !important; }
          .form-row-2 { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
