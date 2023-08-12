
import Image from "next/image";
import Area from "@/app/components/Area";

export default function Details () {
    return (
        <Area className="flex bg-white h-container-g border-t border-zinc-300">

            <div className="flex flex-col justify-between w-full text-rose-gold-bold">
                <div className="grid grid-cols-2  md:grid-cols-4">
                    <div>
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>OLHOS SEMPRE BONITOS</h1>
                    </div>
                    <div>
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>DISPENSE A MAQUIAGEM</h1>
                    </div>
                    <div>
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1> COLA HIPOALERGÊNICA</h1>
                    </div>
                    <div>
                        <Image src={"/icon/lashIcon.png"} alt={"ícone de cílios"} width={200} height={200} />
                        <h1>OLHOS SEMPRE BONITOS</h1>
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