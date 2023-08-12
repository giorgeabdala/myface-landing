import Image from "next/image";

import {Quote} from "lucide-react";
import Area from "@/app/components/Area";
import Card from "@/app/components/Card";

export default function Testimonials() {
    return (

        <Area className="bg-container-gray ">

            <div className="my-16">
                <div className ="flex flex-col  justify-center items-center  text-white h-full gap-8">
                    <div className="text-8xl text-rose-gold opacity-20 font-menu md:text-9xl">
                        Poderosa
                    </div>
                    <h1 className="text-3xl font-bold text-center">O QUE ELAS ESTÃO DIZENDO...</h1>
                    <Quote className=" text-rose-gold" />

                    <div className="flex flex-col md:flex-row gap-8 text-justify">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>

        </Area>
    )
}