import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <div className=" p-4 m-4 rounded-xl shadow-lg  min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-3xl mx-auto p-6 flex-grow">
        <Header></Header>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
