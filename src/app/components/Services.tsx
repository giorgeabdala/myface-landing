import Procedures from "@/app/components/Procedures";
import {Button} from "@mantine/core";
import ButtonPrimary from "@/app/components/ButtonPrimary";


export default function Services() {

    const services = [
        {
            name: "Volume Brasileiro",
            price: "120,00",
            description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
        },
        {
            name: "Volume Brasileiro",
            price: "120,00",
            description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
        },
        {
            name: "Volume Brasileiro",
            price: "120,00",
            description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
        },
        {
            name: "Volume Brasileiro",
            price: "120,00",
            description: "1 artificial one is superimposed on each of its eyelashes. Duration 1.5-2 hours",
        },
    ];


    return (
        <div className="bg-transparent ">
            <div className="container px-6 py-8 mx-auto">


                <h1 className="mt-4 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">Serviços</h1>

                <div className="mt-6 space-y-8 xl:mt-12">

                    <Procedures name={services[0].name} price={services[0].price} description={services[0].description}/>
                    <Procedures name={services[1].name} price={services[1].price} description={services[1].description}/>
                    <Procedures name={services[2].name} price={services[2].price} description={services[2].description}/>
                    <Procedures name={services[3].name} price={services[3].price} description={services[3].description}/>


                    <div className="flex justify-center">
                        <ButtonPrimary text={"Agende Agora!"} />
                    </div>
                </div>
            </div>
        </div>
    )

}