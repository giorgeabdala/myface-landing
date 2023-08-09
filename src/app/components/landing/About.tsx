import Area from "@/app/components/landing/Area";
import image from "../../../../public/foto1.png"

export default function About () {
    return (
        <Area className="flex bg-container-gray h-container border-t border-zinc-300">

            <div className="flex items-center w-full h-full">
                <img className="hidden md:inline"
                    src={"/foto1.png"}
                    alt={"jovem com cílios deslumbrantes"}
                    />

                <div className="flex flex-col pl-8 items-center w-full">
                   <span className="text-rose-gold opacity-20 font-menu text-9xl">
                            MyFace
                       </span>

                <h1 className="text-white font-title text-4xl -mt-4">
                QUEM SOMOS
                </h1>
                    <h2 className="text-text-normal text-justify text-xl my-4 items-center w-full xl:w-3/4">
                O studio para criar uma imagem luxuosa. Aqui, a expertise no ramo garante que cada mulher seja única e deslumbrante! Trabalhamos com materiais de altíssima qualidade, estabelecendo um novo padrão de beleza!
                </h2>
                </div>

            </div>
        </Area>


    )
}