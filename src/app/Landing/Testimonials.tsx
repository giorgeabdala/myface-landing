import Image from "next/image";

import {Quote} from "lucide-react";
import Area from "@/app/components/Area";
import Coments from "@/app/components/Coments";



export default function Testimonials() {
    return (

        <Area className="bg-container-gray h-container-g">

            <div className ="flex flex-col  justify-center items-center  text-white h-full gap-8">
                <div className="text-rose-gold opacity-20 font-menu text-9xl">
                    Poderosa
                </div>
                    <h1 className="text-3xl font-bold text-center">O QUE ELAS ESTÃO DIZENDO...</h1>
                    <Quote className=" text-rose-gold" />
                    <Coments />
    </div>







        </Area>
    )
}