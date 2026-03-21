import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Stamp from "@/components/Stamp";

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

      {/* Марки поверх котиков */}
      <div className="absolute top-6 right-6 z-20 flex gap-3">
        <Stamp
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/a370af8d-2d8f-4b00-9d69-14743e13253d.jpg"
          label="LOVE"
          year="2025"
          size="sm"
          rotate={-6}
        />
        <Stamp
          src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/a370af8d-2d8f-4b00-9d69-14743e13253d.jpg"
          label="POSTES"
          year="2025"
          size="md"
          rotate={4}
        />
      </div>
    </div>
  );
}
