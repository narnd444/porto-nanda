import Image from "next/image";
import { RiTailwindCssFill, RiGithubFill, RiNextjsFill, RiCss3Fill, RiHtml5Fill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt, FaFigma, } from "react-icons/fa";
const SkillSection =()=>{
    return(
        <section className="flex flex-col  relative bg-black pb-16 h-max w-full">
            <div className="flex w-full h-max  ">
                <img src="/assets/background/overlay/overlayY.png" className="object-cover w-full"></img>
            </div>
            <div className="content-wraper flex flex-col mb-28 space-y-5 md:space-y-0 md:flex-row w-full items-start md:justify-between px-10 md:px-72">
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
            </div>

        </section>
    )
}
export default SkillSection;