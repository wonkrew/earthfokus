"use client";

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ContentSection2 = () => {
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section */}
        <div ref={ref} className="overflow-hidden mb-20">
          <motion.div
            variants={{
              hidden: { opacity: 0.5 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
              Smart Water Management Solutions
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative technology helps you monitor and optimize water usage across your facilities, 
              reducing waste and saving money.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">Real-Time Monitoring</h3>
              <p className="text-gray-600">Get instant alerts about leaks, unusual consumption patterns, and potential issues.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">Data Analytics</h3>
              <p className="text-gray-600">Gain valuable insights with advanced analytics and reporting tools.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-600">Automated Control</h3>
              <p className="text-gray-600">Automate water systems for optimal efficiency and reduced human error.</p>
            </motion.div>
          </div>
        </div>

        {/* Second Section */}
        <div className="overflow-hidden">
          <motion.div
            variants={{
              hidden: { opacity: 0.5 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <motion.div 
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Earth Fokus?
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Reduce water consumption by up to 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Lower maintenance costs through predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>Easy integration with existing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>24/7 support from our expert team</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:w-1/2 bg-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Proven Results</h3>
              <p className="text-gray-600 mb-6">
                Our clients have achieved significant improvements in water efficiency and cost savings. 
                Join them in building a more sustainable future while improving your bottom line.
              </p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Request a Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection2; 