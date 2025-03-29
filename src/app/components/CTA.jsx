import React from "react";

const CTA = () => {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-7xl py-8 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div
          className="relative isolate overflow-hidden bg-gray-900 px-4 py-10 sm:px-6 lg:px-8 sm:py-12 shadow-2xl sm:rounded-3xl lg:flex lg:gap-x-20 lg:py-0"
          style={{
            backgroundImage: 'url("/image 7.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "250px",
            height: "auto",
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-[20rem] sm:w-[32rem] lg:w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
          </svg>
          <div className="flex h-full max-w-xl flex-col justify-center items-center text-center mx-auto lg:ml-0 lg:flex-auto py-8 sm:py-12 lg:py-24">
            <h2 className="font-['Raleway'] text-3xl sm:text-[40px] font-black leading-[1.1] sm:leading-[100%] tracking-[0%] text-balance text-white align-middle">
              Still in confusion?
            </h2>
            <p className="mt-3 sm:mt-6 font-['Raleway'] text-sm sm:text-base font-normal leading-5 sm:leading-6 tracking-[0%] text-center align-middle text-gray-300 px-2 sm:px-4">
              Yes, I understand it takes time but we will <br className="hidden sm:block" /> help you out
            </p>
            <div className="mt-6 sm:mt-12">
              <button className="bg-white text-black px-5 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-opacity-90 transition-all w-fit">
                Contact us now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
