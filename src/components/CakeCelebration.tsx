import React, { useState, useEffect } from 'react';

interface CakeCelebrationProps {
  onNext: () => void;
}

export const CakeCelebration: React.FC<CakeCelebrationProps> = ({ onNext }) => {
  const [confettiPieces, setConfettiPieces] = useState<Array<{id: number, x: number, y: number, color: string, rotation: number, size: number}>>([]);
  const [cakeClicked, setCakeClicked] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    // Generate 3D confetti pieces
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a55eea'][Math.floor(Math.random() * 8)],
      rotation: Math.random() * 360,
      size: Math.random() * 8 + 4,
    }));
    setConfettiPieces(pieces);

    // Generate sparkles
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSparkles(newSparkles);
  }, []);

  const handleCakeClick = () => {
    setCakeClicked(true);
    // Add explosion of confetti
    const newPieces = Array.from({ length: 40 }, (_, i) => ({
      id: i + 100,
      x: 50 + (Math.random() - 0.5) * 40,
      y: 50 + (Math.random() - 0.5) * 30,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360,
      size: Math.random() * 10 + 6,
    }));
    setConfettiPieces(prev => [...prev, ...newPieces]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* 3D Animated confetti with depth */}
      <div className="absolute inset-0 pointer-events-none">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className="absolute animate-confetti-3d opacity-80"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              backgroundColor: piece.color,
              width: `${piece.size}px`,
              height: `${piece.size * 2}px`,
              transform: `rotate(${piece.rotation}deg) translateZ(${Math.random() * 100}px)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: `0 0 10px ${piece.color}`,
              borderRadius: '2px',
            }}
          />
        ))}
      </div>

      {/* Animated sparkles with glow */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 bg-white rounded-full animate-twinkle opacity-70"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 animate-glow">
          Let's Cut the Cake! 🎂
        </h1>
      </div>

      {/* Enhanced 3D Interactive Cake */}
      <div className="relative mb-12 z-10 perspective-1000">
        <div 
          onClick={handleCakeClick}
          className={`cursor-pointer transform-gpu transition-all duration-700 hover:scale-110 hover:rotate-y-6 ${cakeClicked ? 'animate-celebration' : 'animate-float'}`}
          style={{
            filter: cakeClicked ? 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.8))' : 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
          }}
        >
          {/* Enhanced 3D Cake SVG */}
          <svg width="250" height="220" viewBox="0 0 250 220" className="drop-shadow-2xl">
            {/* Cake base shadow */}
            <ellipse cx="125" cy="200" rx="100" ry="20" fill="rgba(0,0,0,0.3)" />
            
            {/* Bottom layer with gradient */}
            <defs>
              <linearGradient id="bottomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff69b4" />
                <stop offset="100%" stopColor="#ff1493" />
              </linearGradient>
              <linearGradient id="middleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="100%" stopColor="#dc143c" />
              </linearGradient>
              <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff69b4" />
                <stop offset="100%" stopColor="#ff1493" />
              </linearGradient>
            </defs>
            
            <ellipse cx="125" cy="180" rx="90" ry="18" fill="rgba(255, 105, 180, 0.3)" />
            <rect x="35" y="140" width="180" height="40" rx="8" fill="url(#bottomGrad)" />
            
            {/* Middle layer */}
            <ellipse cx="125" cy="145" rx="75" ry="15" fill="rgba(255, 20, 147, 0.3)" />
            <rect x="50" y="110" width="150" height="35" rx="6" fill="url(#middleGrad)" />
            
            {/* Top layer */}
            <ellipse cx="125" cy="115" rx="60" ry="12" fill="rgba(255, 105, 180, 0.3)" />
            <rect x="65" y="85" width="120" height="30" rx="4" fill="url(#topGrad)" />
            
            {/* Enhanced decorations with glow */}
            <circle cx="90" cy="125" r="5" fill="white" opacity="0.9" />
            <circle cx="125" cy="125" r="5" fill="white" opacity="0.9" />
            <circle cx="160" cy="125" r="5" fill="white" opacity="0.9" />
            
            <circle cx="100" cy="160" r="4" fill="white" opacity="0.8" />
            <circle cx="150" cy="160" r="4" fill="white" opacity="0.8" />
            
            {/* Animated candles with enhanced flames */}
            {[95, 115, 135, 155].map((x, i) => (
              <g key={i}>
                <rect x={x-2} y="65" width="4" height="20" fill="#ffd700" />
                <ellipse 
                  cx={x} 
                  cy="58" 
                  rx="4" 
                  ry="8" 
                  fill={cakeClicked ? "#ff4500" : "#ffff00"}
                  className={cakeClicked ? "animate-flame-dance" : "animate-flame-flicker"}
                  style={{
                    filter: `drop-shadow(0 0 8px ${cakeClicked ? '#ff4500' : '#ffff00'})`,
                  }}
                />
                {/* Flame glow effect */}
                <ellipse 
                  cx={x} 
                  cy="58" 
                  rx="6" 
                  ry="10" 
                  fill={cakeClicked ? "rgba(255, 69, 0, 0.3)" : "rgba(255, 255, 0, 0.3)"}
                  className="animate-pulse"
                />
              </g>
            ))}
            
            {/* Cake shine effect */}
            <rect x="65" y="85" width="120" height="5" rx="2" fill="rgba(255, 255, 255, 0.3)" />
            <rect x="50" y="110" width="150" height="5" rx="3" fill="rgba(255, 255, 255, 0.3)" />
            <rect x="35" y="140" width="180" height="5" rx="4" fill="rgba(255, 255, 255, 0.3)" />
          </svg>
        </div>
        
        {!cakeClicked && (
          <p className="text-center text-purple-300 font-medium mt-6 animate-bounce text-lg">
            🎉 Click the cake to make a wish! 🎉
          </p>
        )}
        
        {cakeClicked && (
          <div className="text-center mt-6 animate-fade-in">
            <p className="text-pink-300 font-medium text-xl animate-pulse mb-2">
              ✨ Happy Birthday! Your wish is coming true! ✨
            </p>
            <p className="text-purple-300 text-sm">
              The magic is just beginning...
            </p>
          </div>
        )}
      </div>

      <button
        onClick={onNext}
        className="group bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-500 z-10 relative overflow-hidden"
        style={{
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)',
        }}
      >
        <span className="relative z-10">Next Page →</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </div>
  );
};