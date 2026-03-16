import type { Metadata } from "next";
import { SITE, CERTIFICATIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Our Certifications — ISO 22000, Halal & PSQCA",
    description: "GreenValley Agri Exports holds ISO 22000:2018, Halal, and PSQCA certifications. View our full certification documentation and quality assurance standards.",
    alternates: { canonical: `${SITE.url}/certificates` },
};

export default function CertificatesPage() {
    return (
        <main className="pt-24" aria-labelledby="certs-heading">
            <section className="min-h-screen" style={{ background: "#F5F0E8", padding: "80px 0" }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="section-tag justify-center">Trust & Compliance</span>
                        <h1 id="certs-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: "#1C1C1E" }}>
                            Our Certifications
                        </h1>
                        <p className="mt-4 mx-auto" style={{ fontSize: 17, color: "#6B7280", maxWidth: 500 }}>
                            Every export backed by internationally recognised quality certifications.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {CERTIFICATIONS.map((cert) => (
                            <div key={cert.short} className="bg-white rounded-2xl p-8 text-center border border-[rgba(26,77,46,0.08)] hover:-translate-y-1.5 transition-transform">
                                <div className="text-5xl mb-4">{cert.icon}</div>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#1A4D2E" }}>{cert.short}</div>
                                <div className="mt-1" style={{ fontSize: 13, color: "#6B7280" }}>{cert.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}