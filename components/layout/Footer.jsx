"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Heart, ArrowRight } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/doctors", label: "Our Doctors" },
    { href: "/departments", label: "Departments" },
    { href: "/appointment", label: "Book Appointment" },
    { href: "/contact", label: "Contact Us" },
  ],
  services: [
    { href: "/services", label: "General Checkup" },
    { href: "/services", label: "Dental Care" },
    { href: "/services", label: "Skin Care" },
    { href: "/services", label: "Physiotherapy" },
    { href: "/services", label: "Child Care" },
    { href: "/services", label: "Emergency Care" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0F172A", color: "white" }}>
      {/* Main footer */}
      <div className="container" style={{ padding: "4rem 1rem 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", marginBottom: "1.25rem" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-poppins, Poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "white",
                  }}
                >
                  CarePlus <span style={{ color: "#0EA5E9" }}>Clinic</span>
                </div>
                <div style={{ fontSize: "0.6rem", color: "#94A3B8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Advanced Healthcare
                </div>
              </div>
            </Link>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Providing compassionate, high-quality healthcare to families and individuals for over 10 years. Your health is our priority.
            </p>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: Phone, text: "+1 (800) 123-4567", href: "tel:+18001234567" },
                { icon: Mail, text: "info@careplus.com", href: "mailto:info@careplus.com" },
                { icon: MapPin, text: "245 Medical Center Drive, NY 10001", href: "#" },
                { icon: Clock, text: "Mon–Sat: 8:00 AM – 8:00 PM", href: null },
              ].map(({ icon: Icon, text, href }, i) => (
                <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <Icon size={14} style={{ color: "#0EA5E9", marginTop: "3px", flexShrink: 0 }} />
                  {href ? (
                    <Link href={href} style={{ color: "#94A3B8", fontSize: "0.82rem", textDecoration: "none" }}>
                      {text}
                    </Link>
                  ) : (
                    <span style={{ color: "#94A3B8", fontSize: "0.82rem" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: "var(--font-poppins, Poppins), sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: "1.25rem", color: "white", letterSpacing: "0.02em" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    <ArrowRight size={12} style={{ color: "#0F766E" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: "var(--font-poppins, Poppins), sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: "1.25rem", color: "white", letterSpacing: "0.02em" }}>
              Our Services
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0EA5E9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    <ArrowRight size={12} style={{ color: "#0F766E" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ fontFamily: "var(--font-poppins, Poppins), sans-serif", fontWeight: 600, fontSize: "0.95rem", marginBottom: "1.25rem", color: "white", letterSpacing: "0.02em" }}>
              Health Newsletter
            </h3>
            <p style={{ color: "#94A3B8", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1rem" }}>
              Subscribe to receive health tips and clinic updates directly in your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  padding: "0.65rem 0.9rem",
                  borderRadius: "0.4rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  fontSize: "0.85rem",
                  outline: "none",
                  width: "100%",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.65rem",
                  borderRadius: "0.4rem",
                  background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                  color: "white",
                  border: "none",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.75rem" }}>Follow Us</div>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                {/* Facebook SVG */}
                <button
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "0.4rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#94A3B8",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0F766E";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.02 9.69v-7.07H7.57V12h2.45V9.41c0-2.43 1.45-3.78 3.66-3.78 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.21 0-1.58.75-1.58 1.52V12h2.7l-.43 2.62h-2.27V21.7C18.56 20.87 22 16.84 22 12z" />
                  </svg>
                </button>
                {/* Twitter SVG */}
                <button
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "0.4rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#94A3B8",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0F766E";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                {/* LinkedIn SVG */}
                <button
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "0.4rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#94A3B8",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0F766E";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                {/* Instagram SVG */}
                <button
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "0.4rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#94A3B8",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0F766E";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#94A3B8";
                  }}
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <p style={{ color: "#475569", fontSize: "0.8rem" }}>
              &copy; {new Date().getFullYear()} CarePlus Clinic. All rights reserved.
            </p>
            <p style={{ color: "#475569", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Designed with <Heart size={12} style={{ color: "#EF4444" }} /> for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
