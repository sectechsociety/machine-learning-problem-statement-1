// LottieAnimation.jsx
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../Asserts/animation.json'; 
import './animate.css'

const LottieAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => animationInstance.destroy();
  }, []);

 
return <div ref={animationContainer} className="animationContainer" />;

};

export default LottieAnimation;
