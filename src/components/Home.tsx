"use client";

import React, { useState } from "react";
import { BackgroundBeamsWithCollision } from "./ui/beams";
import Image from "next/image";
import { motion } from "framer-motion";
import { intro } from "@/lib/data";
import { TypeWriterText } from "./ui/TypeWritterComponent";
import ScrambledText from "./ui/ScrambledText";
import BorderButton from "./ui/BorderButton";

const HomeScreen = () => {
  const [animations, setAnimations] = useState({
    name: false,
    title: false,
    scramble: false,
    image: false,
  });

  return (
    <BackgroundBeamsWithCollision>
      <div className="h-screen ">
        <div className="flex justify-between">
          <div className="p-20 relative w-full h-screen">
            {/* Name section */}
            <h1 className="text-7xl font-bold text-foreground">
              <TypeWriterText
                speed={100}
                delay={500}
                text="Anandhu KS"
                callback={() => {
                  setAnimations((prev) => ({
                    ...prev,
                    name: true,
                  }));
                }}
              />
              {!animations.name && (
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.3 }}
                  style={{ marginLeft: "5px" }}
                >
                  |
                </motion.span>
              )}
            </h1>

            {/* Title Section */}
            {animations.name && (
              <div className="mt-6">
                {" "}
                <p className="text-5xl text-accent">
                  <TypeWriterText
                    speed={100}
                    delay={500}
                    text="Frontend Engineer"
                    callback={() => {
                      setAnimations((prev) => ({
                        ...prev,
                        title: true,
                      }));
                    }}
                  />
                  {!animations.title && (
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.3 }}
                      style={{ marginLeft: "5px" }}
                    >
                      |
                    </motion.span>
                  )}
                </p>
              </div>
            )}

            {/* Intro description section */}
            {animations.image && (
              <p className="text-foreground mt-20 max-w-[50%] overflow-hidden">
                <ScrambledText
                  text={intro}
                  duration={2000}
                  callback={() => {
                    setAnimations((prev) => ({
                      ...prev,
                      scramble: true,
                    }));
                  }}
                />
              </p>
            )}

            {
              animations.scramble && <div className="bottom-20 absolute flex gap-x-10">
                <motion.div
                  initial={{ opacity: 0, y: -40 }} // Start above
                  animate={{ opacity: 1, y: 0 }}    // Move to original position
                  transition={{ duration: 0.5 }}
                >
                  <BorderButton className="text-amber-400"
                  >View My Work</BorderButton>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }} // Start below
                  animate={{ opacity: 1, y: 0 }}    // Move to original position
                  transition={{ duration: 0.5 }}
                >
                  <BorderButton className="text-teal-50"
                  >Contact Me</BorderButton>
                </motion.div>
              </div>
            }
          </div>

          {/* Image section */}
          {animations.title && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute right-0 "
              onAnimationComplete={() => {
                setTimeout(() => {
                  setAnimations((prev) => ({
                    ...prev,
                    image: true,
                  }));
                }, 300);
              }}
            >
              <Image
                src="/assets/home.webp"
                alt=""
                width="600"
                height="400"
                style={{
                  height: "100vh",
                  width: "auto",
                  objectFit: "cover",
                }}
              ></Image>
            </motion.div>
          )}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HomeScreen;
