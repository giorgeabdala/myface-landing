import {Instagram} from "lucide-react";
import {BsWhatsapp} from "react-icons/bs";
import Link from "next/link";


export default function SocialMedia() {
    return (
        <div
            id="redes_sociais"
            className="flex gap-4 text-rose-gold "
        >
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Link href="https://instagram.com/myfacedesigner?igshid=MzRlODBiNWFlZA==">
            <Instagram className=" hover:text-white cursor-pointer" size="34" />
            </Link>
                <Link href="https://api.whatsapp.com/send?phone=5541998464496">
                    <BsWhatsapp className=" hover:text-white cursor-pointer" size="34" />
                </Link>
        </div>
    )
}