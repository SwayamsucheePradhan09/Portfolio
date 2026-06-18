import ScrollNav from "../components/ScrollNav"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"

export default function Home(){
  return(
    <main className="relative bg-[#050505] min-h-screen selection:bg-blue-600 selection:text-white pb-32">
      <ScrollNav/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certifications/>
      <Contact/>
    </main>
  )
}