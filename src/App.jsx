import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Hero from './componants/Hero/Hero'
import Tittle from './componants/Tittle/Tittle'
import Program from './componants/Program/Program'
import Aboutus from './componants/Aboutus/Aboutus'
import Campus from './componants/Campus/Campus'
import Testimonials from './componants/Testimonials/Testimonials'
import Contact from './componants/Contact/Contact'
import Footer from './componants/Footer/Footer'
import Videoplayer from './componants/Videoplayer/Videoplayer'
import { useState } from 'react'


function App() {

  const [video, setvideo] = useState(false);
  return (
    <div>
    
    <Navbar/>
    <Hero/>
    <Tittle tittle='our programs' subtittle='what we offer' />
    <Program/>
    <Aboutus setvideo = {setvideo} />
    <Tittle tittle='Gallery' subtittle='Campus Photos' />
    <Campus/>
    <Tittle tittle='TESTIMONIALS' subtittle='What Student Says' />
    <Testimonials/>
    <Tittle tittle='Contact Us' subtittle='Get in Touch' />
    <Contact/>
    <Footer/>
    
    <Videoplayer video = {video} setvideo = {setvideo} />
    </div>
  )
}

export default App
