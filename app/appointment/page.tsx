"use client";

import React, { useState } from "react";
import PageHero from "@/components/common/PageHero";
import SectionTitle from "@/components/common/SectionTitle";
import { doctors } from "@/components/data/doctors";
import { departments } from "@/components/data/departments";
import { CalendarDays, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      notes: "",
    });
    setSubmitted(false);
  };

  return (
    <>
      <PageHero
        title="Book An Appointment"
        subtitle="Schedule a physical or online consultation with our board-certified medical specialists in just a few clicks."
        image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&auto=format&fit=crop&q=80"
        breadcrumb={[{ label: "Appointment", href: "/appointment" }]}
      />

      <section className="section-padding" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="appointment-grid"
          >
            {/* Form side */}
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
                    Appointment Form
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.82rem", marginBottom: "2rem" }}>
                    Please fill out the form accurately. Our reception will contact you to confirm the booking.
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row-2">
                    {/* Patient Name */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Patient Full Name *
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

                    {/* Phone Number */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row-2">
                    {/* Email */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Email Address *
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

                    {/* Department Selection */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Select Department *
                      </label>
                      <select
                        required
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="form-input"
                        style={{ height: "46px" }}
                      >
                        <option value="">Choose department</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row-2">
                    {/* Doctor Selection */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Select Doctor *
                      </label>
                      <select
                        required
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="form-input"
                        style={{ height: "46px" }}
                      >
                        <option value="">Choose doctor</option>
                        {doctors
                          .filter((doc) => !formData.department || doc.department === formData.department || doc.department === "General Medicine")
                          .map((doc) => (
                            <option key={doc.id} value={doc.name}>
                              {doc.name} ({doc.specialization})
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input"
                        style={{ height: "46px" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.5rem" }} className="form-row-2">
                    {/* Time */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Preferred Time *
                      </label>
                      <select
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="form-input"
                        style={{ height: "46px" }}
                      >
                        <option value="">Choose time slot</option>
                        <option value="09:00 AM">09:00 AM – 10:00 AM</option>
                        <option value="10:00 AM">10:00 AM – 11:00 AM</option>
                        <option value="11:00 AM">11:00 AM – 12:00 PM</option>
                        <option value="02:00 PM">02:00 PM – 03:00 PM</option>
                        <option value="03:00 PM">03:00 PM – 04:00 PM</option>
                        <option value="04:00 PM">04:00 PM – 05:00 PM</option>
                      </select>
                    </div>

                    {/* Extra Notes */}
                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#334155", marginBottom: "0.4rem" }}>
                        Medical Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Symptoms, history, notes..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}
                  >
                    {loading ? "Processing Booking..." : "Submit Booking Request"}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "#DCFCE7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    <CheckCircle2 size={32} color="#15803D" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "#0F172A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Booking Requested Successfully!
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: 440, margin: "0 auto 2rem" }}>
                    Thank you, <strong style={{ color: "#0F172A" }}>{formData.name}</strong>. Your appointment request for <strong style={{ color: "#0F172A" }}>{formData.date} ({formData.time})</strong> with <strong style={{ color: "#0F172A" }}>{formData.doctor}</strong> has been received. Our team will contact you shortly at <strong style={{ color: "#0F172A" }}>{formData.phone}</strong> to confirm.
                  </p>
                  <button onClick={handleReset} className="btn-secondary" style={{ padding: "0.65rem 1.5rem" }}>
                    Book Another Appointment
                  </button>
                </div>
              )}
            </div>

            {/* Info side */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Call to action panel */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  color: "white",
                  boxShadow: "0 10px 25px rgba(15, 118, 110, 0.2)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-poppins, Poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Need Immediate Help?
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  For urgent cases or immediate emergency assistance, call our priority clinic desk. We are active 24/7.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a
                    href="tel:+18001234567"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      background: "white",
                      color: "#0F766E",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    <Phone size={16} />
                    +1 (800) 123-4567
                  </a>
                  <a
                    href="mailto:emergency@careplus.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      background: "rgba(255,255,255,0.15)",
                      color: "white",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    <Mail size={16} />
                    emergency@careplus.com
                  </a>
                </div>
              </div>

              {/* Working hours card */}
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
                  Working Hours
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { days: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
                    { days: "Saturday", hours: "9:00 AM – 6:00 PM" },
                    { days: "Sunday", hours: "Emergency Only (24/7)" },
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
                      <span style={{ color: "#64748B", fontWeight: 500 }}>{row.days}</span>
                      <span style={{ color: "#0F172A", fontWeight: 600 }}>{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance card */}
              <div
                style={{
                  background: "white",
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <ShieldCheck size={20} style={{ color: "#22C55E", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h5 style={{ fontWeight: 600, fontSize: "0.82rem", color: "#0F172A" }}>HIPAA Compliant</h5>
                  <p style={{ color: "#64748B", fontSize: "0.72rem", lineHeight: 1.5, marginTop: "0.15rem" }}>
                    Your personal information and medical history are encrypted and kept strictly confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .appointment-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .appointment-grid > div:nth-child(1) { padding: 1.5rem !important; }
          .form-row-2 { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
