import Pagina from "@/app/components/Pagina";
import Header from "@/app/components/landing/Header";
import Area from "@/app/components/landing/Area";
import Image from "next/image";
import Logo from "@/app/components/landing/Logo";
import About from "@/app/components/landing/About";
import Details from "@/app/components/landing/Details";
import Works from "@/app/components/landing/Works";
import Book from "@/app/components/landing/Book";
import Footer from "@/app/components/landing/Footer";
import Testimonials from "@/app/components/landing/Testimonials";
import Maps from "@/app/components/landing/Maps";


export default function Landing() {
    return (
        <Pagina >
            <Header />
            <Logo  />
            <About />
            <Details />
            <Works />
            <Book />
            <Testimonials />
            <Footer />
        </Pagina>
    )
}