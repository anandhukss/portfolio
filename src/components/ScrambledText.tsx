import { useState, useEffect } from "react";

const ScrambledText = ({
  text,
  duration,
  callback,
}: {
  text: string;
  duration: number;
  callback: () => void;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [scrambled, setScrambled] = useState(true);

  useEffect(() => {
    if (scrambled) {
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char) =>
              Math.random() > 0.5
                ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
                : char
            )
            .join("")
        );
      }, 100);
      setTimeout(() => {
        callback();
        clearInterval(interval);
        setDisplayText(text);
        setScrambled(false);
      }, duration);
    }
  }, [scrambled, duration, text]);

  return <span>{displayText}</span>;
};

export default ScrambledText;
