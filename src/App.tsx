import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MemoryGallery } from './components/MemoryGallery';
import { CakeCelebration } from './components/CakeCelebration';
import { LightUpScreen } from './components/LightUpScreen';
import { FinalMessage } from './components/FinalMessage';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <WelcomeScreen onNext={() => setCurrentScreen(1)} />,
    <MemoryGallery onNext={() => setCurrentScreen(2)} />,
    <CakeCelebration onNext={() => setCurrentScreen(3)} />,
    <LightUpScreen onNext={() => setCurrentScreen(4)} />,
    <FinalMessage onRestart={() => setCurrentScreen(0)} />
  ];

  return (
    <div className="font-sans">
      <div className="transition-all duration-1000 ease-in-out">
        {screens[currentScreen]}
      </div>
    </div>
  );
}

export default App;