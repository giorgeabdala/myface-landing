import Image from "next/image";
import Area from "@/app/components/Area";
import Link from "next/link";
import ButtonDefault from "@/app/components/Button";
import Config from "@/app/Config";



export default function Logo() {
    return (

        <Area className="bg-transparent">
            <div className="flex justify-center">
                <Image src={"/logos.png"} alt={"logomarca do studio de lash design MyFace localizado no bairro alto em Curitiba paraná"}
                       width={1000} height={1000} />

            </div>

            <div className="flex justify-center mb-20 mt-12">
                <Link href={Config.link_appointment}>
                    <ButtonDefault text={"Agendar Agora!"} />
                </Link>
            </div>
        </Area>
    )
}