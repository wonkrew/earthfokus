"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Solution = () => {
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
    <section className="py-16 md:py-24 bg-white">
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
            className="flex flex-col md:flex-row items-center justify-between gap-12"
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
              className="md:w-1/2 w-full mb-6 md:mb-0"
            >
              <h2 className="font-[Raleway] text-[28px] md:text-[40px] font-medium leading-[100%] tracking-[0%] align-middle text-gray-900">
                Fokused Water Management
              </h2>
              <div className="font-[Raleway] text-[48px] md:text-[64px] font-black leading-[100%] text-gray-900 tracking-[0%] align-middle mt-2">
                Solution
              </div>
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
              className="md:w-1/2 w-full"
            >
              <p className="font-[Raleway] text-[20px] md:text-[32px] font-normal leading-normal md:leading-[50px] tracking-[0%] align-middle text-gray-600">
                Businesses la face panna water management problems, wastage,
                inefficient systems, and lack of real-time monitoring. Idhu
                sustainability goals ah affect pannum and operational costs ah
                increase pannum.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
