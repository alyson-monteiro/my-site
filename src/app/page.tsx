import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

 export default function HomePage() {
   return (
     <>
       <Hero />
       <Chatbot/>
       <About />
       <Projects />
       <Contact />
       <Footer />
     </>
   )
 }
