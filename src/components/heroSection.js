"use client"
import Image from "next/image";
import { RiSearchFill } from "react-icons/ri";
import { motion } from "framer-motion";
import NewSliderHero from "./swiper/heroslider";

const Hero = () => {
  return (
    <section
      className="flex font-Gotham bg min-h-screen h-max bg-hero bg-cover w-full"
      id="Home"
      
    >
      <motion.div  className="flex flex-col md:flex-row py-32 space-y-5 md:space-y-0 px-16 md:px-28 w-full full md:space-x-72 items-center justify-start md:justify-between" 
      initial={{ opacity: 0, y: 50 }} // Animasi awal
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }} >
        <div className="flex-col space-y-3 items-start text-center md:text-left text-balance justify-center">
          <div className="search-bar px-3 md:hidden flex justify-between mb-16 items-center md:right-0 border rounded-lg">
            <input
              type="search"
              placeholder="Search Here..."
              className="py-2 bg-transparent"
            ></input>
            <RiSearchFill className="text-white text-2xl" />
          </div>
          <h1 className="flex text-7xl">Web Developer</h1>
          <p className="flex text-sm">
            Halo, saya Nanda Sofian. Saya bekerja sebagai programmer di
            PT.SahabatKomodo. Saya fokus pada pengembangan Sistem Front End.
            Saya senang bisa berbagi pengetahuan tentang Cara memberi prompt
            kepada chatgpt.
          </p>
        </div>
        <div className="flex flex-col h-64 space-y-10 items-center relative w-full">
          <div className="search-bar md:flex items-center hidden md:right-0 border rounded-lg">
            <input
              type="search"
              placeholder="Search Here..."
              className="p-2 bg-transparent"
            ></input>
            <RiSearchFill className="text-white text-2xl mr-3" />
          </div>
          <div className="items-center h-full w-full flex flex-col">
            <h1 className="flex font-medium uppercase text-center text-3xl md:hidden">
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
