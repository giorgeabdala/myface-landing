import Image from "next/image";
import Area from "@/app/components/Area";

export default function Details () {
    return (
        <Area className="flex bg-white border-zinc-300">

            <div className="flex flex-col text-xs sm:text-xl justify-between mb-16 text-rose-gold-bold">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Acordar pronta</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Dispensa maquiagem</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Olhar sensual</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Olhos sempre bonitos</h1>
                    </div>
                </div>


                
                <div className="flex mt-20 justify-center">
                    <Image src={"/foto2s.png"} alt={"foto de cílios antes e depois"}
                            width={1000} height={1000} />

                </div>
            </div>



        </Area>


    )
}