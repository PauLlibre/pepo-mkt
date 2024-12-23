"use client";

import React, { useState, useEffect, useRef } from "react";
import BookACallButton from "./BookACallButton";

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

      const elementTop = processRef.current.offsetTop;
      const elementHeight = processRef.current.offsetHeight;
      const elementBottom = elementTop + elementHeight;
      const currentScrollBottom = window.scrollY + window.innerHeight;

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fillPercent = `${(progress * 100).toFixed(1)}%`;

  return (
    <div className="p-4 sm:p-20 md:p-40">
      <div
        ref={processRef}
        className="relative w-full h-[100vh] flex justify-center items-start"
      >
        {/* Background line */}
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

        {/* Progress line */}
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
            height: fillPercent,
          }}
        />

        {/* Waypoints */}
        {WAYPOINTS.map((wp) => {
          const dotTop = `${wp.threshold * 100}%`;
          const isPastThreshold = progress >= wp.threshold;

          return (
            <div
              key={wp.id}
              className="absolute left-1/2 -translate-x-1/2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 rounded-full bg-gray-700"
              style={{
                top: dotTop,
                transform: "translate(-50%, -50%)",
              }}
            >
              {isPastThreshold && (
                <div className="w-full h-full bg-[#ff4500] rounded-full opacity-70" />
              )}
            </div>
          );
        })}

        {/* Info panels */}
        {WAYPOINTS.filter((wp) => passedWaypoints.has(wp.id)).map((wp) => (
          <div
            key={wp.id}
            className={`
              absolute
              ${wp.side === "left" 
                ? "left-2 sm:left-40 md:left-80" 
                : "right-2 sm:right-40 md:right-80"
              }
              text-white
              p-3 sm:p-4
              rounded
              shadow-lg
              w-[calc(100%-2rem)] sm:w-64 md:w-80
              transition-all
              duration-300
            `}
            style={{
              top: `${wp.threshold * 100}%`,
              transform: "translateY(-50%)",
            }}
          >
            <h2 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-[#ff4500]">{wp.step}</h2>
            <h2 className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2">{wp.title}</h2>
            <p className="text-sm sm:text-base transition-shadow duration-300">
              {wp.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-base sm:text-lg md:text-xl items-center pt-10 sm:pt-16 md:pt-20">
        <BookACallButton />
      </div>
    </div>
  );
}
