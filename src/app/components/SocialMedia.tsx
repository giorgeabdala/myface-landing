import {Instagram} from "lucide-react";
import {BsWhatsapp} from "react-icons/bs";


export default function SocialMedia() {
    return (
        <div
            id="redes_sociais"
            className="flex gap-4 text-rose-gold "
        >
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Instagram className=" hover:text-white cursor-pointer" size="34" />
            <BsWhatsapp className=" hover:text-white cursor-pointer" size="34" />
        </div>
    )
}