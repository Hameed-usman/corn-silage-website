import type { Metadata } from "next";
import { SITE, CONTACT } from "@/lib/constants";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us — Request a Quote",
    description: "Get in touch with GreenValley Agri Exports to request a corn silage quote, ask about export logistics, or discuss bulk pricing. We respond within 24 hours.",
    alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
    return (
        <main className="pt-24" aria-labelledby="contact-heading">
            <section style={{ background: "#F5F0E8", padding: "80px 0", minHeight: "100vh" }}>
                <div className="container">
                    <div className="text-center mb-14">
                        <span className="section-tag justify-center">Get In Touch</span>
                        <h1 id="contact-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: "#1C1C1E" }}>
                            Request a Quote
                        </h1>
                        <p className="mt-4 mx-auto" style={{ fontSize: 17, color: "#6B7280", maxWidth: 480 }}>
                            Tell us your requirements and we&apos;ll get back within 24 hours with pricing and availability.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact info */}
                        <div>
                            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "#1C1C1E", marginBottom: 24 }}>
                                Contact Details
                            </h2>
                            <ul className="space-y-5">
                                {[
                                    { Icon: Phone, text: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}`, label: "Phone" },
                                    { Icon: Mail, text: CONTACT.email, href: `mailto:${CONTACT.email}`, label: "Email" },
                                    { Icon: MessageCircle, text: "WhatsApp Us", href: CONTACT.whatsapp, label: "WhatsApp", external: true },
                                    { Icon: MapPin, text: CONTACT.address.full, href: undefined, label: "Address" },
                                ].map(({ Icon, text, href, label, external }) => (
                                    <li key={label} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(26,77,46,0.08)" }}>
                                            <Icon size={18} style={{ color: "#1A4D2E" }} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af" }}>{label}</div>
                                            {href ? (
                                                <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                                                    style={{ fontSize: 15, color: "#1A4D2E", fontWeight: 500 }} className="hover:underline">
                                                    {text}
                                                </a>
                                            ) : (
                                                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{text}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quote form placeholder */}
                        <div className="bg-white rounded-2xl p-8 border border-[rgba(26,77,46,0.08)]">
                            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: "#1C1C1E", marginBottom: 20 }}>
                                Send an Inquiry
                            </h2>
                            <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 24 }}>
                                Fill out the form below and our export team will contact you within 24 hours.
                            </p>
                            {/* TODO: Wire up react-hook-form + email API route */}
                            <div className="space-y-4">
                                {[
                                    { label: "Full Name", placeholder: "Your full name", type: "text" },
                                    { label: "Company Name", placeholder: "Your company", type: "text" },
                                    { label: "Email Address", placeholder: "you@company.com", type: "email" },
                                    { label: "Phone / WhatsApp", placeholder: "+1 234 567 8900", type: "tel" },
                                    { label: "Quantity Required", placeholder: "e.g. 50 MT", type: "text" },
                                    { label: "Destination Port", placeholder: "e.g. Jebel Ali, Dubai", type: "text" },
                                ].map((field) => (
                                    <div key={field.label}>
                                        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#6B7280" }}>
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:border-[#2D7A4F] transition-colors"
                                            style={{ borderColor: "rgba(26,77,46,0.15)", color: "#1C1C1E" }}
                                        />
                                    </div>
                                ))}
                                <textarea
                                    placeholder="Any additional requirements, timeline, or questions..."
                                    rows={4}
                                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:border-[#2D7A4F] transition-colors resize-none"
                                    style={{ borderColor: "rgba(26,77,46,0.15)", color: "#1C1C1E" }}
                                />
                                <button
                                    type="button"
                                    className="w-full font-bold rounded-xl py-4 text-sm transition-all hover:-translate-y-0.5"
                                    style={{ background: "#C8973A", color: "#1A4D2E", boxShadow: "0 4px 20px rgba(200,151,58,0.4)" }}
                                >
                                    Send Inquiry →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}