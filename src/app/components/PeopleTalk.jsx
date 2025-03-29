"use client"
import React from 'react';

const PeopleTalk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl -z-10" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 inline-block text-transparent bg-clip-text mb-6 relative">
            What People Say
            <span className="absolute -top-6 -right-6 w-12 h-12 bg-blue-400/20 rounded-full blur-xl" />
            <span className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400/20 rounded-full blur-lg" />
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover what our amazing community has to share about their experiences and insights
          </p>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8 relative">
          {[...Array(4)].map((_, containerIndex) => (
            <div
              key={containerIndex}
              className={`flex flex-col gap-8 animate-wave ${
                containerIndex % 2 === 0 ? 'animate-waveUp' : 'animate-waveDown'
              } ${
                containerIndex === 0 ? '-mt-12' : containerIndex === 2 ? '-mt-10' : containerIndex === 4 ? '-mt-6' : ''
              }`}
              style={{ animationDelay: `${containerIndex * 1.2}s` }}
            >
              {[...Array(2)].map((_, cardIndex) => (
                <div
                  key={cardIndex}
                  className="group bg-white rounded-2xl p-8 min-h-[380px] shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col gap-5 overflow-hidden backdrop-blur-sm bg-opacity-90 border border-gray-100"
                >
                  <div className="relative">
                    <div className="w-[70px] h-[70px] bg-gradient-to-br from-gray-800 to-gray-600 rounded-full mb-3 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      Lorem ipsum dolor sit amet consectetur sed veneitis velit
                      egit poin Libero vitae consequat gravida facilisi sit
                      faucibus. Congue molls
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      Lorem ipsum dolor sit amet consectetur sed veneitis velit
                      egit poin Libero vitae consequat gravida facilisi sit
                      faucibus. Congue molls
                    </p>
                    <h3 className="text-gray-800 text-base font-semibold mt-2 group-hover:text-blue-600 transition-colors duration-300">
                      First Name Last Name
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes waveUp {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }

        @keyframes waveDown {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-1deg);
          }
        }

        .animate-waveUp {
          animation: waveUp 8s ease-in-out infinite;
        }

        .animate-waveDown {
          animation: waveDown 8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .grid-cols-[repeat(auto-fill,minmax(350px,1fr))] {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .grid-cols-[repeat(auto-fill,minmax(350px,1fr))] {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PeopleTalk;