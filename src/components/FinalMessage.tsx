import React, { useEffect, useState } from 'react';
import { Heart, Gift, Sparkles, Star } from 'lucide-react';

interface FinalMessageProps {
  onRestart: () => void;
}

export const FinalMessage: React.FC<FinalMessageProps> = ({ onRestart }) => {
  const [balloons, setBalloons] = useState<Array<{id: number, x: number, y: number, color: string, size: number, depth: number}>>([]);

  useEffect(() => {
    const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#00d2d3', '#a55eea', '#26de81'];
    const newBalloons = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      size: Math.random() * 40 + 25,
      depth: Math.random() * 100,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D balloons with depth and glow */}
      <div className="absolute inset-0 pointer-events-none">
        {balloons.map((balloon) => (
          <div
            key={balloon.id}
            className="absolute animate-float-3d opacity-80"
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              transform: `translateZ(${balloon.depth}px) rotateY(${Math.random() * 30}deg)`,
            }}
          >
            <div
              className="rounded-full shadow-2xl transform-gpu hover:scale-110 transition-transform duration-500"
              style={{
                width: `${balloon.size}px`,
                height: `${balloon.size}px`,
                backgroundColor: balloon.color,
                boxShadow: `0 0 20px ${balloon.color}, 0 10px 30px rgba(0,0,0,0.3)`,
                background: `radial-gradient(circle at 30% 30%, ${balloon.color}, ${balloon.color}dd)`,
              }}
            />
            {/* Balloon string */}
            <div
              className="absolute top-full left-1/2 w-0.5 bg-gray-600 transform -translate-x-1/2"
              style={{ height: `${balloon.size * 0.8}px` }}
            />
          </div>
        ))}
        
        {/* Enhanced floating decorative elements with 3D effects */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `translateZ(${Math.random() * 50}px) rotateY(${Math.random() * 360}deg)`,
            }}
          >
            {i % 4 === 0 ? (
              <Heart 
                className="text-pink-400" 
                size={Math.random() * 18 + 12}
                style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))' }}
              />
            ) : i % 4 === 1 ? (
              <Gift 
                className="text-purple-400" 
                size={Math.random() * 16 + 10}
                style={{ filter: 'drop-shadow(0 0 6px rgba(147, 51, 234, 0.6))' }}
              />
            ) : i % 4 === 2 ? (
              <Sparkles 
                className="text-yellow-400" 
                size={Math.random() * 14 + 8}
                style={{ filter: 'drop-shadow(0 0 5px rgba(253, 224, 71, 0.6))' }}
              />
            ) : (
              <Star 
                className="text-blue-400" 
                size={Math.random() * 12 + 8}
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))' }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-4 relative z-10 border border-purple-500/30 transform-gpu perspective-1000">
        {/* Enhanced header with 3D effect */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white py-4 px-10 rounded-full inline-flex items-center gap-3 mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
            }}
          >
            <Gift className="animate-bounce" size={24} />
            <span className="text-xl font-bold">Happy Birthday Madam Ji</span>
            <Gift className="animate-bounce" size={24} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
            Dear Madam Ji,
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto mt-3 rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced message content */}
        <div className="text-gray-300 space-y-6 leading-relaxed">
          <p className="text-lg animate-fade-in-up">
            On this special day, I want to take a moment to celebrate not just your birthday, 
            but the incredible person you are. Your presence lights up every room you enter, 
            just like how you've lit up our lives.
          </p>
          
          <p className="text-lg animate-fade-in-up-delay">
            Your kindness, wisdom, and beautiful spirit inspire everyone around you. 
            You have this magical way of making ordinary moments feel extraordinary, 
            and today is all about celebrating the magic that is uniquely you.
          </p>
          
          <p className="text-lg animate-fade-in-up-delay-2">
            May this new year of your life be filled with endless joy, beautiful surprises, 
            and all the happiness your heart can hold. You deserve nothing but the very best 
            that life has to offer.
          </p>
          
          <div className="text-center py-8">
            <div className="flex justify-center items-center gap-6 mb-6">
              <Heart 
                className="text-pink-400 animate-pulse-glow" 
                size={28}
                style={{ filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.8))' }}
              />
              <Sparkles 
                className="text-purple-400 animate-spin-slow" 
                size={28}
                style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))' }}
              />
              <Heart 
                className="text-pink-400 animate-pulse-glow" 
                size={28}
                style={{ filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.8))' }}
              />
            </div>
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
              Happy Birthday! 🎉✨
            </p>
          </div>
        </div>

        {/* Enhanced action button */}
        <div className="text-center mt-10">
          <button
            onClick={onRestart}
            className="group bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-110 transition-all duration-500 relative overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(236, 72, 153, 0.5), 0 0 80px rgba(147, 51, 234, 0.3)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Celebrate Again! 
              <div className="flex gap-1">
                <span className="animate-bounce">🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎉</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
};