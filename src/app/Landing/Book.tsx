'use client'

import {Button, CloseButton, Group} from "@mantine/core";
import Area from "@/app/components/Area";
import Services from "@/app/components/Services";


export default function Book() {
    return (
        <Area className="bg-white relative"> {/* Defina "relative" para criar um contexto de posicionamento */}
            <div className="absolute inset-x-0 top-4 flex items-center justify-center text-7xl  opacity-20 font-menu text-rose-gold bg-transparent  sm:top-36 lg:top-48">
                Agende Agora
            </div>

            <div className="flex justify-center items-center py-10 sm:mt-32 lg:mt-48">
                <Services />
            </div>
        </Area>
    )
}
