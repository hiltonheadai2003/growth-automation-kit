import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const lerp = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setPos({ x: currentX, y: currentY });
      requestAnimationFrame(lerp);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    const raf = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(raf);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div
        className="rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
        style={{
          width: isHovering ? 120 : 24,
          height: isHovering ? 120 : 24,
          backgroundColor: isHovering ? "transparent" : "hsl(var(--primary))",
          border: isHovering ? "2px solid hsl(var(--primary))" : "none",
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      />
    </div>
  );
};

export default CustomCursor;
