"use client"
import Image from "next/image"
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
        const Header = () => {
            // State untuk mengatur apakah menu navigasi ditampilkan di mobile
            const [isMenuOpen, setIsMenuOpen] = useState(false);
          
            // Fungsi untuk toggle menu
            const toggleMenu = () => {
              setIsMenuOpen(!isMenuOpen);
            };
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);
            const [selectedLanguage, setSelectedLanguage] = useState("Halo, saya nanda.");
            const toggleDropdown = () => {
                setIsDropdownOpen((prev) => !prev);
              };
            
              const changeLanguage = (language) => {
                setSelectedLanguage(language);
                setIsDropdownOpen(false); // Close dropdown after selection
              };
          
            return (
              <header className="z-50 flex p-5  w-full bg-white-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-b border-slate-400/20 fixed font-Gotham text-white">
                <div className="relative flex justify-center md:flex w-full  md:px-5">
                <div className="flex justify-between items-center w-full">
                  <div className="flex">
                    <img src="/assets/logo/logo.png" alt="Logo" />
                  </div>
          
                  {/* Menu navigasi yang tetap terlihat di desktop (md:flex) */}
                  <nav className="hidden md:flex text-white space-x-16">
                    <a href="#Home" className="nav-item relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</a>
                    <a href="#Profile" className="nav-item relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Profile</a>
                    <a href="#skill" className="nav-item relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Skills</a>
                    <a href="#porto" className="nav-item relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Portfolio</a>
                  </nav>

                  <div className="header-language hidden md:flex relative items-center space-x-2 hover:scale-110 transition-all duration-300">
                        <button
                            className="language-button flex items-center space-x-1 text-white px-3 py-2 rounded focus:outline-none"
                            onClick={toggleDropdown}
                        >
                            <IoLanguage />
                            {selectedLanguage}
                            <IoIosArrowDown />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="dropdown-menu  absolute top-full mt-2 right-0 bg-black rounded shadow-lg text-white w-40">
                            <button
                                className="dropdown-item w-full text-left px-4 py-2 hover:bg-slate-950"
                                onClick={() => changeLanguage("Halo, saya nanda.")}
                            >
                                Halo
                            </button>
                            <button
                                className="dropdown-item w-full text-left px-4 py-2 hover:bg-slate-950"
                                onClick={() => changeLanguage("Hello, i'm nanda.")}
                            >
                                Hello
                            </button>
                            </div>
                        )}
                        </div>
          
                  {/* Tombol toggle hanya muncul di tampilan mobile (md:hidden) */}
                  <button
                    className="header-menu-toggle md:hidden text-white focus:outline-none"
                    onClick={toggleMenu} // Menambahkan event handler untuk toggle
                  >
                    <svg
                      className="menu-icon w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                  </button>
                </div>
          
                {/* Menu Navigasi untuk Mobile (md:hidden), akan muncul ketika isMenuOpen true */}
                <div className={`absolute transition-all duration-300 w-full h-72 top-20   md:hidden ${isMenuOpen ? 'flex opacity-100 ' : 'hidden opacity-0'}`}>
                    <nav className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 bg-black border rounded-xl border-slate-400/20 w-full h-full text-white space-y-4 p-32 flex flex-col justify-center items-center z-20">
                        <a href="#Home" className=" text-center relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</a>
                        <a href="#Profile" className=" text-center relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Profile</a>
                        <a href="#skill" className=" text-center relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Skills</a>
                        <a href="#porto" className="text-center relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Portfolio</a>
                    </nav>
                    </div>

                </div>
              </header>
            );
          };
export default Header