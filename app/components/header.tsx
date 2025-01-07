"use client"

import BookACallButton from "./BookACallButton";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className={`flex items-center justify-between w-full px-4 sm:px-6 md:px-8 p-10 fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
        isScrolled ? 'bg-white/5 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-left">
          ALTUUM
        </h1>
        <BookACallButton />
      </div>
    );
  }