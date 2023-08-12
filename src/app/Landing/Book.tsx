'use client'

import {Button, CloseButton, Group} from "@mantine/core";
import Area from "@/app/components/Area";
import Services from "@/app/components/Services";


export default function Book() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Area className="flex bg-white ">
            <div className="flex  justify-center items-center py-10 sm:mt-32 ">
                    <Services />
            </div>
    </Area>
    )
}