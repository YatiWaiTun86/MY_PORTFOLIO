import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className="p-4 m-4 rounded-xl shadow-lg min-h-screen flex flex-col relative">
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 flex-grow">
        <Header />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
