import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveImage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    // Relative position to center, max ±20px
    const x = ((clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 40;

    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full flex justify-center items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src="https://i.ibb.co/GfFFTJzH/unnamed.png"
        alt="Dashboard Illustration"
        className="w-80 md:w-96 aspect-square rounded-xl drop-shadow-xl"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
      />
    </div>
  );
}
