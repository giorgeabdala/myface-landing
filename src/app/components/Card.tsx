

interface CardProps {
    text: string
    name: string
}

export default function Card (props: CardProps) {
    return (
            <div className="p-6 rounded-lg bg-zinc-800">
                <p className="leading-loose text-gray-300">
                    {props.text}
                </p>
                <div className="flex items-center mt-6">
                        <div className="mx-4">
                            <h1 className="font-semibold text-rose-gold">{props.name}</h1>
                        </div>
                </div>
            </div>
                )
}