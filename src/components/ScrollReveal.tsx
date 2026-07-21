import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right';
  duration?: 'duration-500' | 'duration-700' | 'duration-1000';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up',
  duration = 'duration-1000'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once it becomes visible, we can stop observing to keep it visible
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the element is in view
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Define the base styles based on the animation type
  let initialStyle = 'opacity-0 translate-y-16'; // fade-up default
  if (animation === 'fade-left') initialStyle = 'opacity-0 translate-x-16';
  if (animation === 'fade-right') initialStyle = 'opacity-0 -translate-x-16';

  const visibleStyle = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={domRef}
      className={`transition-all ease-out ${duration} transform ${
        isVisible ? visibleStyle : initialStyle
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
