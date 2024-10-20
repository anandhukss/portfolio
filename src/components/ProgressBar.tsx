import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ callback }: { callback: () => void }) => {
  const [progress, setProgress] = useState(0);

  const getTooltipColor = useMemo(() => {
    if (progress < 50) return "#FF0000";
    if (progress < 95) return "#FFFF00";
    return "#00FF00";
  }, [progress]);

  useEffect(() => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1;
      setProgress(progressValue);
      if (progressValue >= 100) {
        localStorage.setItem("visited", "true");
        setTimeout(() => callback(), 500);
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className="mb-6"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: getTooltipColor,
          display: "flex",
        }}
      >
        <span>{progress < 95 ? "Please Wait" : "Completed"}</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1, 
          }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          .
        </motion.span>
      </div>

      <div
        className="bg-background shadow-2xl"
        style={{
          width: "50%",
          height: "10px",
          borderRadius: "8px",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="relative bg-foreground"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            height: "100%",
            borderRadius: "8px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background"
            style={{
              position: "absolute",
              right: "10px",
              top: "-30px",
              color: getTooltipColor,
              padding: "5px 10px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
