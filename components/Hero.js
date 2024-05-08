"use client";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Video from 'next-video'
import { heroVideo,smallHeroVideo } from '@/utils';
import { useEffect, useState } from 'react';
const Hero = () => {
    // const [videoSrc, setVideoSrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo)
    const [videoSrc, setVideoSrc] = useState(heroVideo)
    useEffect(() => {
        handleVideoSrcSet
        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    })
    const handleVideoSrcSet = () => {
        setVideoSrc(window.innerWidth > 760 ? heroVideo : smallHeroVideo);
    }
    useGSAP(()=>{
        gsap.to('#hero',{opacity:1,duration:2})
        gsap.to('#cta',{opacity:1,y:0,duration:2,delay:1.5})
    },[])
  return (
    <section className="w-full nav-height relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="hero" className="hero-title"> iPhone 15 Pro</p>
            <div className="md:w-10/12 w-9/12 overflow-hidden">
                <Video src={videoSrc} autoPlay muted playsInline={true} controls={false} key={videoSrc} preLoad="none" className="z-[-1]"/>
            </div>

        </div>
        <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
            <a href="#highlights" className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $1999/month or $999</p>
        </div>
    </section>
  )
}

export default Hero