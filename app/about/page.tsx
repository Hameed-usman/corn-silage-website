import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
    title: "About Us — Our Story & Mission",
    description: "Learn how GreenValley Agri Exports became Pakistan's most trusted corn silage exporter. Our journey, farming partnerships, and commitment to global quality.",
    alternates: { canonical: `${SITE.url}/about` },
    openGraph: {
        title: "About GreenValley Agri Exports",
        description: "Pakistan's trusted corn silage exporter since 2016. ISO 22000 certified, 40+ global buyers.",
        url: `${SITE.url}/about`,
    },
};

export default function AboutPage() {
    return (
        <main className="pt-24" aria-labelledby="about-heading">
            {/* TODO: Build About page sections */}
            <section
                className="min-h-screen flex items-center justify-center"
                style={{ background: "#F5F0E8" }}
            >
                <div className="container text-center">
                    <span className="section-tag justify-center">Coming Soon</span>
                    <h1
                        id="about-heading"
                        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, color: "#1C1C1E" }}
                    >
                        About Us
                    </h1>
                    <p className="mt-4 mx-auto" style={{ fontSize: 18, color: "#6B7280", maxWidth: 500 }}>
                        Our story page is being built. Come back soon.
                    </p>
                </div>
            </section>
        </main>
    );
}