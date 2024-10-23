"use client";
import HomeScreen from "@/components/Home";
import ProgressBar from "@/components/ui/ProgressBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    setProgress(!!localStorage.getItem("visited"));
  });

  return (
    <>
      {progress && <HomeScreen />}
      {!progress && (
        <ProgressBar
          callback={() => setProgress(!!localStorage.getItem("visited"))}
        />
      )}
    </>
  );
}
