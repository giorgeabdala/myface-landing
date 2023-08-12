import Header from "@/app/Landing/Header";
import Pagina from "@/app/components/Pagina";
import Logo from "@/app/Landing/Logo";
import About from "@/app/Landing/About";
import Details from "@/app/Landing/Details";
import Works from "@/app/Landing/Works";
import Book from "@/app/Landing/Book";
import Testimonials from "@/app/Landing/Testimonials";
import Footer from "@/app/Landing/Footer";
import Contacts from "@/app/Landing/Contacts";


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
            <Contacts />
        </Pagina>
    )
}