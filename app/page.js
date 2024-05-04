import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Navbar from '@/components/Navbar'
import React from 'react'

const App = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Highlights/>
    </main>
  )
}

export default App