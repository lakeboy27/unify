import React from 'react'; 
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Markey from './components/Markey';
import About from './components/About' ; 
import Eyes from './components/Eyes'
import Features from './components/Features';
import Cards from './components/Cards';
import Footer from './components/Footer' ;
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import LocomotiveScroll from 'locomotive-scroll';
import Login from './components/Login';
import Line from './components/Line' ;
import { ImOpt } from 'react-icons/im';
// import Intro from './components/Intro';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  
  return (
    // <ReactLenis root>{
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        < Login />
        < Navbar />
        <Landingpage />
        <Markey />
        <About /> 
        <Eyes />
        <Features />
        <Cards />
        <Footer />
        <Line />
        {/* <Intro /> */}
    </div>
    // }</ReactLenis>
    
  )
}

export default App ; 