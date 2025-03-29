'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'

const Certification = () => {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    speed: 20,
    watchDrag: false,
    containScroll: 'keepSnaps',
  }, [
    AutoScroll({ 
      playOnInit: true, 
      direction: -1,
      speed: 1.5
    })
  ])

  const [emblaRef2, emblaApi2] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    speed: 20,
    watchDrag: false,
    containScroll: 'keepSnaps',
  }, [
    AutoScroll({ 
      playOnInit: true, 
      direction: 1,
      speed: 1.0
    })
  ])

  useEffect(() => {
    if (!emblaApi1 || !emblaApi2) return
    
    const onResize = () => {
      emblaApi1.reInit()
      emblaApi2.reInit()
    }
    window.addEventListener('resize', onResize)
    
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [emblaApi1, emblaApi2])

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-center text-gray-900 font-['Raleway'] font-black text-[64px] leading-[100%] tracking-[0%] align-middle">
            EarthFokus Certification
          </h2>
          
          {/* First row - Right scroll */}
          <div className="overflow-hidden embla-container mb-8" ref={emblaRef1}>
            <div className="flex transition-transform duration-300 ease-linear">
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 1"
                  src="/certifications/cert1.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 2"
                  src="/certifications/cert2.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 3"
                  src="/certifications/cert3.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 4"
                  src="/certifications/cert4.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              {/* Duplicate slides for continuous scroll */}
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 1"
                  src="/certifications/cert1.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 2"
                  src="/certifications/cert2.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Second row - Left scroll */}
          <div className="overflow-hidden embla-container" ref={emblaRef2}>
            <div className="flex transition-transform duration-300 ease-linear">
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 5"
                  src="/certifications/cert5.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 6"
                  src="/certifications/cert6.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 7"
                  src="/certifications/cert7.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 8"
                  src="/certifications/cert8.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              {/* Duplicate slides for continuous scroll */}
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 5"
                  src="/certifications/cert5.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
              <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
                <img
                  alt="Certification 6"
                  src="/certifications/cert6.png"
                  className="max-h-32 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
                />
              </div>
            </div>
          </div>

          <style jsx>{`
            .embla-container {
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
              mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}

export default Certification
