import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-semibold rounded-full uppercase tracking-widest",
  {
    variants: {
      variant: {
        gold: "bg-[rgba(200,151,58,0.12)] border border-[rgba(200,151,58,0.25)] text-[#e8b84b]",
        forest: "bg-[rgba(26,77,46,0.08)] border border-[rgba(26,77,46,0.15)] text-[#2D7A4F]",
        white: "bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white",
        cream: "bg-[#EDE6D8] border border-[rgba(26,77,46,0.1)] text-[#1A4D2E]",
      },
      size: {
        sm: "text-[10px] px-3 py-1",
        md: "text-[11px] px-4 py-1.5",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  }
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children:   React.ReactNode;
  className?: string;
  dot?:       boolean;
}

export default function Badge({ children, variant, size, className, dot }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "currentColor", opacity: 0.8 }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}