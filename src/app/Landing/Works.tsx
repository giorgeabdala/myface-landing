
import Image from "next/image";
import Area from "@/app/components/Area";
import work1 from "../../../public/works/work1.jpg";
import work2 from "../../../public/works/work2.jpg";
import work3 from "../../../public/works/work3.jpg";
import work4 from "../../../public/works/work4.jpg";
import work5 from "../../../public/works/work5.jpg";
import work6 from "../../../public/works/work6.jpg";
import work7 from "../../../public/works/work7.jpg";
import work8 from "../../../public/works/work8.jpg";
import work9 from "../../../public/works/work9.jpg";
import work10 from "../../../public/works/work10.jpg";

export default function Works() {
    return (
        <Area className="flex bg-container-gray border-zinc-300">
            <div className="flex flex-col gap-2 md: my-5">
                <div className="flex flex-col">
                    <span className="text-7xl opacity-10 text-rose-gold font-menu lg:text-9xl">Olhar Marcante</span>
                    <h1 className="text-white font-title text-lg ">DESCUBRA A BELEZA DO SEU OLHAR</h1>
                    <span className="text-text-normal text-xl text-justify my-4 items-center w-full ">
                        Revele a verdadeira expressão do seu olhar com as nossas extensões de cílios cuidadosamente projetadas.
                        Transformamos cílios curtos e raros em obras de arte deslumbrantes. Explore a galeria abaixo e encante-se com a magia que podemos criar para realçar a sua beleza única.
                    </span>
                </div>

                <div className="grid grid-cols-4 gap-4  z-10">
                    <Image className="rounded" src={work1} alt={"foto de extensão de volume brasileiro linda feita pelo studio My Face Designer"} />
                    <Image className="rounded" src={work2} alt={"extensão de cílios volume brasileiro feita pelo studio MyFace em curitiba"} />
                    <Image className="rounded" src={work3} alt={"extensão de cílios volume russo feita pelo studio My Face em curitiba no bairro alto"} />
                    <Image className="rounded" src={work4} alt={"extensão de cílios  volume russo pelo studio MyFace em curitiba"} />
                    <Image className="rounded" src={work5} alt={"extensão de cílios volume brasileiro feita pelo studio MyFace em curitiba"} />
                    <Image className="rounded" src={work6} alt={"foto de extensão de cílios linda feita pelo studio My Face Designer"} />
                    <Image className="rounded" src={work7} alt={"extensão de cílios perfeita feita pelo studio MyFace em curitiba"} />
                    <Image className="rounded" src={work8} alt={"extensão de cílios volume russo feita pelo studio My Face em curitiba no bairro alto"} />
                </div>

                <div className="flex justify-center mt-2 z-10 w-full lg:justify-between ">
                    <Image className="rounded" src={work9} alt={"foto de cílios antes e depois"} width={580} height={450} />
                    <Image className="rounded hidden lg:inline" src={work10} alt={"foto de cílios antes e depois"} width={580} height={450} />
                </div>



            </div>
        </Area>


    )
}