"use client"
import Typewriter from 'typewriter-effect';
import Image from "next/image";
import { RiSearchFill } from "react-icons/ri";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { loadSlim } from "tsparticles-slim";
import NewSliderHero from "./swiper/heroslider";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const particlesInit = async (engine) => {
  console.log("Particles Init");
  await loadSlim(engine);
};

const Hero = () => {
  return (
    <section
      className="relative flex font-Gotham bg min-h-screen h-max bg-hero bg-cover w-full"
      id="Home"
    >
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
              parallax: { enable: true, force: 60, smooth: 10 }
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
      />

      <motion.div 
        className="flex flex-col md:flex-row py-32 space-y-5 md:space-y-0 px-16 md:px-28 w-full full md:space-x-72 items-center justify-start md:justify-between relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex-col space-y-3 items-start text-center md:text-left text-balance justify-center">
              <div className='flex text-5xl font-bold w-full text-center'>
                  <Typewriter
            options={{
              strings: ['Web Developer', 'AI Prompter', 'UI Designer', 'Illustrator'],
              autoStart: true,
              loop: true,
            }}
           
          />
            </div>
          <p className="flex text-sm text-white">
            Halo, saya Nanda Sofian. Saya bekerja sebagai programmer di
            PT.SahabatKomodo. Saya fokus pada pengembangan Sistem Front End.
            Saya senang bisa berbagi pengetahuan tentang Cara memberi prompt
            kepada chatgpt.
          </p>
        </div>
        <div className="flex flex-col h-64 space-y-10 items-center relative w-full">
          <div className="items-center h-full w-full flex flex-col">
            <h1 className="flex font-medium uppercase text-center text-white text-3xl ">
              My Project
            </h1>
            <NewSliderHero />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
