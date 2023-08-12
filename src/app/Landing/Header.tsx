import Menu from "@/app/components/Menu";
import Area from "@/app/components/Area";


export default function Header() {
    return (
        <Area className="bg-black  z-50">
            <div className="flex items-center justify-center  ">
                <Menu />
            </div>

        </Area>
    )

}