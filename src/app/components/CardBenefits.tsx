import Image from "next/image";


interface CardBenefitsProps {
    title: string,
    text: string,
    ordinal: number
}

export default function CardBenefits(props: CardBenefitsProps) {
    return (
        <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg bg-zinc-700 ">
            <div className="my-4">
                <h1 className="block text-2xl font-bold text-rose-300  text-center mx-8 lg:mr-8">{props.title.toUpperCase()} </h1>

                <div className="flex justify-center items-center ">
                    <div className="hidden lg:flex text-6xl opacity-20 text-rose-gold-bold mx-8">
                        #{props.ordinal}
                    </div>

                    <div className="flex flex-col py-5 text-center gap-4 ">

                        <span className="text-xl text-gray-200 leading-snug text-justify mx-8 lg:mx-4 lg:mr-8"  >{props.text}</span>
                    </div>

                </div>
            </div>


        </div>

    )
}