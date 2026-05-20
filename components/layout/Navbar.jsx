"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarDays } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/departments", label: "Departments" },
  { href: "/appointment", label: "Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 400,
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.98)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(15,118,110,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4.5rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="logo-link"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            <div
              className="logo-icon-box"
              style={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                borderRadius: "0.4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg className="logo-svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div
                className="logo-title"
                style={{
                  fontFamily: "var(--font-poppins, Poppins), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0F766E",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                CarePlus
                <span style={{ color: "#0EA5E9" }}> Clinic</span>
              </div>
              <div className="logo-subtitle" style={{ fontSize: "0.58rem", color: "#64748B", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Advanced Healthcare
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.45rem 0.85rem",
                    borderRadius: "0.4rem",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#0F766E" : "#374151",
                    textDecoration: "none",
                    background: isActive ? "rgba(15, 118, 110, 0.08)" : "transparent",
                    transition: "all 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#0F766E";
                      e.currentTarget.style.background = "rgba(15, 118, 110, 0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#374151";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Book Appointment button */}
          <Link
            href="/appointment"
            className="navbar-book-btn btn-primary"
            style={{
              padding: "0.5rem 1.1rem",
              fontSize: "0.82rem",
              borderRadius: "0.4rem",
              alignItems: "center",
              gap: "0.35rem",
              whiteSpace: "nowrap",
            }}
          >
            <CalendarDays size={14} />
            <span className="book-text-desktop">Book Appointment</span>
            <span className="book-text-mobile">Book</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
              borderRadius: "0.4rem",
              color: "#0F172A",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "white",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem",
              overflowY: "auto",
            }}
          >
            {/* Mobile Menu Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "4rem",
                marginBottom: "1.5rem",
                borderBottom: "1px solid #F1F5F9",
                paddingBottom: "0.5rem",
              }}
            >
              {/* Mobile Menu Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                    borderRadius: "0.4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins, Poppins), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#0F766E",
                      lineHeight: 1.1,
                    }}
                  >
                    CarePlus
                    <span style={{ color: "#0EA5E9" }}> Clinic</span>
                  </div>
                  <div style={{ fontSize: "0.58rem", color: "#64748B", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Advanced Healthcare
                  </div>
                </div>
              </div>

              {/* Mobile Menu Close (Cut) Button */}
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderRadius: "0.4rem",
                  color: "#0F172A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={26} />
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.9rem 1rem",
                        borderRadius: "0.6rem",
                        fontSize: "1.05rem",
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#0F766E" : "#0F172A",
                        textDecoration: "none",
                        background: isActive ? "rgba(15, 118, 110, 0.08)" : "transparent",
                        borderLeft: isActive ? "3px solid #0F766E" : "3px solid transparent",
                        transition: "all 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link
                href="/appointment"
                onClick={() => setMenuOpen(false)}
                className="btn-primary"
                style={{ justifyContent: "center" }}
              >
                <CalendarDays size={16} />
                Book Appointment
              </Link>
              <Link
                href="tel:+18001234567"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "#F0FDF4",
                  color: "#0F766E",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  border: "1.5px solid #BBF7D0",
                }}
              >
                <Phone size={16} />
                +1 (800) 123-4567
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .navbar-book-btn { display: none !important; }
        }
        
        @media (min-width: 1024px) {
          .navbar-book-btn { display: inline-flex !important; }
        }
        
        @media (max-width: 480px) {
          .logo-subtitle { display: none !important; }
          .logo-title { font-size: 1.05rem !important; }
          .logo-link { gap: 0.4rem !important; }
        }
      `}</style>
    </header>
  );
}
