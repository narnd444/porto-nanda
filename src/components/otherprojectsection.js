"use client"
import { Swiper, SwiperSlide } from "swiper";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import NewSwiper1 from "./swiper/otherprojectswiper.js";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const OtherProjectSection =()=>{
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

    return(
        <section className="relative flex flex-col h-max py-10 bg-black space-y-10 md:space-y-20 w-full   transition-all duration-300 items-center font-Gotham text-white">
             <div className="title-wrap  flex">
                <h1 className="text-2xl font-bold">OTHER<span className="text-yellow-400 ">PROJECT</span></h1>
            </div>
            <motion.div ref={ref1} className="slider-wraper w-full  md:space-x-10 px-5 md:px-20 flex justify-center items-center z-10"
             initial="hidden"
             animate={inView1 ? "visible" : "hidden"}
             variants={fadeInVariants}
             transition={{ duration: 0.8, ease: "easeOut" }}>
                <button className="button-prev hidden md:flex text-xs border border-white rounded-full p-3 transition-all duration-300 hover:text-black hover:bg-white"> Back</button>
                    <NewSwiper1/>
                <button className="button-next hidden md:flex text-xs border border-white rounded-full p-3 transition-all duration-300 hover:text-black hover:bg-white"> Next</button>
            </motion.div>
            <div className="space-x-4 flex md:hidden z-20">
            <button className="button-prev text-xs border border-white rounded-full p-3 transition-all duration-300 hover:text-black hover:bg-white"> Back</button>
            <button className="button-next text-xs border border-white rounded-full p-3 transition-all duration-300 hover:text-black hover:bg-white"> Next</button>
            </div>
            <div className="absolute bottom-0 z-0">
                <img src="/assets/background/overlay/lighting.png"/>
            </div>
        </section>
    )
}
export default OtherProjectSection;