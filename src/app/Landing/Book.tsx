'use client'

import Area from "@/app/components/Area";
import Services from "@/app/components/Services";


export default function Book() {
    return (
        <Area className="bg-white relative"> {/* Defina "relative" para criar um contexto de posicionamento */}
            <div id="book" className="absolute inset-x-0 top-4 flex items-center justify-center text-6xl  md:text-7xl opacity-20 font-menu text-rose-gold bg-transparent lg:text-9xl  sm:mt-5">
                Agende Agora
            </div>

            <div className="flex justify-center items-center py-10 sm:mt-20">
                <Services />
            </div>
        </Area>
    )
}
