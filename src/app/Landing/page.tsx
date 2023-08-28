import Header from "@/app/Landing/Header";
import Pagina from "@/app/components/Pagina";
import Logo from "@/app/Landing/Logo";
import About from "@/app/Landing/About";
import Works from "@/app/Landing/Works";
import Book from "@/app/Landing/Book";
import Testimonials from "@/app/Landing/Testimonials";
import Footer from "@/app/Landing/Footer";
import Contacts from "@/app/Landing/Contacts";
import Benefits from "@/app/Landing/Benefits";

export default function Landing() {
    return (
        <Pagina >
            <Header />
            <Logo  />
            <About />
            <Benefits />
            <Works />
            <Book />
            <Testimonials />
            <Contacts />
            <Footer />
        </Pagina>
    )
}