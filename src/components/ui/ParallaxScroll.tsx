"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { StaticImageData } from "next/image";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: StaticImageData[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "hide-scrollbar h-full w-full items-start overflow-y-auto rounded-lg md:h-[50rem]",
        className,
      )}
      ref={gridRef}
    >
      <div
        className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3"
        ref={gridRef}
      >
        <div className="grid gap-5">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <a href={el.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={el}
                  className="h-70 !m-0 w-full gap-5 rounded-lg object-cover object-left-top !p-0 transition duration-500 hover:grayscale"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <a href={el.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={el}
                  className="h-70 !m-0 w-full gap-5 rounded-lg object-cover object-left-top !p-0 transition duration-500 hover:grayscale"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <a href={el.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={el}
                  className="h-70 !m-0 w-full gap-5 rounded-lg object-cover object-left-top !p-0 transition duration-500 hover:grayscale"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
