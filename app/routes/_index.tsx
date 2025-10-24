import type { MetaFunction } from "react-router";
import Navbar from "~/components/Layout/Navbar";
import Footer from "~/components/Layout/Footer";
import Hero from "~/components/Sections/Hero";
import Services from "~/components/Sections/Services";
import About from "~/components/Sections/About";
import Projects from "~/components/Sections/Projects";
import Contact from "~/components/Sections/Contact";

export const meta: MetaFunction = () => {
  return [
    { title: "Dev Nest - Transform Your Ideas into Reality" },
    { 
      name: "description", 
      content: "Dev Nest helps you bring your ideas alive with expert UI/UX design, website development, and digital solutions." 
    },
    {
      name: "keywords",
      content: "web development, UI/UX design, mobile apps, digital agency, website design"
    }
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}