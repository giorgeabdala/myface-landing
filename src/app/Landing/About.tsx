import Area from "@/app/components/Area";

export default function About () {
    return (
        <Area className="flex bg-container-gray  border-t border-zinc-300">

            <div className="flex items-center my-16 md:gap-8">
                <img className="hidden lg:inline"
                    src={"/foto1.png"}
                    alt={"mulher poderosa com extensão de cílios"}
                    />

                <div className="flex flex-col items-center w-full">
                   <span className="text-8xl text-rose-gold opacity-20 font-menu md:text-9xl">
                            MyFace
                       </span>


                    <div className="flex flex-col text-text-normal text-justify text-xl mt-4 leading-snug items-center w-full xl:w-3/4 gap-6 mt-8">
                            <p>O studio para criar uma imagem luxuosa. Aqui, a expertise no ramo garante que cada mulher seja única e deslumbrante! </p>

                            <p>Imagine acordar todas as manhãs com olhos radiantes, prontos para conquistar o mundo.  Realce a sua beleza natural, dando vida a cada piscar de olhos. Não deixe que os cílios curtos ou ralos limitem a sua confiança e estilo.</p>
                    </div>
                </div>

            </div>
        </Area>


    )
}