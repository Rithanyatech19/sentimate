import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "flat" | "glass" | "elevated";
  className?: string;
  hover?: boolean;
}

export function Card({ children, variant = "flat", className, hover = false }: CardProps) {
  const baseClasses = "rounded-2xl border transition-all duration-300";
  
  const variantClasses = {
    flat: "bg-card border-border",
    glass: "glass-card border-white/10",
    elevated: "glass-elevated border-white/10 shadow-md",
  };

  const hoverClasses = hover
    ? "hover:shadow-glow hover:-translate-y-1 cursor-pointer"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}
    >
      {children}
    </motion.div>
  );
}
