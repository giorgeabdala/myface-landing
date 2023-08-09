
import { BsWhatsapp } from "react-icons/bs";
import {Instagram, PhoneCall} from "lucide-react";


export default function Contacts() {
    return (
        <div className="flex mt-8 justify-between items-center w-full">
            <div
                id="redes_sociais"
                className="flex gap-4 text-rose-gold "
            >
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Instagram className=" hover:text-white cursor-pointer" size="38" />
                <BsWhatsapp className=" hover:text-white cursor-pointer" size="38" />
            </div>
            <img
                className="mx-auto"
                src={"/logos.png"}
                alt={"Logo do estúdio de extensão de cílios MyFace Designer em curitiba Bairro Alto "}
                width={200}
                height={200}
            />
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <PhoneCall
                id="telefone"
                className="text-rose-gold hover:text-white cursor-pointer flex-shrink-0"
                size="38"
            />
        </div>


    );
}
