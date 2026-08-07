// src/components/TechFloat.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaAws } from "react-icons/fa";

const icons = [
  { Component: FaJava, label: "Java" },
  { Component: FaReact, label: "React" },
  { Component: FaNodeJs, label: "Node.js" },
  { Component: FaDatabase, label: "SQL" },
  { Component: FaAws, label: "AWS" },
];

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.6, 1, 0.6],
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
  },
};

const TechFloat: React.FC = () => {
  return (
    <div className="tech-float-container" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {icons.map((icon, idx) => (
        <motion.div
          key={idx}
          className="tech-icon"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: "2rem",
            color: "rgba(255,255,255,0.4)",
          }}
          variants={floatingVariants}
          animate="animate"
        >
          <icon.Component />
        </motion.div>
      ))}
    </div>
  );
};

export default TechFloat;
