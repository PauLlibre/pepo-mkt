import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function BookACallButton() {
    return (
        <Button className="bg-primary hover:bg-[#ff4500] rounded-full w-full sm:w-auto text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 max-w-48 p-2">
            <Calendar className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap">Pide una reunión</span>
        </Button>
    );
}