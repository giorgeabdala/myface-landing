import Procedures from "@/app/components/Procedures";
import ButtonDefault from "@/app/components/Button";
import Link from "next/link";



export default function Services() {

    const services = [
        {
            name: "Volume Brasileiro",
            price: "120,00",
            description: "A sensualidade brasileira para seus olhos. Usando fios em formato de Y, proporciona mais curvatura e volume ao olhar.",
        },
        {
            name: "Volume Egípcio",
            price: "130,00",
            description: "Descubra o encanto do Volume Egípcio. Técnica que usa fios com mais volume, realçando sua beleza natural.",
        },
        {
            name: "Volume Capping",
            price: "160,00",
            description: "Crie um olhar cativante com nossa técnica Volume Camping. O dobro de cílios de um procedimento normal, garantindo um olhar marcante.",
        },

        {
            name: "Mega Volume",
            price: "150,00",
            description: "Transforme seus cílios com o Mega Volume. A técnica mais volumosa, com maior durabilidade para um visual dramaticamente exuberante.",
        },
        {
            name: "Volume Fio a Fio",
            price: "110,00",
            description: "Experimente o Volume Fio a Fio e obtenha um olhar refinado e espontâneo. A técnica mais natural possível.",
        },
        {
            name: "Volume Expert",
            price: "90,00",
            description: "Menos volume e acabamento discreto. Não tem manutenção, ideal para quem quer experimentar o procedimento.",
        },
        {
            name: "Volume Híbrido",
            price: "120,00",
            description: "Experimente o Volume Híbrido e obtenha um olhar refinado. Junção de duas técnicas com mais volume e delicadeza.",
        },

        {
            name: "Manutenção",
            price: "90,00",
            description: "Mantenha seu olhar impecável com nossa manutenção. No máximo 20 dias após o procedimento.",
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
                    <Procedures name={services[4].name} price={services[4].price} description={services[4].description}/>
                    <Procedures name={services[5].name} price={services[5].price} description={services[5].description}/>
                    <Procedures name={services[6].name} price={services[6].price} description={services[6].description}/>
                    <Procedures name={services[7].name} price={services[7].price} description={services[7].description}/>

                    <div className="flex justify-center">
                        <Link href={"https://pro.quaddro.co/myfacedesigner"}>
                        <ButtonDefault text={"Agende Agora!"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}