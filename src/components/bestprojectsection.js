"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BestProjectSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col items-center h-max py-10 w-full justify-center font font-Gotham bg-black text-white" id="porto">
      <div className="title-wrap flex">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-yellow-400">BEST</span> PROJECT
        </h1>
      </div>
      <div className="card-wrap flex p-5 md:p-16 md:px-32 flex-col space-y-10 w-full">
        {/* Card 1 */}
        <motion.div
          ref={ref1}
          className="card-1 h-max md:h-max flex flex-col md:flex-row border rounded-2xl space-y-5 md:space-y-0 space-x-0 md:space-x-8 p-10 border-white"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="image-wraper">
            <img
              src="/assets/porto-img/ikn.png"
              className="h-48 w-96 rounded-xl object-cover"
            />
          </div>
          <div className="text-wrap space-y-5 w-full md:py-1">
            <div className="head-text flex items-center justify-between">
              <h1 className="font-bold text-2xl">WEB COPY IKN</h1>
              <button className="hidden md:flex p-2 text-xs px-5 rounded-lg transition-all duration-300 hover:text-black hover:bg-white border border-white">
                Lihat
              </button>
            </div>
            <div className="bottom-text flex w-full">
              <p className="text-xs text-justify md:text-left font-light">
                Saya membuat salinan (copy) situs web Ibu Kota Nusantara (IKN)
                menggunakan React sebagai kerangka kerja utama untuk
                pengembangan antarmuka. Untuk navigasi yang dinamis dan
                responsif, saya memanfaatkan pustaka Swiper, yang memungkinkan
                pembuatan slider dan carousel yang interaktif. Selain itu, saya
                menggunakan Framer Motion untuk menambahkan animasi transisi
                yang halus dan menarik, memberikan pengalaman pengguna yang
                lebih hidup dan modern. Proyek ini dirancang untuk menghadirkan
                antarmuka yang intuitif, estetis, dan optimal di berbagai
                perangkat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={ref2}
          className="card-2 h-max md:h-max flex flex-col md:flex-row border rounded-2xl space-y-5 md:space-y-0 space-x-0 md:space-x-8 p-10 border-white"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="image-wraper flex md:hidden">
            <img
              src="/assets/porto-img/k-learn.png"
              className="h-48 w-96 rounded-xl object-cover"
            />
          </div>
          <div className="text-wrap space-y-5 w-full md:py-1">
            <div className="head-text flex items-center justify-between">
              <button className="hidden md:flex p-2 text-xs px-5 rounded-lg transition-all duration-300 hover:text-black hover:bg-white border border-white">
                Lihat
              </button>
              <h1 className="font-bold text-2xl">DESIGN E-LEARNING PLATFORM</h1>
            </div>
            <div className="bottom-text flex w-full">
              <p className="text-xs font-light text-justify md:text-right">
                Saya mendesain sebuah platform pembelajaran (learning platform)
                menggunakan Figma, dengan fokus pada pengalaman pengguna (UX)
                yang intuitif dan antarmuka pengguna (UI) yang modern. Dalam
                proses desain, saya memastikan setiap elemen visual, seperti
                tata letak, ikonografi, tipografi, dan skema warna, selaras
                untuk mendukung kemudahan navigasi dan meningkatkan kenyamanan
                pengguna. Prototipe interaktif yang saya buat memungkinkan
                pengujian awal sehingga fitur-fitur platform dapat dioptimalkan
                sebelum tahap pengembangan.
              </p>
            </div>
          </div>
          <div className="image-wraper hidden md:flex">
            <img
              src="/assets/porto-img/k-learn.png"
              className="h-48 w-96 rounded-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestProjectSection;
