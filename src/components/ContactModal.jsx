"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

const buildMailto = (data) => {
  const subject = data.subject || "Portfolio Inquiry";
  const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // Honeypot for bots - real users never fill this
  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const closeButtonRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  // Reset state shortly after the modal closes
  useEffect(() => {
    if (!isOpen && status.success) {
      const t = setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen, status.success]);

  if (!isOpen) return null;

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const openMailFallback = () => {
    window.location.href = buildMailto(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botcheck) return; // silent rejection for bots
    setStatus({ loading: true, success: false, error: null });

    // No Web3Forms key configured (e.g. local/static preview): honestly
    // fall back to the visitor's email client instead of faking delivery.
    if (!siteConfig.web3formsKey) {
      openMailFallback();
      setStatus({
        loading: false,
        success: true,
        error: null,
        fallback: true,
      });
      return;
    }

    try {
      const payload = {
        access_key: siteConfig.web3formsKey,
        subject: formData.subject
          ? `Portfolio inquiry: ${formData.subject}`
          : "New inquiry from your portfolio website",
        from_name: "Portfolio Contact Form",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        botcheck,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.message || "Delivery service rejected the message. Please email me directly.",
          fallback: true,
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        error: "Network error. You can still reach me via email — click below.",
        fallback: true,
      });
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:outline-none text-sm transition-colors";

  return (
    <div
      className="modal-overlay active"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-content p-8 md:p-12 relative max-w-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          ref={closeButtonRef}
          id="close-contact-modal-btn"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-colors font-bold text-xl flex items-center justify-center cursor-pointer"
        >
          &times;
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">[ Contact Aniket ]</span>
          <h3 id="contact-modal-title" className="text-3xl font-extrabold font-heading text-black">Send a Message</h3>
          <p className="text-zinc-600 text-sm mt-1">
            Fill out the form below or email directly at <strong className="text-black">{siteConfig.email}</strong>.
          </p>
        </div>

        {status.success ? (
          <div className="py-8 text-center space-y-5">
            <div className="text-5xl" aria-hidden="true">✓</div>
            <h4 className="text-xl font-bold font-heading text-black">Message sent!</h4>
            <p className="text-sm text-zinc-600">
              {status.fallback
                ? "Your email app should now open with the message ready to send. If it didn't, email me directly."
                : `Thanks ${formData.name.split(" ")[0] || "there"} — I'll get back to you at ${formData.email} soon.`}
            </p>
            {status.fallback && (
              <button
                onClick={openMailFallback}
                className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Open Email App Again
              </button>
            )}
            <button
              onClick={onClose}
              className="block mx-auto text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Your Name *</label>
              <input
                id="contact-name"
                type="text"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="e.g. Rahul Sharma"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Your Email *</label>
              <input
                id="contact-email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="e.g. rahul@company.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Subject</label>
              <input
                id="contact-subject"
                type="text"
                maxLength={200}
                value={formData.subject}
                onChange={handleChange("subject")}
                placeholder="e.g. Full-Stack Role / Project Inquiry"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Message *</label>
              <textarea
                id="contact-message"
                required
                minLength={10}
                maxLength={5000}
                rows={4}
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Hello Aniket, I'd like to discuss an opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Honeypot - hidden from humans, bots will fill it */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              value={botcheck}
              onChange={(e) => setBotcheck(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            {status.error && (
              <div className="p-4 rounded-xl text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                ✕ {status.error}
                {status.fallback && (
                  <button
                    type="button"
                    onClick={openMailFallback}
                    className="ml-2 underline font-bold cursor-pointer"
                  >
                    Email me manually
                  </button>
                )}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3.5 bg-black text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors shadow cursor-pointer disabled:opacity-50"
              >
                {status.loading ? "Sending Message..." : "Send Message →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
