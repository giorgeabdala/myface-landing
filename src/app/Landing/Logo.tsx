import Image from "next/image";
import Area from "@/app/components/Area";



export default function Logo() {
    return (

        <Area className="bg-transparent">
            <div className="flex justify-center">
                <Image src={"/logos.png"} alt={"logomarca do studio de lash design MyFace localizado no bairro alto em Curitiba paraná"}
                       width={1000} height={1000} />

            </div>
        </Area>
    )
}