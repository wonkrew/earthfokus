"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tabData = [
  {
    id: "tab1",
    title: "We understand your",
    content: {
      heading: "No instant access to live water data?",
      description:
        "Managing water efficiently requires constant monitoring, but traditional systems lack real-time insights. Without live data on flow, consumption, and quality, inefficiencies go unnoticed, leading to waste and higher costs.",
      image: "/image 3.png",
    },
  },
  {
    id: "tab2",
    title: "We understand your",
    content: {
      heading: "Difficulty tracking water usage?",
      description:
        "Without proper monitoring tools, tracking water consumption across multiple locations becomes nearly impossible, making it difficult to identify waste points and implement targeted solutions.",
      image: "/image 3.png",
    },
  },
  {
    id: "tab3",
    title: "We understand your",
    content: {
      heading: "Rising water utility costs?",
      description:
        "As water rates continue to increase, businesses without efficient monitoring and management systems face escalating operational costs that directly impact profitability and sustainability goals.",
      image: "/image 3.png",
    },
  },
  {
    id: "tab4",
    title: "We understand your",
    content: {
      heading: "Compliance and reporting concerns?",
      description:
        "Meeting regulatory requirements for water usage and wastage is challenging without accurate data collection and automated reporting systems that ensure timely compliance.",
      image: "/image 3.png",
    },
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const sectionRef = useRef(null);
  const contentTrackRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (contentTrackRef.current) {
      const panels = contentTrackRef.current.children;
      const totalWidth = Array.from(panels).reduce(
        (total, panel) => total + panel.offsetWidth,
        0
      );

      // Create horizontal scroll animation with improved settings
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center-=10 center",
          end: () => `+=${totalWidth}`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.3 },
            ease: "power2.out",
          },
          markers: false,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active tab based on scroll position
            const progress = self.progress;
            const tabIndex = Math.min(
              Math.floor(progress * tabData.length),
              tabData.length - 1
            );
            setActiveTab(tabData[tabIndex].id);
            
            // Add parallax effect to images
            Array.from(panels).forEach((panel, i) => {
              const img = panel.querySelector("img");
              if (img) {
                const panelProgress = (progress * (panels.length - 1) - i);
                const parallaxValue = 20 * panelProgress;
                gsap.to(img, {
                  x: parallaxValue,
                  duration: 0.5,
                  ease: "power1.out"
                });
              }
            });
          },
        },
      });
      
      tl.to(contentTrackRef.current, {
        x: () => -(totalWidth - panels[0].offsetWidth),
        ease: "power1.inOut",
      });

      // Make the scroll trigger ID available
      ScrollTrigger.getAll()[ScrollTrigger.getAll().length - 1].id = "tabScroll";
    }

    // Add window resize handler for better responsiveness
    const handleResize = () => {
      ScrollTrigger.refresh(true);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="w-full">
        <div className="max-w-7xl mx-auto bg-[#E5F1F6]">
          {/* Tab navigation */}
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                data-tab={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-4 px-6 text-base font-medium flex-1 text-center
                  transition-all duration-300 ease-in-out relative
                  ${
                    activeTab === tab.id
                      ? "text-gray-900 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content with horizontal scroll */}
      <div className="overflow-hidden">
        <div ref={contentTrackRef} className="flex">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`
                min-w-full px-4 sm:px-6 lg:px-8 py-16
                transition-all duration-500 ease-out
                ${activeTab === tab.id ? "opacity-100 scale-100" : "opacity-50 scale-95"}
              `}
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                      {tab.content.heading}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600">
                      {tab.content.description}
                    </p>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center items-center bg-[#F8FBFF] rounded-3xl p-8 overflow-hidden">
                    <Image
                      src={tab.content.image}
                      alt={tab.content.heading}
                      width={200}
                      height={200}
                      className="object-contain transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
