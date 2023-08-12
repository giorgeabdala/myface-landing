
import Image from "next/image";
import Area from "@/app/components/Area";

export default function Details () {
    return (
        <Area className="flex bg-white  border-t border-zinc-300">

            <div className="flex flex-col text-xs justify-between mb-16 w-full text-rose-gold-bold lg:text-xl">
                <div className="grid grid-cols-2  md:grid-cols-4">
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Olhos sempre bonitos</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Dispense a Maquiagem</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>Cola Hipoalergênica</h1>
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