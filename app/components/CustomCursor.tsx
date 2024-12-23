"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  // The circle’s *actual* position on the screen
  const [pos, setPos] = useState({ x: 0, y: 0 });
  // The circle’s *target* position (where the mouse is)
  const targetRef = useRef({ x: 0, y: 0 });

  // Capture the user’s actual mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation loop: gradually move `pos` towards `targetRef`
  useEffect(() => {
    let frameId: number;

    const animate = () => {
      setPos((prevPos) => {
        const dx = targetRef.current.x - prevPos.x;
        const dy = targetRef.current.y - prevPos.y;
        const speed = 0.1; // increase to move faster, decrease to move slower

        return {
          x: prevPos.x + dx * speed,
          y: prevPos.y + dy * speed,
        };
      });
      frameId = requestAnimationFrame(animate);
    };

    animate(); // start animation
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] 
                 h-3 w-3 rounded-full bg-[#ff4500] 
                 transform -translate-x-1/2 -translate-y-1/2
                 shadow-[0_0_15px_rgba(255,69,0,0.6)] transition-shadow duration-300"
      style={{
        // Place the circle at (pos.x, pos.y)
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
}
