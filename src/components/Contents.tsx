import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";

export default function Contents(): JSX.Element {
  return (
    <section className="md:w-[80%] md:mx-10 px-2 md:px-4">
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
