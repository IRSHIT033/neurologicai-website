"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const stats = [
  { value: 13, label: "Clients", suffix: "+" },
  { value: 50, label: "Projects Done", suffix: "+" },
  { value: 10, label: "Ongoing Projects", suffix: "+" },
  { value: 300, label: "YoY Revenue Growth", suffix: "%" },
];

export default function CounterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="  py-16 text-center text-white">
      <div className="max-w-7xl text-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-2xl mt-3 bg-gradient-to-r from-blue from-0% to-primary via-70%   bg-clip-text text-transparent">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1500; // 1.5 seconds
      const stepTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <h2
      ref={ref}
      className="text-4xl mt-20 flex justify-center items-center tracking-wider text-white font-bold"
    >
      {count}
      <span className="ml-1 text-2xl">{suffix}</span>
    </h2>
  );
}
