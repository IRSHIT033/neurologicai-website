import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ParallaxCards = ({
  idx,
  title,
  description,
}: {
  idx: number;
  title: string;
  description: string;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  return (
    <div className="sticky" ref={container}>
      <motion.div
        style={{ top: `calc(-5vh + ${idx * 25}px)` }}
        className="relative p-6 rounded-2xl bg-background shadow-lg border border-gray-700"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm text-white">{description}</p>
      </motion.div>
    </div>
  );
};

export default ParallaxCards;
