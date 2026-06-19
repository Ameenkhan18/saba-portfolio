"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]"
      />

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute bottom-[5%] right-[10%] h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[140px]"
      />

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 90%)",
        }}
      />
    </div>
  );
}