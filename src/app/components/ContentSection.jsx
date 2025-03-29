"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContentSection = () => {
  const containerRef = useRef(null);
  const [chars, setChars] = useState([]);
  const text =
    "Every drop wasted is money down the drain. Higher utility bills, operational inefficiencies, and an unsustainable future, this is the reality of unchecked water consumption.";

  useEffect(() => {
    // Split text into individual characters
    setChars(text.split(""));
  }, []);

  useEffect(() => {
    if (!chars.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const charElements = containerRef.current.querySelectorAll(".char");

    gsap.set(charElements, {
      opacity: 0.3,
      y: 15,
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.4)",
    });

    gsap.to(charElements, {
      opacity: 1,
      y: 0,
      fontWeight: 500,
      color: "rgba(0, 0, 0, 0.9)",
      duration: 0.6,
      stagger: 0.015,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 30%",
        scrub: 0.3,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [chars]);

  return (
    <div className="flex justify-center items-center py-8 sm:py-10 md:py-12 px-3 sm:px-6 md:px-8">
      <p
        ref={containerRef}
        className="text-center max-w-5xl mx-auto font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug tracking-normal align-middle"
      >
        {chars.map((char, index) => (
          <span key={index} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ContentSection;
