import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Credentials from "@/components/Credentials";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Credentials />
      <Calculator />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}