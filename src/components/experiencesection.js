"use client"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ExperienceSection =()=>{
     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
      const fadeInVariants = {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        };
    return(
        <section className="flex h-max w-full space-y-10 font-Gotham py-16" id="experience">
            <motion.div ref={ref} className="w-full space-y-5 flex flex-col items-center"
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
             variants={fadeInVariants}
             transition={{ duration: 3, ease: "easeOut" }}>
                <h1 className="title flex font-bold mb-5 text-2xl uppercase">Experience</h1>
                <div className="content-wraper w-full space-y-8 px-5 md:px-36 flex flex-col items-center">
                    <div className="image-wraper flex justify-center md:h-96 w-full">
                        <img src="/assets/porto-img/certificate.jpg"className="h-64 md:h-96 transition-all duration-300 hover:scale-110 object-cover"/>
                    </div>
                    <div className="flex w-full space-x-8 ">
                        <h1 className="text-xl w-full font-bold">
                            ITB METAFEST : Live in Metaverse.
                        </h1>
                        <p className="text-base">
                            Mengikuti acara yang berisikan perbincangan mengenai Metaverse di Masa Depan, disini saya mengexplorasi apa itu metaverse dan mencoba beberapa alat Virtual Machine seperti VR da AR.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
export default ExperienceSection;