import {Button} from "@mantine/core";

interface PropsButton {
    text: string
}

export default function ButtonPrimary(props: PropsButton) {
    return (
        <Button className="mt-10  bg-rose-gold-bold text-white " color="dark">
            {props.text}
        </Button>
    )

}