import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Corn Silage Product Specifications",
    description: "Full nutritional datasheet for our premium corn silage. Moisture 65–70%, crude protein 8.5%, metabolisable energy 10.2 MJ/kg. ISO 22000 certified batch testing.",
    alternates: { canonical: `${SITE.url}/product` },
    openGraph: { title: "Corn Silage Specs — GreenValley", url: `${SITE.url}/product` },
};

export default function ProductPage() {
    return (
        <main className="pt-24" aria-labelledby="product-page-heading">
            <section className="min-h-screen flex items-center justify-center" style={{ background: "#F5F0E8" }}>
                <div className="container text-center">
                    <span className="section-tag justify-center">Coming Soon</span>
                    <h1 id="product-page-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: "#1C1C1E" }}>
                        Product Specifications
                    </h1>
                    <p className="mt-4 mx-auto" style={{ fontSize: 18, color: "#6B7280", maxWidth: 500 }}>
                        Full product datasheet page is being built.
                    </p>
                </div>
            </section>
        </main>
    );
}