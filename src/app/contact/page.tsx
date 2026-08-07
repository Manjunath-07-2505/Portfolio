"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact, social } from "@/app/resources/content";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
      // Standard EmailJS variable names
      name: formData.name,
      email: formData.email,
      // Alternative variable names (some templates use these)
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: contact.info.email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const infoCards = [
    {
      icon: "📧",
      label: "Email",
      value: contact.info.email,
      href: `mailto:${contact.info.email}`,
    },
    {
      icon: "📱",
      label: "Phone",
      value: contact.info.phone,
      href: `tel:${contact.info.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "📍",
      label: "Location",
      value: contact.info.location,
      href: null,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: contact.info.linkedin,
      href: `https://${contact.info.linkedin}`,
    },
  ];

  const socialIcons: Record<string, string> = {
    github: "🐙",
    linkedin: "💼",
    email: "✉️",
  };

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}>{contact.title}</h1>
        <p className={styles.headerDescription}>{contact.description}</p>
      </div>

      {/* Two-column grid */}
      <div className={styles.contactGrid}>
        {/* Left: Info Cards */}
        <div className={styles.infoColumn}>
          {infoCards.map((card) =>
            card.href ? (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.infoCard} ${styles.infoCardClickable}`}
              >
                <div className={styles.infoCardIcon}>{card.icon}</div>
                <div className={styles.infoCardContent}>
                  <span className={styles.infoCardLabel}>{card.label}</span>
                  <span className={styles.infoCardValue}>{card.value}</span>
                </div>
              </a>
            ) : (
              <div key={card.label} className={styles.infoCard}>
                <div className={styles.infoCardIcon}>{card.icon}</div>
                <div className={styles.infoCardContent}>
                  <span className={styles.infoCardLabel}>{card.label}</span>
                  <span className={styles.infoCardValue}>{card.value}</span>
                </div>
              </div>
            )
          )}

          {/* Social Links */}
          <div className={styles.socialSection}>
            <div className={styles.socialLabel}>Connect with me</div>
            <div className={styles.socialLinks}>
              {social.map((item) =>
                item.link ? (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={item.name}
                  >
                    {socialIcons[item.icon] || "🔗"}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send me a message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    className={styles.formInput}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    className={styles.formInput}
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  className={styles.formInput}
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className={styles.formTextarea}
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message ✨"}
              </button>

              {status === "success" && (
                <div className={styles.successMessage}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className={styles.errorMessage}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className={styles.bottomCTA}>
        <p className={styles.bottomCTAText}>
          Prefer a quick chat? Feel free to reach out on{" "}
          <a
            href={`https://${contact.info.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomCTAHighlight}
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>{" "}
          or drop an email at{" "}
          <a
            href={`mailto:${contact.info.email}`}
            className={styles.bottomCTAHighlight}
            style={{ textDecoration: "none" }}
          >
            {contact.info.email}
          </a>
        </p>
      </div>
    </div>
  );
}
