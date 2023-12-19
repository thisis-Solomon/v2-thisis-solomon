import About from "./about/About";
import Projects from "./projects/Projects";

export default function Contents(): JSX.Element {
  return (
    <section>
      <About />
      <Projects />
      {/* Contacts or Get in touch */}
    </section>
  );
}
