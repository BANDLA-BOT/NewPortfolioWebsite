import About from "./components/About"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}

export default App
