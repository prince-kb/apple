// import Hero from '@/app/components/Hero'
import dynamic from 'next/dynamic'
import Highlights from '@/app/components/Highlights'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import Footer from './components/Footer'
// import HowItWorks from './components/HowItWorks'
// import Features from './components/Features'
// import Model from './components/Model'
const Hero = dynamic(() => import('@/app/components/Hero'), {ssr: false})
const Model = dynamic(() => import('@/app/components/Model'), {ssr: false})
const Features = dynamic(() => import('@/app/components/Features'), {ssr: false})
const HowItWorks = dynamic(() => import('@/app/components/HowItWorks'), {ssr: false})

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        <Footer/>
        
    </main>
  )
}

export default App