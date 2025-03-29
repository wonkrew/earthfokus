'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    speed: 5,
    watchDrag: false,
    containScroll: 'keepSnaps',
  }, [
    Autoplay({ 
      delay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
      playOnInit: true,
    }),
    AutoScroll({ playOnInit: true })
  ])

  useEffect(() => {
    if (!emblaApi) return
    
    const onResize = () => emblaApi.reInit()
    window.addEventListener('resize', onResize)
    
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [emblaApi])

  return (
    <div className="bg-white py-8 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden embla-container" ref={emblaRef}>
          <div className="flex transition-transform duration-500 ease-out">
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Transistor"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Reform"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Tuple"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="SavvyCal"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Statamic"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Transistor"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Reform"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
            <div className="flex-shrink-0 min-w-[50%] sm:min-w-[33.33%] md:min-w-[30%] lg:min-w-[25%] p-2 sm:p-4">
              <img
                alt="Tuple"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
                className="max-h-10 sm:max-h-12 w-auto mx-auto object-contain transition-opacity hover:opacity-80"
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
    </div>
  )
}
