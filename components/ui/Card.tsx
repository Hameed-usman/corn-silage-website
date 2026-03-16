import { cn } from "@/lib/utils";

interface CardProps {
  children:   React.ReactNode;
  className?: string;
  hover?:     boolean;
  as?:        "div" | "article" | "section";
}

export default function Card({ children, className, hover = true, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl bg-white border border-[rgba(26,77,46,0.08)] p-8",
        hover && "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(26,77,46,0.12)] hover:border-[rgba(26,77,46,0.18)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* ── Cream variant ── */
export function CreamCard({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-8",
        "bg-[#F5F0E8] border-transparent",
        hover && "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(26,77,46,0.1)] hover:border-[rgba(200,151,58,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ── Dark (forest) variant ── */
export function DarkCard({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-8",
        "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]",
        hover && "transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}