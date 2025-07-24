import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Music } from 'lucide-react';

interface MemoryGalleryProps {
  onNext: () => void;
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ onNext }) => {
  const [currentPhoto, setCurrentPhoto] = useState(2);

  const photos = [
    {
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Our first adventure together"
    },
    {
      url: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Dancing under the stars"
    },
    {
      url: "https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "You, always you..."
    },
    {
      url: "https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Making memories every day"
    },
    {
      url: "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=600",
      caption: "Forever in my heart"
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* 3D Floating hearts with depth */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-400 opacity-40 animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${Math.random() * 16 + 12}px`,
              filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))',
              transform: `translateZ(${Math.random() * 50}px) rotateY(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-r from-purple-500/20 to-transparent opacity-30 animate-spin-slow"
            style={{
              height: '50vh',
              transformOrigin: 'top',
              transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
              animationDuration: '8s',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center mb-8 z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Heart 
            className="text-pink-400 animate-pulse-glow" 
            size={28}
            style={{ filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.6))' }}
          />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
            Mirror of Memories
          </h1>
          <Music 
            className="text-purple-400 animate-bounce" 
            size={28}
            style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))' }}
          />
        </div>
      </div>

      {/* 3D Photo Gallery */}
      <div className="relative w-full max-w-6xl mx-auto px-4 mb-8 perspective-1000">
        <div className="flex items-center justify-center gap-4">
          {/* Previous photos with 3D depth */}
          <div className="hidden md:flex gap-4 opacity-50">
            {[-2, -1].map((offset) => {
              const index = (currentPhoto + offset + photos.length) % photos.length;
              return (
                <div 
                  key={index} 
                  className="w-32 h-48 rounded-lg overflow-hidden shadow-2xl transform-gpu rotate-y-12 hover:rotate-y-6 transition-transform duration-500"
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(147, 51, 234, 0.3)',
                  }}
                >
                  <img
                    src={photos[index].url}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover filter blur-sm brightness-75"
                  />
                </div>
              );
            })}
          </div>

          {/* Current photo with enhanced 3D effect */}
          <div className="relative group">
            <div 
              className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform-gpu hover:scale-105 hover:rotate-y-3 transition-all duration-700 border border-purple-500/30"
              style={{
                boxShadow: '0 30px 60px rgba(0,0,0,0.7), 0 0 40px rgba(236, 72, 153, 0.4)',
              }}
            >
              <img
                src={photos[currentPhoto].url}
                alt="Current memory"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <p className="text-white text-lg font-medium text-center animate-fade-in">
                  {photos[currentPhoto].caption}
                </p>
              </div>
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Next photos with 3D depth */}
          <div className="hidden md:flex gap-4 opacity-50">
            {[1, 2].map((offset) => {
              const index = (currentPhoto + offset) % photos.length;
              return (
                <div 
                  key={index} 
                  className="w-32 h-48 rounded-lg overflow-hidden shadow-2xl transform-gpu rotate-y-[-12deg] hover:rotate-y-[-6deg] transition-transform duration-500"
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(147, 51, 234, 0.3)',
                  }}
                >
                  <img
                    src={photos[index].url}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover filter blur-sm brightness-75"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced navigation arrows */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-2xl transition-all hover:scale-110 border border-purple-500/30"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
          }}
        >
          <ChevronLeft className="text-pink-400" size={24} />
        </button>
        <button
          onClick={nextPhoto}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 shadow-2xl transition-all hover:scale-110 border border-purple-500/30"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
          }}
        >
          <ChevronRight className="text-pink-400" size={24} />
        </button>
      </div>

      {/* Enhanced photo indicators */}
      <div className="flex gap-3 mb-8">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentPhoto
                ? 'bg-pink-400 scale-125 shadow-lg'
                : 'bg-gray-600 hover:bg-purple-400'
            }`}
            style={{
              boxShadow: index === currentPhoto ? '0 0 15px rgba(236, 72, 153, 0.6)' : 'none',
            }}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="group bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-500 z-10 relative overflow-hidden"
        style={{
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)',
        }}
      >
        <span className="relative z-10">Next Page ➜</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>
    </div>
  );
};