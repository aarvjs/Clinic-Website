"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "white",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            {/* Cross icon */}
            <div
              style={{
                width: 64,
                height: 64,
                background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 30px rgba(15, 118, 110, 0.35)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Brand text */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-poppins, Poppins), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#0F766E",
                  letterSpacing: "-0.02em",
                }}
              >
                CarePlus
                <span style={{ color: "#0EA5E9" }}> Clinic</span>
              </div>
              <div style={{ fontSize: "0.75rem", color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
                Advanced Healthcare
              </div>
            </div>
          </motion.div>

          {/* Heartbeat line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
              <motion.polyline
                points="0,20 30,20 45,5 55,35 65,5 75,35 85,20 200,20"
                stroke="#0F766E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", gap: "6px" }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#0F766E",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
