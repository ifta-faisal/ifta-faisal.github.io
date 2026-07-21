import React, { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  id: string;
  minHeight?: string;
  children: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ id, minHeight = '50vh', children }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleForceLoad = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === id) {
        setHasLoaded(true);
      }
    };
    window.addEventListener('force-load-section', handleForceLoad);
    return () => window.removeEventListener('force-load-section', handleForceLoad);
  }, [id]);

  useEffect(() => {
    if (hasLoaded) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasLoaded(true);
        }
      }, 
      { rootMargin: '600px' } // Load well before it comes into view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [hasLoaded]);

  if (hasLoaded) {
    return <>{children}</>;
  }

  return <div id={id} ref={ref} style={{ minHeight }} className="w-full" />;
};

export default LazySection;
