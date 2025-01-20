"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const DesignPortSection = () => {
  return (
    <section className="flex flex-col items-center space-y-16 py-10 bg-black max-h-max font-Gotham h-max w-full">
      <div className="flex md:flex-row space-y-3 flex-col justify-between w-full h-max px-10">
        <h1 className="text-5xl font-bold max-w-80">DESIGN PORTFOLIO</h1>
        <p className="max-w-72 font-light">
          Semua Design yang saya buat dan menggunakan aplikasi Figma dan editing lain seperti Canva.
        </p>
      </div>

      <div className="overflow-hidden flex flex-col my-5 md:my-10 h-96 bg-contour-patern  bg-opacity-20 bg-center bg-contain bg-no-repeat items-center  w-full">
        <motion.div
          className="flex shadow-lg"
          animate={{
            x: ['100%', '-300%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25, 
              ease: 'linear', 
            },
          }}
        >
          <img
            src="/assets/content/design1.png"
            alt="Gambar Berjalan"
            className="w-auto h-96 bg-cover md:h-[488px] flex-shrink-0"
          />
          <img
            src="/assets/content/design2.jpg"
            alt="Gambar Berjalan"
            className="w-auto h-96 bg-cover md:h-[488px] flex-shrink-0"
          />
          <img
            src="/assets/content/design3.jpg"
            alt="Gambar Berjalan"
            className="w-auto h-96  bg-cover md:h-[488px] flex-shrink-0"
          />
        </motion.div>
      </div>
        <div className='button-wraper space-x-8 flex'>
            <button className='bg-transparent border py-2 px-5 transition-all duration-300 hover:scale-110  text-sm text-white rounded-lg'>See in Dribble</button>
            <button className='bg-white py-2 px-5 transition-all duration-300 hover:scale-110  text-sm text-black rounded-lg'>See in Figma</button>
        </div>
    </section>
  );
};

export default DesignPortSection;
