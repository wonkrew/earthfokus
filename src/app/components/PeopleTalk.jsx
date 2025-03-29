"use client"
import React from 'react';

const PeopleTalk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 sm:py-10 md:py-12 px-3 sm:px-4">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-blue-400/10 rounded-full blur-3xl -z-10" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 inline-block text-transparent bg-clip-text mb-4 sm:mb-6 relative">
            What People Say
            <span className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 sm:w-12 h-8 sm:h-12 bg-blue-400/20 rounded-full blur-xl" />
            <span className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-purple-400/20 rounded-full blur-lg" />
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2">
            Discover what our amazing community has to share about their experiences and insights
          </p>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent -z-10" />
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative">
          {[...Array(4)].map((_, containerIndex) => (
            <div
              key={containerIndex}
              className={`flex flex-col gap-4 sm:gap-6 md:gap-8 animate-wave ${
                containerIndex % 2 === 0 ? 'animate-waveUp' : 'animate-waveDown'
              } ${
                containerIndex === 0 ? '-mt-6 sm:-mt-8 md:-mt-12' : 
                containerIndex === 2 ? '-mt-4 sm:-mt-6 md:-mt-10' : 
                containerIndex === 4 ? '-mt-2 sm:-mt-4 md:-mt-6' : ''
              }`}
              style={{ animationDelay: `${containerIndex * 1.2}s` }}
            >
              {[...Array(2)].map((_, cardIndex) => (
                <div
                  key={cardIndex}
                  className="group bg-white rounded-2xl p-5 sm:p-6 md:p-8 min-h-[320px] sm:min-h-[350px] md:min-h-[380px] shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col gap-3 sm:gap-4 md:gap-5 overflow-hidden backdrop-blur-sm bg-opacity-90 border border-gray-100"
                >
                  <div className="relative">
                    <div className="w-[50px] sm:w-[60px] md:w-[70px] h-[50px] sm:h-[60px] md:h-[70px] bg-gradient-to-br from-gray-800 to-gray-600 rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      Lorem ipsum dolor sit amet consectetur sed veneitis velit
                      egit poin Libero vitae consequat gravida facilisi sit
                      faucibus. Congue molls
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      Lorem ipsum dolor sit amet consectetur sed veneitis velit
                      egit poin Libero vitae consequat gravida facilisi sit
                      faucibus. Congue molls
                    </p>
                    <h3 className="text-gray-800 text-sm sm:text-base font-semibold mt-1 sm:mt-2 group-hover:text-blue-600 transition-colors duration-300">
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
            transform: translateY(-10px) rotate(0.5deg);
          }
        }

        @keyframes waveDown {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-0.5deg);
          }
        }

        .animate-waveUp {
          animation: waveUp 8s ease-in-out infinite;
        }

        .animate-waveDown {
          animation: waveDown 8s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          @keyframes waveUp {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(0.75deg);
            }
          }
  
          @keyframes waveDown {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(15px) rotate(-0.75deg);
            }
          }
        }

        @media (min-width: 768px) {
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
        }
        
        /* Extra small devices */
        @media (min-width: 480px) {
          .xs\\:grid-cols-\\[repeat\\(auto-fill\\,minmax\\(280px\\,1fr\\)\\)\\] {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default PeopleTalk;