import { delayFn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const TypeWriterText = ({
  text,
  speed = 50,
  callback,
  delay,
}: {
  text: string;
  speed: number;
  callback: () => void;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const animateText = async () => {
      await delayFn(delay || 0); // Add delay before starting the typing effect
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          callback();
          clearInterval(typingInterval);
        }
      }, speed);
      return () => {
        clearInterval(typingInterval);
      };
    };

    animateText();
  }, [text, speed]);

  return <span>{displayText}</span>;
};
