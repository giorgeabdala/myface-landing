'use client'

import {Button, CloseButton, Group} from "@mantine/core";
import Area from "@/app/components/Area";

const separator = "......................................................................";

const services = [
    {
        title: "VOLUME BRASILEIRO",
        price: "R$120,00",
        description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
    },
    {
        title: "VOLUME BRASILEIRO",
        price: "R$120,00",
        description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
    },
    {
        title: "VOLUME BRASILEIRO",
        price: "R$120,00",
        description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
    },
    {
        title: "VOLUME BRASILEIRO",
        price: "R$120,00",
        description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
    },
];

export default function Book() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Area className="flex bg-white ">
            <div className=" mb-72">
                <div className="flex flex-col items-center ">
                    <div className="flex mt-60 gap-6">
                        <h1 className="text-black font-title text-4xl">
                            SERVIÇOS
                        </h1>
                        <div className="flex flex-col items-start ">
                            <div>
                                <h2 className="text-black text-xl">
                                    {services[0].title}<span className="text-text-normal">{separator}</span>
                                    <span className="text-rose-gold">{services[0].price}</span>
                                </h2>
                                <span className="text-zinc-500">{services[0].description}</span>
                                <h2 className=" text-black text-xl mt-8">
                                    {services[1].title}<span className="text-text-normal">{separator}</span>
                                    <span className="text-rose-gold">{services[0].price}</span>
                                </h2>
                                <span className="text-zinc-500">{services[0].description}</span>
                                <h2 className=" text-black text-xl mt-8">
                                    {services[2].title}<span className="text-text-normal">{separator}</span>
                                    <span className="text-rose-gold">{services[0].price}</span>
                                </h2>
                                <span className="text-zinc-500">{services[0].description}</span>
                                <h2 className=" text-black text-xl mt-8">
                                    {services[3].title}<span className="text-text-normal">{separator}</span>
                                    <span className="text-rose-gold">{services[0].price}</span>
                                </h2>
                                <span className="text-zinc-500">{services[0].description}</span>
                            </div>
                            <Button className="mt-10 text-white bg-black" color="dark">
                                Agende Agora!
                            </Button>
                        </div>
                    </div>
                    <span className="text-rose-gold opacity-20 font-menu text-9xl -mt-80  ">
                    Agende Agora!
                </span>
                </div>
            </div>

    </Area>

    )
}