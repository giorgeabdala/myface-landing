import {Quote} from "lucide-react";
import Area from "@/app/components/Area";
import Card from "@/app/components/Card";

const testimonials = [
    {
        name: "Josiane Bazan",
        text: "Adoro meu visual com esses cílios maravilhosos. Me sinto linda!!! As pessoas sempre falam que estou " +
            "maravilhsa e eu fico muito feliz!!! A gente adora estar bem né? Parece que tudo melhora na  vida da gente! E é muito prático," +
            "não preciso gastar tempo me maquiando. E como dura, não é? Parece que cada  vez dura mais! Eu A❤️O de paixão. Não sei mais viver sem!!!",
    },
    {
        name: "Michele Fabiana",
        text: "Meus  cílios perfeitos😍. Eu sempre sigo os conselhos e cuidados que a Mara passa. A Durabilidade é muito boaaa.... Eu consigo ficar mais de 30 dias intactos, lindos como no primeiro dia." +
            " Não preciso ficar fazendo manutenção a cada 15 dias. Apaixonada ❤️" ,
    },
    {
        name: "Jackeline Silva",
        text: "Você faz parte da minha vida agora...Restaurou a minha alto estima😀. Obrigada pelo carinho, caprinho, profissionalismo. 🥰🥰🥰"
    }
];

export default function Testimonials() {
    return (
        <Area className="bg-container-gray ">
            <div id="testimonials" className="my-16">
                <div className ="flex flex-col  justify-center items-center  text-white h-full gap-8">
                    <div className="text-8xl text-rose-gold opacity-20 font-menu md:text-9xl">
                        Poderosa
                    </div>
                    <h1 className="text-3xl font-bold text-center">O QUE ELAS ESTÃO DIZENDO...</h1>
                    <Quote className=" text-rose-gold" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-justify justify-between">
                        <Card name={testimonials[0].name} text={testimonials[0].text} />
                        <Card name={testimonials[2].name} text={testimonials[2].text}/>
                        <Card name={testimonials[1].name} text={testimonials[1].text}/>

                    </div>
                </div>
            </div>
        </Area>
    )
}