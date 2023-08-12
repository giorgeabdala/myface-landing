import SocialMedia from "@/app/components/SocialMedia";
import Link from "next/link";


export default function Contacts() {
    return (
        <section className="bg-transparent">
            <div id="contact" className="container px-6 py-12 mx-auto ">
                <div>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl text-rose-gold">MyFace Designer</h1>

                    <p className="mt-3 text-gray-400">O amor em forma de extensão de cílios.</p>
                </div>



                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">

                        <SocialMedia />


                        <div>


                        <Link href="https://www.google.com/maps?ll=-25.404215,-49.205473&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.+Rio+Xingu,+625+-+Bairro+Alto+Curitiba+-+PR+82840-300" >
                           <span className="inline-block p-3 text-rose-gold rounded-full bg-gray-800">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                  stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                        </svg>
                                </span>

                        </Link>


                            <h2 className="mt-4 text-base font-medium text-white">Endereço:</h2>
                            <p className="mt-2 text-sm text-rose-gold">Rua Rio Xingu, 625 sobrado 8</p>
                            <p className="mt-2 text-sm text-rose-gold">Bairro Alto - Curitiba PR</p>

                        </div>

                        <div>
                    <span className="inline-block p-3 text-rose-gold rounded-full bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>
                    </span>

                            <h2 className="mt-4 text-base font-medium text-white">Telefone</h2>
                            <p className="mt-2 text-sm text-gray-400">Seg-Sab das 8am até 18pm.</p>
                            <p className="mt-2 text-sm text-rose-gold">(41) 99846-4496</p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight={0} marginWidth={0}
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.017926357503!2d-49.208047823632015!3d-25.404210531873627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5f5d30da5b7%3A0xce15c12d99ac100f!2sR.%20Rio%20Xingu%2C%20625%20-%20Bairro%20Alto%2C%20Curitiba%20-%20PR%2C%2082840-300!5e0!3m2!1spt-BR!2sbr!4v1690573215215!5m2!1spt-BR!2sbr"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}