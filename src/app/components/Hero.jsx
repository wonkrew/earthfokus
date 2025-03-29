"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const brainRef = useRef(null);
  const arrowsRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create initial animations when component mounts
    const timeline = gsap.timeline();

    // Animate heading
    timeline.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animate side texts
    timeline.fromTo(
      [textLeftRef.current, textRightRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      "-=0.5"
    );

    // Animate brain image with scale effect
    timeline.fromTo(
      brainRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.8"
    );

    // Add subtle floating animation to brain image
    gsap.to(brainRef.current, {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate arrows with continuous animation
    gsap.to(arrowsRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Mouse sticky effect for brain image - keeping lighter than before
    const handleMouseMove = (e) => {
      if (!brainRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        brainRef.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Reduce the effect strength to be more subtle
      const deltaX = (clientX - centerX) / 50;
      const deltaY = (clientY - centerY) / 50;

      gsap.to(brainRef.current, {
        x: deltaX,
        y: deltaY + 5, // Add slight offset to maintain floating feel
        duration: 1.5,
        ease: "power2.out",
      });
    };

    // Add scroll animation for container
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        // Parallax effect when scrolling
        gsap.to(brainRef.current, {
          y: self.progress * 70, // Reduced from 100 to make subtler
          duration: 0.5,
          ease: "none",
        });
      },
    });

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white overflow-hidden min-h-[90vh] flex flex-col justify-center py-4 sm:py-8"
    >
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto mt-8 sm:mt-14 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Welcome Text */}
        <h1
          ref={headingRef}
          className="text-[24px] sm:text-[28px] md:text-[32px] text-center mt-8 sm:mt-14 font-normal text-gray-800 mb-8 md:mb-16 font-raleway"
        >
          Welcome to the EarthFokus
        </h1>

        {/* Brain Image and Side Text */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 sm:mb-20">
          {/* Left Side Text */}
          <div
            ref={textLeftRef}
            className="w-full md:w-3/5 text-center md:text-right mb-6 md:mb-0 md:pr-4"
          >
            <div className="flex flex-col items-center md:items-end">
              <p className="font-raleway font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-[110%] tracking-[0%] text-gray-600">
                Smart
              </p>
              <h2 className="font-raleway font-bold text-[30px] sm:text-[36px] md:text-[42px] leading-[110%] tracking-[0%] text-gray-900">
                Water Use
              </h2>
            </div>
          </div>

          {/* Brain Image */}
          <div className="w-full md:w-4/5 relative flex justify-center">
            <div
              ref={brainRef}
              className="transform transition-transform w-full max-w-[300px] sm:max-w-[450px] md:max-w-[664px] h-auto sm:h-[250px] md:h-[362px] scale-x-[-1]"
            >
              <Image
                src="/Earthfokus brain 1 (3).png"
                alt="Water Brain"
                width={664}
                height={362}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side Text */}
          <div
            ref={textRightRef}
            className="w-full md:w-3/5 text-center md:text-left mt-6 md:mt-0 md:pl-4"
          >
            <div className="flex flex-col items-center md:items-start">
              <p className="font-raleway font-normal text-[24px] sm:text-[28px] md:text-[32px] leading-[110%] tracking-[0%] text-gray-600">
                Starts
              </p>
              <h2 className="font-raleway font-bold text-[30px] sm:text-[36px] md:text-[42px] leading-[110%] tracking-[0%] text-gray-900">
                With You
              </h2>
            </div>
          </div>
        </div>

        {/* Down Arrows */}
        <div ref={arrowsRef} className="flex justify-center mt-4 sm:mt-8">
          <div className="flex flex-col items-center">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 -mt-1 sm:-mt-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
