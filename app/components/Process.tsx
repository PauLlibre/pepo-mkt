"use client";

import React, { useState, useEffect, useRef } from "react";

// Example waypoints (adjust threshold and data as you wish)
const WAYPOINTS: Waypoint[] = [
  {
    id: 1,
    step: "Paso 1",
    title: "Análisis y Estrategia Personalizada",
    threshold: 0,
    description:
      "Estudiamos tu negocio, mercado y objetivos para diseñar una estrategia de marketing digital adaptada a tus necesidades.",
    side: "left",
  },
  {
    id: 2,
    step: "Paso 2",
    title: "Ejecución y Optimización",
    threshold: 0.5,
    description:
      "Implementamos campañas efectivas con herramientas avanzadas, ajustándolas continuamente para maximizar resultados.",
    side: "right",
  },
  {
    id: 3,
    step: "Paso 3",
    title: "Seguimiento y Crecimiento",
    threshold: 1,
    description:
      "Medimos el impacto de nuestras acciones, generando informes claros y ajustando la estrategia para garantizar el crecimiento constante.",
    side: "left",
  },
];

// Define a type for the waypoint
type Waypoint = {
  id: number;
  title: string;
  threshold: number;
  description: string;
  side: "left" | "right";
  step: string;
};

export default function Process() {
  // Track the scroll progress (0.0 -> 1.0)
  const [progress, setProgress] = useState(0);
  const processRef = useRef<HTMLDivElement>(null);

  // Track which waypoints have been passed
  const [passedWaypoints, setPassedWaypoints] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!processRef.current) return;

      // const rect = processRef.current.getBoundingClientRect();  (We won't use getBoundingClientRect here)
      // Instead, let's compute offsets in relation to the entire page
      const elementTop = processRef.current.offsetTop; // distance from page top to element top
      const elementHeight = processRef.current.offsetHeight;
      const elementBottom = elementTop + elementHeight;

      // currentScrollBottom is how far the bottom of the viewport is from the top of the page
      const currentScrollBottom = window.scrollY + window.innerHeight;

      // progress = how far the bottom of viewport has traveled into the element
      //  - If currentScrollBottom < elementTop, progress < 0
      //  - If currentScrollBottom > elementBottom, progress > 1
      let newProgress =
        (currentScrollBottom - elementTop) / (elementBottom - elementTop);

      // Clamp between 0 and 1
      newProgress = Math.max(0, Math.min(1, newProgress));

      setProgress(newProgress);

      // Waypoints
      const newPassedWaypoints = new Set<number>();
      WAYPOINTS.forEach((wp) => {
        if (newProgress >= wp.threshold) {
          newPassedWaypoints.add(wp.id);
        }
      });
      setPassedWaypoints(newPassedWaypoints);
    };

    // Listen to the window scroll event
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Convert progress (0 -> 1) to a percentage string
  const fillPercent = `${(progress * 100).toFixed(1)}%`;

  return (
    <div className="p-40">
      {/* 
        This extra-tall div ensures we have enough page height to scroll.
        Adjust the height to suit your content needs. 
      */}
      <div
        ref={processRef}
        className="relative w-full h-[100vh] flex justify-center items-start"
      >
        {/* The background line (gray), spanning the full page height. */}
        <div
          className="
            absolute 
            top-0
            left-1/2
            -translate-x-1/2
            w-0.5
            bg-gray-500
            h-full
          "
        />

        {/* The filled line (#ff4500) that grows as we scroll. */}
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-0.5
            bg-[#ff4500]
            transition-all
            duration-300
            ease-linear
          "
          style={{
            height: fillPercent, // fill from the top down
          }}
        />

        {/* Waypoints (dots) */}
        {WAYPOINTS.map((wp) => {
          const dotTop = `${wp.threshold * 100}%`;
          const isPastThreshold = progress >= wp.threshold;

          return (
            <div
              key={wp.id}
              className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-700"
              style={{
                top: dotTop,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* If we are past this waypoint's threshold, color it #ff4500 */}
              {isPastThreshold && (
                <div className="w-full h-full bg-[#ff4500] rounded-full opacity-70" />
              )}
            </div>
          );
        })}

        {/* Info panels for all passed waypoints */}
        {WAYPOINTS.filter((wp) => passedWaypoints.has(wp.id)).map((wp) => (
          <div
            key={wp.id}
            className={`
              absolute
              ${wp.side === "left" ? "left-80" : "right-80"}
              text-white
              p-4
              rounded
              shadow-lg
              w-80
              transition-all
              duration-300
            `}
            style={{
              top: `${wp.threshold * 100}%`,
              transform: "translateY(-50%)",
            }}
          >
            <h2 className="font-bold text-xl mb-2 text-[#ff4500]">{wp.step}</h2>
            <h2 className="font-bold text-2xl mb-2">{wp.title}</h2>
            <p className="transition-shadow duration-300">
              {wp.description}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
