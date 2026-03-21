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

      <div className="absolute z-10 text-center text-white top-16 flex flex-col items-center gap-6 px-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight px-6 py-2" style={{ textShadow: "0 0 15px rgba(0,0,0,0.3)", backdropFilter: "blur(2px)", background: "rgba(0,0,0,0.08)", borderRadius: "32px" }}>
          ТИМУР
        </h1>
        <p className="md:text-lg leading-relaxed px-5 py-4 text-xs" style={{ textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5)" }}>
          Сегодня нам исполняется пол года, и все это время — я провел, будучи искренне счастливым, благодаря тебе.
          <br /><br />
          Возможно, такие даты для тебя мало значат, но даже так, я бы хотел сделать тебе небольшой подарок в честь этого дня, который ты сможешь открыть в любое удобное тебе время.
        </p>
      </div>

      {/* Стрелка вниз в правом нижнем углу */}
      <img
        src="https://cdn.poehali.dev/projects/2263574c-92f1-40e2-9a2f-c3b4cc031d93/bucket/43400cb8-9338-445f-b915-6765d8a2f7bb.jpg"
        alt=""
        className="absolute bottom-6 right-6 w-16 h-16 object-contain opacity-80 z-20"
        style={{ transform: "rotate(20deg)" }}
      />
    </div>
  );
}
