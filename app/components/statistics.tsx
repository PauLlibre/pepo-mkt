"use client";

import { useEffect, useState } from "react";

export default function Statistics() {
    const [activeClients, setActiveClients] = useState(0);
    const [adSpend, setAdSpend] = useState(0);
    const [roi, setRoi] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds animation
        const steps = 60;
        const interval = duration / steps;

        const clientIncrement = 3 / steps;
        const spendIncrement = 4000 / steps;
        const roiIncrement = 3 / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            if (currentStep < steps) {
                setActiveClients(prev => Math.min(prev + clientIncrement, 3));
                setAdSpend(prev => Math.min(prev + spendIncrement, 4000));
                setRoi(prev => Math.min(prev + roiIncrement, 3));
                currentStep++;
            } else {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-lg animate-slideFromLeft">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    {Math.round(activeClients)}
                </h2>
                <p className="text-muted-foreground text-center text-sm sm:text-base">Clientes activos</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-lg animate-slideFromTop">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    {Math.round(adSpend)}€
                </h2>
                <p className="text-muted-foreground text-center text-sm sm:text-base">Gasto en publicidad mensual</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-lg animate-slideFromRight sm:col-span-2 md:col-span-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                    {roi.toFixed(1)}x
                </h2>
                <p className="text-muted-foreground text-center text-sm sm:text-base">ROI promedio</p>
            </div>
        </div>
    );
}