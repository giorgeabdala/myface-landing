import Area from "@/app/components/Area";

export default function About () {
    return (
        <Area className="flex bg-container-gray  border-t border-zinc-300">

            <div className="flex items-center my-16 md:gap-8">
                <img className="hidden md:inline"
                    src={"/foto1.png"}
                    alt={"jovem com cílios deslumbrantes"}
                    />

                <div className="flex flex-col items-center w-full">
                   <span className="text-8xl text-rose-gold opacity-20 font-menu md:text-9xl">
                            MyFace
                       </span>

                <h1 className="text-white font-title text-4xl -mt-2">
                QUEM SOMOS
                </h1>
                    <h2 className="text-text-normal text-justify text-xl mt-4 leading-snug items-center w-full xl:w-3/4">
                O studio para criar uma imagem luxuosa. Aqui, a expertise no ramo garante que cada mulher seja única e deslumbrante! Trabalhamos com materiais de altíssima qualidade e  um novo padrão de beleza!
                </h2>
                </div>

            </div>
        </Area>


    )
}