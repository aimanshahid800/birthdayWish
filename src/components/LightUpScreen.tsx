import React, { useState } from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

interface LightUpScreenProps {
  onNext: () => void;
}

export const LightUpScreen: React.FC<LightUpScreenProps> = ({ onNext }) => {
  const [lightsOn, setLightsOn] = useState(false);

  const handleLightsToggle = () => {
    setLightsOn(true);
    setTimeout(() => {
      onNext();
    }, 4000);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-all duration-2000 ${
      lightsOn 
        ? 'bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600' 
        : 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
    }`}>
      
      {/* Enhanced 3D twinkling stars/sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-2000 transform-gpu ${
              lightsOn ? 'opacity-100 animate-twinkle-bright scale-150' : 'opacity-20 scale-75'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateZ(${Math.random() * 100}px) rotateY(${Math.random() * 360}deg)`,
            }}
          >
            {i % 4 === 0 ? (
              <Sparkles 
                className={lightsOn ? 'text-yellow-300' : 'text-gray-500'} 
                size={Math.random() * 25 + 15}
                style={{
                  filter: lightsOn ? 'drop-shadow(0 0 15px rgba(253, 224, 71, 0.8))' : 'none',
                }}
              />
            ) : i % 4 === 1 ? (
              <Star 
                className={lightsOn ? 'text-pink-300' : 'text-gray-600'} 
                size={Math.random() * 20 + 12}
                style={{
                  filter: lightsOn ? 'drop-shadow(0 0 12px rgba(249, 168, 212, 0.8))' : 'none',
                }}
              />
            ) : i % 4 === 2 ? (
              <Zap 
                className={lightsOn ? 'text-blue-300' : 'text-gray-500'} 
                size={Math.random() * 18 + 10}
                style={{
                  filter: lightsOn ? 'drop-shadow(0 0 10px rgba(147, 197, 253, 0.8))' : 'none',
                }}
              />
            ) : (
              <div
                className={`rounded-full ${lightsOn ? 'bg-white' : 'bg-gray-600'}`}
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  boxShadow: lightsOn ? '0 0 20px rgba(255, 255, 255, 0.9)' : 'none',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced light rays with 3D effect */}
      {lightsOn && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-transparent opacity-70 animate-spin-rays"
              style={{
                height: '60vh',
                transformOrigin: 'top',
                transform: `translate(-50%, -100%) rotate(${i * 30}deg) rotateX(${Math.sin(i) * 15}deg)`,
                animationDuration: '6s',
                animationDelay: `${i * 0.2}s`,
                filter: 'blur(1px)',
                boxShadow: '0 0 20px rgba(253, 224, 71, 0.5)',
              }}
            />
          ))}
        </div>
      )}

      {/* Pulsing energy rings */}
      {lightsOn && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute border-2 border-pink-400/30 rounded-full animate-pulse-ring"
              style={{
                width: `${(i + 1) * 200}px`,
                height: `${(i + 1) * 200}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center z-10 perspective-1000">
        <h1 className={`text-4xl md:text-6xl font-bold mb-12 transition-all duration-2000 transform-gpu ${
          lightsOn 
            ? 'bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-glow-intense scale-110 rotate-y-3' 
            : 'text-gray-400 scale-100'
        }`}>
          Light Up My Life
        </h1>
        
        {!lightsOn ? (
          <button
            onClick={handleLightsToggle}
            className="group bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse-glow hover:animate-none relative overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(236, 72, 153, 0.5), 0 0 80px rgba(147, 51, 234, 0.3)',
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Turn the Lights On 
              <Zap className="animate-bounce" size={24} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        ) : (
          <div className="animate-fade-in-scale">
            <div className="text-2xl md:text-3xl text-white mb-8 animate-glow-text font-semibold">
              ✨ You light up every moment of my life! ✨
            </div>
            <div className="text-lg text-pink-200 animate-bounce">
              Preparing your final surprise...
            </div>
            {/* Loading animation */}
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};