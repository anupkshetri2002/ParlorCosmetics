

import React from 'react';

const AnimatedText = () => {
  return (
    <div className="text-[3rem] font-bold flex gap-x-3 font-logo2">
          <span className={`animate-wavingU  animation-delay-[300ms] `}>
            A
        </span>
          <span className={`animate-wavingU animation-delay-[600ms] `}>
            E
        </span>
          <span className={`animate-wavingU animation-delay-[900ms] `}>
            R
        </span>
          <span className={`animate-wavingU animation-delay-[1200ms] `}>
            I
        </span>
          <span className={`animate-wavingU animation-delay-[1500ms] `}>
            E
        </span>
          <span className={`animate-wavingU animation-delay-[1800ms] `}>
            S
        </span>
      
    </div>
  );
};

export default AnimatedText;
