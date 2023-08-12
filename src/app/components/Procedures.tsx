

interface ProceduresProps {
    name: string;
    price: string;
    description: string;
}
export default function Procedures(props: ProceduresProps) {
    return (
        <div
            className="flex items-center justify-between max-w-2xl px-2 py-4 mx-auto border  rounded-xl ">
            <div className="flex items-center">

                <div className="flex flex-col  mx-2 space-y-1">
                    <h2 className="text-lg font-medium text-gray-700 sm:text-2xl ">{props.name}</h2>

                    <div
                        className="text-xs text-rose-gold  rounded-full sm:px-4 sm:py-1 ">
                        {props.description}
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl ">R${props.price} </h2>
        </div>
    )
}