import React from 'react'
import Header from '../components/layout/Header'
import HeroText from '../components/hero/HeroText'
import hero from "../assets/hero/heroImg.svg"

const Hero = () => {
  return (
    <div id="home" className='bg-[#E2BDFF] flex flex-col lg:justify-between lg:h-screen w-screen'>
        <Header/>
        <div className='lg:flex justify-between'>
          <HeroText/>
          <div className='lg:w-1/2 lg:flex'>
            <img src="" className='w-full' alt="" /> {/* n esqueça de colocar novamente o {} se for adicionar img */}
          </div>
        </div>
    </div>
  )
}

export default Hero