export default function Example() {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-full py-6 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div
          className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 shadow-2xl sm:rounded-3xl md:pt-16 lg:flex lg:gap-x-20 lg:pt-0"
          style={{
            backgroundImage: 'url("/dashboardbg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            minHeight: "300px",
            height: "auto",
            aspectRatio: "16/9",
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-full max-w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
          </svg>
          <div className="flex h-full max-w-xl flex-col justify-center py-8 sm:py-10 lg:py-24 text-left lg:ml-0 lg:flex-auto">
            <h2 className="font-['Raleway'] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-black leading-tight tracking-[0%] text-balance text-white">
              Smart Water Dashboard
            </h2>
            <p className="mt-3 sm:mt-4 md:mt-6 font-['Raleway'] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal leading-tight text-pretty text-gray-300">
              Track, optimize, and save—real-time water insights at your
              fingertips.
            </p>
          </div>
          <div className="relative mt-6 sm:mt-8 h-40 sm:h-60 md:h-72 lg:mt-8 lg:h-80"></div>
        </div>
      </div>
    </div>
  );
}
