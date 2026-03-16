import type { Metadata } from "next";
import { SITE, COUNTRIES_SERVED } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Countries We Export To — 15+ Global Markets",
    description: "GreenValley exports premium corn silage to Saudi Arabia, UAE, Qatar, Germany, Netherlands, China, Bangladesh, and more. Explore all our export destinations.",
    alternates: { canonical: `${SITE.url}/countries` },
};

export default function CountriesPage() {
    return (
        <main className="pt-24" aria-labelledby="countries-page-heading">
            <section className="min-h-screen" style={{ background: "#F5F0E8", padding: "80px 0" }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <span className="section-tag justify-center">Global Reach</span>
                        <h1 id="countries-page-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: "#1C1C1E" }}>
                            Countries We Serve
                        </h1>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {COUNTRIES_SERVED.map((c) => (
                            <div key={c.name} className="bg-white rounded-xl p-5 text-center border border-[rgba(26,77,46,0.07)] hover:-translate-y-1 transition-transform">
                                <span className="text-4xl block mb-2" role="img" aria-label={`Flag of ${c.name}`}>{c.flag}</span>
                                <div className="font-semibold text-sm" style={{ color: "#1C1C1E" }}>{c.name}</div>
                                <div className="text-[10px] font-medium uppercase tracking-wider mt-1" style={{ color: "#9ca3af" }}>{c.region}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}