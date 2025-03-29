"use client";

import Image from "next/image";

const OptimizationHero = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Raleway'] font-black text-[48px] leading-[100%] tracking-[0%] align-middle">
              Earth Fokused Optimization
            </h1>
            <p className="text-gray-700 mb-8 font-['Raleway'] font-normal text-[24px] leading-[50px] tracking-[0%] align-middle">
              We identify critical water usage points, integrate real-time
              monitoring, analyze trends with AI, send instant alerts for
              anomalies, and provide automated reports—ensuring maximum water
              efficiency and cost savings for your facility.
            </p>
          </div>

          {/* Right image */}
          <div className="flex-1 relative w-full max-w-lg">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/image 6.png"
                alt="Business professionals discussing optimization strategies"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationHero;
