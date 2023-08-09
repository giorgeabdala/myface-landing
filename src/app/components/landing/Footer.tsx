import Area from "@/app/components/landing/Area";
import Menu from "@/app/components/landing/Menu";
import Maps from "@/app/components/landing/Maps";
import Contacts from "@/app/components/landing/Contacts";

export default function Footer() {
    return (
        <Area className="flex bg-transparent h-container border-zinc-300 items-center">
            <div className="flex flex-col w-full h-full gap-y-4 items-center">
                <Contacts />
                <Maps className="border-t rounded flex-grow-0 " />
                <div className="flex flex-col justify-center items-center text-rose-gold text-xl">
                    <h1>Mara Silva</h1>
                    <h2>Especialista em Cílios</h2>
                </div>

            </div>

        </Area>
    );
}
