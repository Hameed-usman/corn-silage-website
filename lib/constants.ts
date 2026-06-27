// ─────────────────────────────────────────────────────────────
// SITE-WIDE CONSTANTS
// Update once here → updates everywhere across the site
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "GreenValley Agri Exports",
  shortName: "GreenValley",
  tagline: "Premium Corn Silage from Pakistan",
  description: "GreenValley Agri Exports is a premium corn silage supplier from Pakistan, delivering lab-tested quality and full traceability to global buyers.",
  url: "https://greenvalley-agri.pk",
  founded: 2016,
  logo: "/images/logo.svg",
  ogImage: "/images/og-image.jpg",
} as const;

export const CONTACT = {
  phone: "+92 300 123 4567",
  phoneRaw: "+923001234567",
  email: "exports@greenvalley.pk",
  whatsapp: "https://wa.me/923001234567",
  address: {
    street: "Plot 14, Industrial Zone",
    city: "Faisalabad",
    province: "Punjab",
    country: "Pakistan",
    full: "Plot 14, Industrial Zone, Faisalabad, Punjab, Pakistan",
  },
} as const;

export const STATS = {
  countries: "15+",
  buyers: "40+",
  capacityMT: "500+",
  onTimeRate: "98.4%",
  yearsActive: "8+",
  exportingSince: 2016,
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },

] as const;

export const CERTIFICATIONS = [
  { name: "Halal Certified", short: "Halal", icon: "🌿" },
  { name: "PSQCA Approved", short: "PSQCA", icon: "✅" },
] as const;

export const PRODUCT_SPECS = [
  { label: "Moisture Content", value: "65–70", unit: "%", pct: 68 },
  { label: "Crude Protein", value: "8.5", unit: "%", pct: 55 },
  { label: "Metabolisable Energy", value: "10.2", unit: "MJ/kg", pct: 78 },
  { label: "Fermentation pH", value: "3.8", unit: "", pct: 38 },
  { label: "Dry Matter", value: "38", unit: "%", pct: 38 },
  { label: "NDF Fibre", value: "42", unit: "%", pct: 42 },
] as const;

export const WHY_US = [
  {
    icon: "FlaskConical",
    title: "Lab-Tested Quality",
    body: "Every batch undergoes third-party nutritional analysis before dispatch. Full COA provided with each shipment.",
  },
  {
    icon: "Link",
    title: "Full Traceability",
    body: "Farm-to-port documentation. Know exactly which fields your silage came from, harvest dates, and storage conditions.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Competitive Pricing",
    body: "Direct farmer relationships — no middlemen. Better margins for you with flexible MOQs starting from 20MT.",
  },
  {
    icon: "Clock",
    title: "On-Time Delivery",
    body: "98.4% on-time rate across all markets. Real-time container tracking and a dedicated account manager per buyer.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "ClipboardList",
    title: "Send Your Inquiry",
    body: "Share quantity, destination port, and timeline. We respond within 24 hours with pricing and availability.",
  },
  {
    step: "02",
    icon: "PackageCheck",
    title: "Packaging & QC",
    body: "Silage is harvested, fermented to optimal pH, and vacuum-sealed. Lab reports and phytosanitary certificates prepared.",
  },
  {
    step: "03",
    icon: "Ship",
    title: "Shipment & Delivery",
    body: "FOB/CIF from Karachi Port. Real-time tracking. Full documentation delivered electronically before vessel arrival.",
  },
] as const;

export const COUNTRIES_SERVED = [
  { name: "Saudi Arabia", flag: "🇸🇦", region: "Middle East" },
  { name: "UAE", flag: "🇦🇪", region: "Middle East" },
  { name: "Qatar", flag: "🇶🇦", region: "Middle East" },
  { name: "Kuwait", flag: "🇰🇼", region: "Middle East" },
  { name: "Germany", flag: "🇩🇪", region: "Europe" },
  { name: "Netherlands", flag: "🇳🇱", region: "Europe" },
  { name: "China", flag: "🇨🇳", region: "East Asia" },
  { name: "Bangladesh", flag: "🇧🇩", region: "South Asia" },
  { name: "Malaysia", flag: "🇲🇾", region: "SE Asia" },
  { name: "Oman", flag: "🇴🇲", region: "Middle East" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "GreenValley consistently delivers the most reliable nutritional profile we've seen from any Asian supplier. Our dairy herd productivity improved 12% in the first quarter after switching.",
    name: "Ahmad Al-Rashidi",
    role: "Head of Procurement",
    company: "Al Rawabi Dairy Co.",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    rating: 5,
  },
  {
    quote: "Every shipment arrives with a complete COA, phytosanitary certificate, and moisture report. For EU import compliance, this level of paperwork discipline is genuinely rare.",
    name: "Klaus Müller",
    role: "Livestock Feed Importer",
    company: "MüllerAg GmbH",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
  },
  {
    quote: "Competitive pricing, transparent communication, and zero delays across 3 years. Their team responds within hours — rare to find this service quality in commodity exports.",
    name: "Wang Jianhua",
    role: "Import Director",
    company: "Xinhua Agri Trading Ltd.",
    country: "China",
    flag: "🇨🇳",
    rating: 5,
  },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
] as const;

