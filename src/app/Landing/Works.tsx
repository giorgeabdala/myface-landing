
import Image from "next/image";
import Area from "@/app/components/Area";


export default function Works() {
    return (
        <Area className="flex bg-container-gray h-container-g  border-zinc-300">
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-col">
                    <span className="text-8xl opacity-10 text-rose-gold font-menu lg:text-9xl">Olhar Marcante</span>
                    <h1 className="text-white font-title text-4xl ">NOSSOS TRABALHOS</h1>
                    <span className="text-text-normal text-xl text-justify my-4 items-center w-full md:w-1/2 ">
                        Se você tem cílios curtos e raros, então a extensão de cílios é o que você precisa. Pode ver o resultado do nosso trabalho na galeria.
                    </span>
                </div>

                <div className="grid grid-cols-4 gap-4 lg:gap-x-28 lg:gap-y-9 z-10">
                    <img className="rounded" src={"/works/work1.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work2.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work3.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work4.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work5.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work6.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work7.png"} alt={"foto de cílios antes e depois"} />
                    <img className="rounded" src={"/works/work8.png"} alt={"foto de cílios antes e depois"} />

                </div>

                <div className="flex justify-center mt-5 z-10 w-full lg:justify-between ">
                    <Image className="rounded" src={"/works/work9.png"} alt={"foto de cílios antes e depois"} width={580} height={450} />
                    <Image className="rounded hidden lg:inline" src={"/works/work10.png"} alt={"foto de cílios antes e depois"} width={580} height={450} />
                </div>



            </div>
        </Area>


    )
}