"use client";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const VideoCarousel = dynamic(() => import('./VideoCarousel'), {ssr: false})


// import VideoCarousel from './VideoCarousel'
import { rightImg, watchImg } from "@/public/utils";
import Image from "next/image";
import dynamic from "next/dynamic";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image height={22} width={22} src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <Image height={16} width="auto" src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights