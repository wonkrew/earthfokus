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
      const panelCount = panels.length;
      
      // Reset any existing animations
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set(contentTrackRef.current, { clearProps: "all" });
      
      // Setup panel widths precisely
      const panelWidth = window.innerWidth;
      gsap.set(panels, { width: panelWidth });
      const totalWidth = panelWidth * (panelCount - 1);

      // Create horizontal scroll animation with improved settings
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center-=10 center",
          end: () => `+=${totalWidth}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.8,
          snap: {
            snapTo: 1 / (panelCount - 1),
            duration: 0.4,
            delay: 0,
            ease: "power1.inOut",
            inertia: false
          },
          markers: false,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active tab based on scroll position more precisely
            const rawProgress = self.progress;
            const adjustedProgress = Math.min(rawProgress * (panelCount - 0.95), panelCount - 1);
            const tabIndex = Math.round(adjustedProgress);
            
            // Only change if it's really a new tab to avoid flickering
            if (tabData[tabIndex]?.id && tabData[tabIndex].id !== activeTab) {
              setActiveTab(tabData[tabIndex].id);
            }
            
            // Visual feedback for active tab
            tabRefs.current.forEach((tabRef, i) => {
              if (tabRef) {
                if (i === tabIndex) {
                  gsap.to(tabRef, {
                    scale: 1.05,
                    color: "#000000",
                    fontWeight: 700,
                    duration: 0.2,
                    ease: "power1.out"
                  });
                } else {
                  gsap.to(tabRef, {
                    scale: 1,
                    color: "#666666",
                    fontWeight: 400,
                    duration: 0.2,
                    ease: "power1.out"
                  });
                }
              }
            });

            // Parallax and other visual effects for each panel
            Array.from(panels).forEach((panel, i) => {
              // Determine how "active" this panel is (1 = fully active, 0 = inactive)
              const panelActiveProgress = 1 - Math.min(Math.abs(i - adjustedProgress), 1);
              
              // Scale and opacity based on active status
              gsap.to(panel, {
                scale: 0.9 + (panelActiveProgress * 0.1),
                opacity: 0.5 + (panelActiveProgress * 0.5),
                duration: 0.3
              });
              
              // Parallax for image
              const img = panel.querySelector("img");
              if (img) {
                const panelProgress = (rawProgress * (panelCount - 1) - i);
                const parallaxValue = 30 * panelProgress;
                gsap.to(img, {
                  x: parallaxValue,
                  duration: 0.4,
                  ease: "none"
                });
              }
            });
          },
        },
      });
      
      // Smoother animation for panel scrolling
      tl.to(contentTrackRef.current, {
        x: () => -totalWidth,
        ease: "none",
        duration: 1
      });

      // Store the ScrollTrigger instance for external access
      tl.scrollTrigger.id = "tabScroll";
      
      // Ensure ScrollTrigger is properly refreshed when needed
      ScrollTrigger.refresh();
    }

    // Responsive handling with debounced resize function
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 250);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabData.length);
  }, []);
  
  // Function to handle tab click and precisely scroll to the corresponding panel
  const handleTabClick = (tabId, index) => {
    setActiveTab(tabId);
    
    const scrollInstance = ScrollTrigger.getById("tabScroll");
    if (scrollInstance) {
      // Calculate precise scroll point
      const progress = index / (tabData.length - 1);
      const targetScroll = scrollInstance.start + 
                           ((scrollInstance.end - scrollInstance.start) * progress);
      
      // Animate to the target position with custom easing
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => ScrollTrigger.refresh()
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="w-full sticky top-0 z-10 bg-white">
        <div className="max-w-7xl mx-auto bg-[#BCDAE4]">
          {/* Tab navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center px-2 sm:px-6 lg:px-8">
            {tabData.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                data-tab={tab.id}
                onClick={() => handleTabClick(tab.id, index)}
                className={`
                  py-2 sm:py-4 px-3 sm:px-6 text-sm sm:text-base font-medium w-full sm:flex-1 text-center
                  transition-all duration-300 ease-in-out relative
                  ${
                    activeTab === tab.id
                      ? "text-black font-semibold"
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
              className="min-w-full px-4 sm:px-6 lg:px-8 py-8 transition-all"
            >
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center px-2 sm:px-0">
                  <div className="order-2 md:order-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                      {tab.content.heading}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      {tab.content.description}
                    </p>
                  </div>
                  <div className="order-1 md:order-2 flex justify-center items-center bg-[#E9F7FF] rounded-3xl p-4 sm:p-6 shadow-md overflow-hidden w-full sm:w-[329px] h-[250px] sm:h-[356px] mx-auto">
                    <Image
                      src={tab.content.image}
                      alt={tab.content.heading}
                      width={226.29}
                      height={360}
                      className="object-contain w-auto h-auto max-h-full"
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
