
import Image from "next/image";
import { FaGithub,FaInstagram,FaDiscord } from "react-icons/fa";
const Footer =()=>{
    return(
        <footer className="w-full h-max font-Gotham px-16 flex items-center justify-between p-6 border-t bg-black border-white text-white">
        
            <div className="logo-section flex items-center ">
                <img src="/assets/logo/logo.png"/>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex space-x-3 transition-all duration-300 items-center ">
                    <FaInstagram className="text-xl"/>
                    <a className="hover:scale-110" href="https://www.instagram.com/nandfyn/">
                        Instagram
                    </a>
                </div>
                <div className="flex space-x-3 transition-all duration-300 items-center ">
                    <FaGithub className="text-xl"/>
                    <a className="hover:scale-110" href="https://github.com/narnd444">
                    Github
                    </a>
                </div>
                <div className="flex space-x-3 transition-all duration-300 items-center ">
                    <FaDiscord className="text-xl"/>
                    <a className="hover:scale-110" href="https://discord.com/nandaarasatlantis">
                        Discord
                    </a>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer