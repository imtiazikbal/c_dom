import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';

export const BeforeAfterSlider = ({ children }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = clientX => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const newPosition = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(newPosition);
    }
  };

  const handleMouseMove = e => {
    handleMove(e.clientX);
  };

  const handleTouchMove = e => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleTouchMove);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="ne-relative ne-w-full ne-h-[500px] ne-overflow-hidden ne-cursor-col-resize ne-rounded-lg">
      <div className="ne-absolute ne-inset-0 ne-w-full ne-h-full">
        {React.cloneElement(children[0], {
          className: `${children[0].props.className} ne-object-cover ne-w-full ne-h-full`,
        })}
      </div>
      <div className="ne-absolute ne-inset-0 ne-w-full ne-h-full ne-overflow-hidden" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
        {React.cloneElement(children[1], {
          className: `${children[1].props.className} ne-object-cover ne-w-full ne-h-full`,
        })}
      </div>
      <div className="ne-absolute ne-top-0 ne-bottom-0 ne-w-0.5 ne-bg-primary-foreground/60 ne-cursor-col-resize" style={{ left: `${sliderPosition}%` }}>
        <div className="ne-w-6 ne-h-8 ne-rounded-md ne-bg-primary ne-text-primary-foreground ne-shadow-md ne-absolute ne-top-1/2 ne--translate-x-1/2 ne--translate-y-1/2 ne-flex ne-items-center ne-justify-center">
          <GripVertical />
        </div>
      </div>
    </div>
  );
};
