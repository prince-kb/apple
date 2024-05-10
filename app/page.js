import Hero from '@/app/components/Hero'
import Highlights from '@/app/components/Highlights'
import Navbar from '@/app/components/Navbar'
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