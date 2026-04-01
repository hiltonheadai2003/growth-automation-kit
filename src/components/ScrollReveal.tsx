import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "scale";
}

const ScrollReveal = ({ children, delay = 0, className = "", direction = "up" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const baseStyle = direction === "scale"
    ? { opacity: 0, transform: "scale(0.95)" }
    : { opacity: 0, transform: "translateY(30px)" };

  const visibleStyle = { opacity: 1, transform: direction === "scale" ? "scale(1)" : "translateY(0)" };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? visibleStyle : baseStyle),
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
