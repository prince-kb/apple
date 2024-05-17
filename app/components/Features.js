"use client";
import { explore1Img, explore2Img, exploreVideo } from '@/public/utils';
import { animateWithGSAP } from '@/public/utils/animations';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react'

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
          scrollTrigger: {
            trigger: '#exploreVideo',
            toggleActions: 'play pause reverse restart',
            start: '-10% bottom',
          },
          onComplete: () => {
            videoRef.current.play();
          }
        })
    
        animateWithGSAP('#features_title', { y:0, opacity:1})
        animateWithGSAP(
          '.g_grow',
          { scale: 1, opacity: 1, ease: 'power1' },
          { scrub: 5.5 }
        );
        animateWithGSAP(
          '.g_text',
          {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
        )
      }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
        <div className="screen-max-width">
            <div className="mb-12 w-full">
                <h1 id="features_title" className='section-heading'>Explore the full story.</h1>
            </div>
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="mt-32 mb-24 pl-24">
                    <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                    <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in Titanium.</h2>
                </div>
                <div className="flex-center flex-col sm:px-10" >
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video src={exploreVideo} type="video/mp4" id='exploreVideo' className='h-full w-full object-cover object-center' preload='none' muted autoPlay ref={videoRef} playsInline={true}/>
                    </div>
                    <div className="flex flex-col w-full relative">
                        <div className="feature-video-container">
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <Image src={explore1Img} alt='Titanium' className='feature-video g_grow' height="full" width="auto"/>
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <Image src={explore2Img} alt='Titanium2' className='feature-video g_grow' height="full" width="auto"/>
                            </div>
                        </div>
                        <div className="feature-text-ceonatiner gap-2">
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">iPhone !5 Pro is {' '}
                                <span className='text-white'>the first iPhone to feature an aerospace-grade titanium design</span>,
                                using the same alloy that spacecrafts use for missions to Mars.</p>
                            </div>
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">Titanium has one of the best strength-to-weight ratios of any metal, making these our{' '}
                                <span className='text-white'> lightest Pro models ever.</span>,
                                You will know the difference, the moment you picked one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Features