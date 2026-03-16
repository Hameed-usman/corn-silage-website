import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Export Process — From Farm to Port",
    description: "Step-by-step guide to our corn silage export process. Inquiry, QC, packaging, phytosanitary documentation, and FOB/CIF shipping from Karachi Port.",
    alternates: { canonical: `${SITE.url}/export-process` },
};

export default function ExportProcessPage() {
    return (
        <main className="pt-24" aria-labelledby="process-heading">
            <section className="min-h-screen flex items-center justify-center" style={{ background: "#1A4D2E" }}>
                <div className="container text-center">
                    <span className="section-tag light justify-center">Coming Soon</span>
                    <h1 id="process-heading" className="text-white" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 700 }}>
                        Export Process
                    </h1>
                    <p className="mt-4 mx-auto" style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 500 }}>
                        Our detailed export process page is being built.
                    </p>
                </div>
            </section>
        </main>
    );
}