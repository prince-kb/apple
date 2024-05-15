// import Hero from '@/app/components/Hero'
import Highlights from '@/app/components/Highlights'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import dynamic from 'next/dynamic'
import Features from './components/Features'
// import Model from './components/Model'
const Hero = dynamic(() => import('@/app/components/Hero'), {ssr: false})
const Model = dynamic(() => import('@/app/components/Model'), {ssr: false})


const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        
    </main>
  )
}

export default App