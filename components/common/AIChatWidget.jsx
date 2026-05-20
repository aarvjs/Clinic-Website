"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { faqs } from "@/components/data/faqs";

const QUICK_QUESTIONS = [
  "Clinic timing?",
  "How to book appointment?",
  "Available doctors?",
  "Emergency service?",
  "Location?",
  "Insurance accepted?",
];

const GREETING = {
  id: "greeting",
  role: "bot",
  text: "Hello! I am the CarePlus virtual assistant. How can I help you today? You can ask me about our services, timings, doctors, or appointments.",
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [messages, open]);

  const findAnswer = (question) => {
    const q = question.toLowerCase();
    const match = faqs.find(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        q.includes(faq.question.toLowerCase().replace("?", "")) ||
        faq.answer.toLowerCase().includes(q.split(" ").filter((w) => w.length > 3)[0] || "")
    );
    return match
      ? match.answer
      : "Thank you for your question. For detailed assistance, please call us at +1 (800) 123-4567 or visit our clinic. Our team will be happy to help you.";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const answer = findAnswer(text);
      setTyping(false);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: answer }]);
    }, 800 + Math.random() * 400);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.8, ease: "backOut" }}
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 490,
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 15px rgba(15, 118, 110, 0.4)",
          color: "white",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}

        {/* Pulse ring */}
        {!open && (
          <span
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "2px solid rgba(15, 118, 110, 0.4)",
              animation: "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
            }}
          />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-widget"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "5.5rem",
              left: "1.5rem",
              zIndex: 489,
              width: "min(340px, calc(100vw - 2rem))",
              background: "white",
              borderRadius: "1rem",
              boxShadow: "0 20px 50px rgba(15, 23, 42, 0.2)",
              border: "1px solid rgba(226, 232, 240, 0.8)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              maxHeight: "min(480px, calc(100vh - 10rem))",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Bot size={18} color="white" />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "white" }}>CarePlus Assistant</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#22C55E",
                      display: "inline-block",
                    }}
                  />
                  Online — Available 24/7
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                    gap: "0.5rem",
                    alignItems: "flex-end",
                  }}
                >
                  {msg.role === "bot" && (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "rgba(15, 118, 110, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Bot size={13} color="#0F766E" />
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: "80%",
                      padding: "0.6rem 0.85rem",
                      borderRadius: msg.role === "user" ? "1rem 1rem 0.2rem 1rem" : "1rem 1rem 1rem 0.2rem",
                      background: msg.role === "user" ? "linear-gradient(135deg, #0F766E, #0EA5E9)" : "#F1F5F9",
                      color: msg.role === "user" ? "white" : "#0F172A",
                      fontSize: "0.82rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "rgba(15, 118, 110, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Bot size={13} color="#0F766E" />
                  </div>
                  <div
                    style={{
                      padding: "0.7rem 1rem",
                      borderRadius: "1rem 1rem 1rem 0.2rem",
                      background: "#F1F5F9",
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: ["0px", "-5px", "0px"] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        style={{ width: 6, height: 6, borderRadius: "50%", background: "#94A3B8" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div
              style={{
                padding: "0.5rem 0.75rem",
                borderTop: "1px solid #F1F5F9",
                display: "flex",
                gap: "0.4rem",
                flexWrap: "wrap",
              }}
            >
              {QUICK_QUESTIONS.slice(0, 4).map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{
                    padding: "0.3rem 0.65rem",
                    borderRadius: "9999px",
                    background: "rgba(15, 118, 110, 0.08)",
                    border: "1px solid rgba(15, 118, 110, 0.2)",
                    color: "#0F766E",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0F766E";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(15, 118, 110, 0.08)";
                    e.currentTarget.style.color = "#0F766E";
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              style={{
                padding: "0.75rem",
                borderTop: "1px solid #E2E8F0",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                style={{
                  flex: 1,
                  padding: "0.6rem 0.9rem",
                  borderRadius: "0.5rem",
                  border: "1.5px solid #E2E8F0",
                  fontSize: "0.82rem",
                  outline: "none",
                  color: "#0F172A",
                  background: "white",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "0.5rem",
                  background: "linear-gradient(135deg, #0F766E, #0EA5E9)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Send size={15} color="white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
