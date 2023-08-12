import Area from "@/app/components/landing/Area";
import Menu from "@/app/components/landing/Menu";


export default function Header() {
    return (
        <Area className="bg-transparent  z-50">
            <div className="flex items-center justify-center h-20 ">
                <Menu />
            </div>

        </Area>
    )

}