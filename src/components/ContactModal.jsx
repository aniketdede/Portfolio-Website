"use client";

import { useState, useEffect } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        
        // Trigger mailto fallback for direct email client send
        const mailtoUrl = `mailto:aniketdede12@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message)}`;
        window.location.href = mailtoUrl;

        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => onClose(), 3500);
      } else {
        setStatus({ loading: false, success: false, error: data.error || "Failed to send message." });
      }
    } catch (err) {
      // Fallback directly to mailto
      const mailtoUrl = `mailto:aniketdede12@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message)}`;
      window.location.href = mailtoUrl;
      setStatus({ loading: false, success: true, error: null });
      setTimeout(() => onClose(), 3000);
    }
  };

  return (
    <div
      className="modal-overlay active"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div className="modal-content p-8 md:p-12 relative max-w-xl">
        <button
          id="close-contact-modal-btn"
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-colors font-bold text-xl flex items-center justify-center cursor-pointer"
        >
          &times;
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">[ Contact Aniket ]</span>
          <h3 className="text-3xl font-extrabold font-heading text-black">Send a Message</h3>
          <p className="text-zinc-600 text-sm mt-1">
            Fill out the form below or email directly at <strong className="text-black">aniketdede12@gmail.com</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Your Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:outline-none text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Your Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. rahul@company.com"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:outline-none text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Subject</label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Full-Stack Role / Project Inquiry"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:outline-none text-sm transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">Message *</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hello Aniket, I'd like to discuss an opportunity..."
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-black focus:outline-none text-sm transition-colors resize-none"
            />
          </div>

          {status.success && (
            <div className="p-4 rounded-xl text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              ✓ Thank you! Your message has been prepared and your email app is opening to send to aniketdede12@gmail.com.
            </div>
          )}

          {status.error && (
            <div className="p-4 rounded-xl text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
              ✕ {status.error}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3.5 bg-black text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors shadow cursor-pointer disabled:opacity-50"
            >
              {status.loading ? "Sending Message..." : "Send Message \u2192"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
