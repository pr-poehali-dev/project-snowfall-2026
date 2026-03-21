import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/9411136d-310d-4fb3-b43f-74ceb76c40d7.png"
          alt="Самый милый мальчик на свете"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute z-10 text-center text-white top-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight px-6 py-2" style={{ textShadow: "0 0 15px rgba(0,0,0,0.3)", backdropFilter: "blur(2px)", background: "rgba(0,0,0,0.08)", borderRadius: "32px" }}>
          ТИМУР
        </h1>
      </div>
    </div>
  );
}