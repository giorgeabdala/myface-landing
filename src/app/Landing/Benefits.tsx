import Area from "@/app/components/Area";
import CardBenefits from "@/app/components/CardBenefits";


export default function Benefits () {
    const benefits = [
        {
            title: "Acorde pronta",
            text: " Diga ADEUS ao rímel e à máscara de cílios! Acorde com cílios perfeitos todas as manhãs e economize tempo na sua rotina. " +
                "Com extensões de cílios, acorde com um olhar irresistível todos os dias e ganhe aqueles preciosos minutos a mais pela manhã."

        },
        {
            title: "Sua Expressão, sua assinatura",
            text: "Realce a sua beleza natural e revele sua singularidade. Ao combinar extensões de cílios e design de sobrancelhas, você cria um visual que brilha sem precisar de mais nada."

        },
        {
            title: "Durabilidade e comodidade",
            text: "Esqueça a rotina  de colocar e retirar cílios postiços. As extensões duram semanas, mantendo seu olhar incrível sem a necessidade de cuidados constantes."

        },
        {
            title: "Personalização sob medida",
            text: "Escolha entre diversos estilos: mais cheios, menos volumosos, extra longos. Com opções como o método fio a fio, " +
                "Volume Russo e Volume Brasileiro, há um procedimento perfeito para cada preferência."
        },
        {
            title: "Autoestima elevada",
            text: "Imagine olhar no espelho e ser saudada por cílios exuberantes. As extensões de cílios não só realçam a sua beleza, mas também elevam a sua autoestima."
        },
        {
            title: "Cílios Que contam Histórias",
            text: "Não importa o volume ou a quantidade dos seus cílios naturais, estou aqui para dar vida à história da sua beleza. Com as extensões, seus cílios ganham vida a cada piscar de olhos."
        },
        {
            title: "O FATOR UAU",
            text: "Sabe aquele impacto que você gosta de causar? Nossas extensões de cílios criam um efeito \"uau\" até nos cílios mais curtos e ralos." +
                "  Desperte a curiosidade e conquiste a admiração de todos com um olhar realmente marcante."
        }
    ]



    return (
        <Area className="flex bg-container-gray border-t border-zinc-300">
            <div id="benefits" className="grid grid-cols-1 items-center justify-items-center my-8 mb-20 w-full gap-8 lg:mx-8">
                <div className="text-4xl text-white font-title my-8">BENEFÍCIOS</div>
                <CardBenefits title={benefits[0].title} text={benefits[0].text} ordinal={1}/>
                <CardBenefits title={benefits[1].title} text={benefits[1].text} ordinal={2}/>
                <CardBenefits title={benefits[2].title} text={benefits[2].text} ordinal={3}/>
                <CardBenefits title={benefits[3].title} text={benefits[3].text} ordinal={4}/>
                <CardBenefits title={benefits[4].title} text={benefits[4].text} ordinal={5}/>
                <CardBenefits title={benefits[5].title} text={benefits[5].text} ordinal={6}/>
                <CardBenefits title={benefits[6].title} text={benefits[6].text} ordinal={7}/>
            </div>
        </Area>


    )
}