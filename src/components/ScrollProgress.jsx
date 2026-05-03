import { useEffect, useState, useRef } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const isDragging = useRef(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const updateProgressFromScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    const handleScroll = () => {
      updateProgressFromScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgressFromScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      scrollToY(e.clientY);
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        document.body.style.userSelect = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const scrollToY = (clientY) => {
    if (!trackRef.current) return;
    const { top, height } = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientY - top) / height));
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    window.scrollTo({
      top: docHeight * ratio,
      behavior: 'auto'
    });
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    document.body.style.userSelect = 'none';
    scrollToY(e.clientY);
  };

  return (
    <div 
      className="scroll-progress-container fade-in"
      onMouseDown={handleMouseDown}
      ref={trackRef}
    >
      <div className="scroll-progress-track">
        <div 
          className="scroll-progress-fill" 
          style={{ height: `${progress}%` }}
        >
          <div className="scroll-progress-glow"></div>
        </div>
      </div>
    </div>
  );
}
