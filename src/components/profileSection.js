"use client"
import { useState,useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProfileSection =()=>{
    const [activeModal, setActiveModal] = useState(null); // Track which modal is open
    const [showModal, setShowModal] = useState(false);
  
    // Open a specific modal
    const openModal = (modalName) => {
      setActiveModal(modalName);
      setShowModal(true);
    };

    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

  
    // Close modal
    const closeModal = () => {
      setShowModal(false);
      setTimeout(() => setActiveModal(null), 300); // Wait for animation before unmounting
    };
    return(
        <section className="flex bg-black max-h-screen h-screen w-full font-Gotham" id="Profile">
            <motion.div className="relative flex h-screen w-full" 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="absolute left-10 top-10 md:top-auto  md:left-16 md:bottom-40 flex flex-col">
                    <h1 className="text-8xl md:text-multixl font-Pinyon shadow-lg">Nanda Sofian</h1>
                <div className="flex flex-col md:flex-row md:space-x-5 items-start md:items-center space-y-5 md:space-y-0">
                    <h1>All Information :</h1>
                    {/* triger modal */}
                    <button
                        onClick={() => openModal("modalProfile")}
                        className="px-4 py-2 bg-transparent border border-white text-white  hover:bg-white hover:text-black duration-300 rounded-lg transition">
                        Profile
                    </button>
                    <button
                        onClick={() => openModal("modalBackground")}
                        className="px-4 py-2 bg-transparent border border-white text-white  hover:bg-white hover:text-black duration-300 rounded-lg transition">
                        Background
                    </button>
                    <a href="/assets/content/cv.png" download="cv_saya_bundar"
                        className="px-4 py-2 bg-transparent bg-white text-black duration-300 rounded-lg transition">
                        Download CV
                    </a>
                    </div>
                </div>
                <div className="flex w-full justify-end h-full">
                    <img src="/assets/avatar/avatar.png" className="h-full object-cover">
                    </img>
                </div>
            </motion.div>
            {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center p-5 justify-center bg-black bg-opacity-50 ${
             activeModal ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <div
            className={`bg-black border border-white rounded-xl shadow-lg p-6 w-full max-w-md transform ${
              showModal ? "scale-100" : "scale-90"
            } transition-transform duration-300`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-xl">
              {activeModal === "modalBackground" && "Background"}
              {activeModal === "modalProfile" && "Profile"}
              {activeModal === "modal1" && "Modal 1"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                ✕
              </button>
            </div>

            <div>
            {activeModal === "modalBackground" && (
                <table className="flex mb-4">
                <thead className="flex space-x-4">
                    <tr className="flex flex-col justify-start items-start">
                        <th>Pendidikan </th>
                        <th>Sekolah</th>
                        <th>Kelas</th>
                        <th>Jurusan</th>
                        
                    </tr>
                    <tr className="flex flex-col">
                        <td>:</td>
                        <td>:</td>
                        <td>:</td>
                        <td>:</td>
                       
                    </tr>
                </thead>
                <tbody className="flex">
                    <tr className="flex flex-col space-y-2 md:space-y-0 ml-4">
                        <td className="text-xs md:text-base">Sekolah Menengah Kejuruan</td>
                        <td className="text-xs md:text-base">SMK Informatika Sumedang</td>
                        <td className="text-xs md:text-base">XII</td>
                        <td className="text-xs md:text-base">Rekayasa Perangkat Lunak</td>
                        
                    </tr>
                </tbody>
               </table>
              )}
              {activeModal === "modalProfile" && (
               <table className="flex mb-4">
                <thead className="flex space-x-4">
                    <tr className="flex flex-col justify-start items-start">
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>TTL</th>
                        <th>Email</th>
                        <th>No. Hp</th>
                    </tr>
                    <tr className="flex flex-col">
                        <td>:</td>
                        <td>:</td>
                        <td>:</td>
                        <td>:</td>
                        <td>:</td>
                    </tr>
                </thead>
                <tbody className="flex">
                    <tr className="flex flex-col ml-4">
                        <td>Nanda Sofian</td>
                        <td>Jl.Lingkar Timur Jatiged No.0856</td>
                        <td>Sumedang, 30 Oktober 2006</td>
                        <td>nandasofian4546@gmail.com</td>
                        <td>085697648442</td>
                    </tr>
                </tbody>
               </table>
              )}
            </div>
          </div>
        </div>
      )}
        </section>
    )
}
export default ProfileSection;