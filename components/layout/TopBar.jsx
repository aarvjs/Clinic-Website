"use client";

import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="topbar-wrapper"
      style={{
        background: "#0F766E",
        color: "white",
        padding: "0.4rem 0",
        fontSize: "0.78rem",
      }}
    >
      <div className="container">
        <div
          className="topbar-content"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/* Left info */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", opacity: 0.9 }}>
              <Clock size={12} />
              <span>Mon–Sat: 8AM – 8PM</span>
            </div>
            <div className="topbar-hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.35rem", opacity: 0.9 }}>
              <MapPin size={12} />
              <span>245 Medical Center Drive, New York</span>
            </div>
          </div>

          {/* Right links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link
              href="tel:+18001234567"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "white",
                textDecoration: "none",
                opacity: 0.9,
                transition: "opacity 0.2s",
              }}
            >
              <Phone size={12} />
              <span>+1 (800) 123-4567</span>
            </Link>
            <Link
              href="mailto:info@careplusclicnic.com"
              className="topbar-hide-mobile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "white",
                textDecoration: "none",
                opacity: 0.9,
                transition: "opacity 0.2s",
              }}
            >
              <Mail size={12} />
              <span>info@careplus.com</span>
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .topbar-hide-mobile {
            display: none !important;
          }
          .topbar-content {
            justify-content: space-between !important;
            gap: 0.5rem !important;
            font-size: 0.72rem !important;
          }
        }
      `}</style>
    </div>
  );
}
