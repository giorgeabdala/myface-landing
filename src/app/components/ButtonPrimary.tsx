import {Button} from "@mantine/core";
import Link from "next/link";

interface PropsButton {
    text: string
    link?: string
}

export default function ButtonPrimary(props: PropsButton) {
    return (
        <Link href={props.link ?? ''}>
        <Button className="mt-10  bg-rose-gold-bold text-white " color="dark">
            {props.text}
        </Button>
            </Link>
    )

}