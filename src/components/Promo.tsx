import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/35d3a6cc-66cf-4e7f-9df4-151ac1f0889d.jpg"
            alt="Cats pattern"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[min(85vw,420px)] pointer-events-none">
        <img
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/bf2bc29d-59fb-45be-9e7b-fe2e18cd1c50.png"
          alt="Коллаж"
          className="w-full h-auto drop-shadow-2xl"
        />
      </div>


    </div>
  );
}