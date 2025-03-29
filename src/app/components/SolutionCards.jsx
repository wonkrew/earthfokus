"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Healthcare",
    description:
      "Reduce water wastage in hospitals with real-time monitoring, optimizing consumption for cost-effective operations.",
  },
  {
    title: "Education",
    description:
      "Prevent excessive water consumption in schools with automated tracking, promoting sustainability and cost savings.",
  },
  {
    title: "Apartments",
    description:
      "Minimize water waste in apartments with real-time monitoring, ensuring efficient usage and lower utility bills.",
  },
  {
    title: "Commercial",
    description:
      "Monitor and reduce water usage in commercial buildings with smart tracking solutions.",
  },
  {
    title: "Industries",
    description:
      "Optimize water consumption in manufacturing and industrial processes with advanced monitoring systems.",
  },
  {
    title: "Healthcare",
    description:
      "Reduce water wastage in hospitals with real-time monitoring, optimizing consumption for cost-effective operations.",
  },
  {
    title: "Education",
    description:
      "Prevent excessive water consumption in schools with automated tracking, promoting sustainability and cost savings.",
  },
  {
    title: "Apartments",
    description:
      "Minimize water waste in apartments with real-time monitoring, ensuring efficient usage and lower utility bills.",
  },
  {
    title: "Commercial",
    description:
      "Monitor and reduce water usage in commercial buildings with smart tracking solutions.",
  },
  {
    title: "Industries",
    description:
      "Optimize water consumption in manufacturing and industrial processes with advanced monitoring systems.",
  },
];

const SolutionCards = () => {
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const autoScrollIntervalRef = useRef(null);

  // Set up max scroll width on component mount and window resize
  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollContainerRef.current) {
        setMaxScroll(
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.clientWidth
        );
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);

    return () => {
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, []);

  // Handle automatic scrolling
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          const cardWidth = 422;
          const cardGap = 24;
          const scrollStep = cardWidth + cardGap;

          let newPosition = scrollPosition + scrollStep;

          if (newPosition >= maxScroll) {
            newPosition = 0;
          }

          scrollContainerRef.current.scrollTo({
            left: newPosition,
            behavior: "smooth",
          });

          setScrollPosition(newPosition);
        }
      }, 6000); // Changed from 4000 to 6000 for slower scrolling
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling, scrollPosition, maxScroll]);

  // Handle user interaction
  useEffect(() => {
    if (userInteracted) {
      // Stop auto-scrolling when user interacts
      setIsAutoScrolling(false);

      // Resume auto-scrolling after 5 seconds of no interaction
      const timer = setTimeout(() => {
        setUserInteracted(false);
        setIsAutoScrolling(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [userInteracted]);

  // Handle mouse wheel horizontal scrolling - updated to work with GSAP ScrollTrigger
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      handleManualInteraction();

      // Find the active ScrollTrigger
      const triggers = ScrollTrigger.getAll();
      const mainTrigger = triggers.find(
        (t) => t.vars.trigger === container.parentElement
      );

      if (mainTrigger) {
        // Determine scroll direction and amount
        const delta =
          Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const direction = delta > 0 ? 1 : -1;

        // Calculate the amount to scroll in the ScrollTrigger
        const scrollAmount = direction * 0.05; // Adjust sensitivity

        // Current progress plus the scroll amount
        const newProgress = Math.max(
          0,
          Math.min(1, mainTrigger.progress + scrollAmount)
        );

        // Scroll to the new position
        mainTrigger.scroll(
          mainTrigger.start +
            (mainTrigger.end - mainTrigger.start) * newProgress
        );
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleManualInteraction = () => {
    setUserInteracted(true);
  };

  const scroll = (direction) => {
    handleManualInteraction();

    // Find the active ScrollTrigger
    const triggers = ScrollTrigger.getAll();
    const mainTrigger = triggers.find(
      (t) => t.vars.trigger === scrollContainerRef.current.parentElement
    );

    if (mainTrigger) {
      // Current progress
      const currentProgress = mainTrigger.progress;

      // Calculate steps based on number of cards
      const step = 1 / (cardData.length - 1);

      // New progress, either previous or next card
      const newProgress =
        direction === "left"
          ? Math.max(0, currentProgress - step)
          : Math.min(1, currentProgress + step);

      // Scroll to the new position
      mainTrigger.scroll(
        mainTrigger.start + (mainTrigger.end - mainTrigger.start) * newProgress
      );
    }
  };

  // Add GSAP animations - improved version based on TabSection
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = scrollContainerRef.current;
    const cards = cardsRef.current;
    const wrapper = container.parentElement;

    if (container && cards.length > 0) {
      // Set initial styles
      gsap.set(wrapper, { overflow: "hidden" });
      gsap.set(container, {
        x: 0,
        willChange: "transform",
      });

      // Calculate total scroll width
      const totalWidth = container.scrollWidth;
      const containerWidth = wrapper.offsetWidth;

      // Create main horizontal scroll animation
      gsap.to(container, {
        x: () => -(totalWidth - containerWidth),
        ease: "power2.inOut", // Changed from 'none' to 'power2.inOut' for smoother animation
        scrollTrigger: {
          trigger: wrapper,
          start: "center-=10 center",
          end: () => `+=${totalWidth}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1.5, // Increased from 1 to 1.5 for smoother scrolling
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: { min: 0.2, max: 0.3 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            // Update active card based on scroll position
            const progress = self.progress;
            const cardIndex = Math.min(
              Math.floor(progress * cards.length),
              cards.length - 1
            );
            setScrollPosition(cardIndex * (422 + 24)); // card width + gap
          },
        },
      });

      // Animate each card
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.5,
            scale: 0.9,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "center+=100 center",
              end: "center-=100 center",
              toggleActions: "play reverse play reverse",
              scrub: 0.5,
            },
          }
        );
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100vh] bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Industry Solutions
        </h2>

        {/* Cards Container */}
        <div className="relative min-h-[400px]">
          {/* Horizontal Cards Track */}
          <div ref={scrollContainerRef} className="flex gap-6 pb-4 w-full">
            {cardData.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="flex-shrink-0 w-[422px] h-[503px] bg-black text-white rounded-lg p-6 flex flex-col transform transition-all duration-300 ease-out"
              >
                <h3 className="text-2xl font-bold mb-6">{card.title}</h3>
                <div className="flex-grow flex items-center">
                  <p className="text-lg">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCards;
