"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="overflow-hidden">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          >
            {/* Left side - Problem heading */}
            <motion.div
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
                We understand your
                <div className="text-3xl sm:text-4xl md:text-6xl font-black mt-2">
                  Problem
                </div>
              </h2>
            </motion.div>

            {/* Right side - Description */}
            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full md:w-1/2"
            >
              <p className="font-[Raleway] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal leading-normal md:leading-relaxed lg:leading-[50px] tracking-[0%] text-gray-600">
                Businesses la face panna water management problems, wastage, inefficient systems, and lack of real-time monitoring. Idhu sustainability goals ah affect pannum and operational costs ah increase pannum.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
