"use client"
import { RiTailwindCssFill, RiGithubFill, RiNextjsFill, RiCss3Fill, RiHtml5Fill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt, FaFigma, } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const SkillSection =()=>{

    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    
    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return(
        <section className="flex flex-col  relative bg-black pb-16 h-max w-full text-white" id="skill">
            <div className="flex w-full h-max  ">
                <img src="/assets/background/overlay/overlayY.png" className="object-cover w-full"></img>
            </div>
            <motion.div className="content-wraper flex flex-col mb-28 space-y-5 md:space-y-0 md:flex-row w-full items-start md:justify-between px-10 md:px-72"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold uppercase mb-5">Tools</h1>
                    <ol className="list-inside space-y-5 font-medium text-xl">
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><FaFigma/><p>Figma</p></li>
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><BiLogoVisualStudio/><p>Visual Studio Code</p></li>
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><FaGitAlt/><p>Git</p></li>
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><RiGithubFill/><p>Github</p></li>
                    </ol>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mb-5 uppercase">Tech Used</h1>
                    <ol className="list-inside space-y-5 font-medium text-xl">
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><RiHtml5Fill/><p>Html</p></li>
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><RiCss3Fill/><p>Css</p></li>
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><RiTailwindCssFill/><p>TailwindCSS</p></li>
                        <li className="flex items-center space-x-4 transition-all duration-300 hover:scale-110"><RiNextjsFill/><p>NextJS</p></li>
                    </ol>
                </div>
            </motion.div>

        </section>
    )
}
export default SkillSection;