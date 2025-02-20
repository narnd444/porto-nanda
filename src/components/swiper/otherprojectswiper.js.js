

import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow,A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const NewSwiper1 =()=>{
    const CardContent =[
        {
            image:"/assets/otherproject/tech-club.png",
            title:"MEMBUAT DESAIN WEB ENTERTAIN",
            description:"Membuat desain homepage untuk website entertain maupun berita mengenai perkembangan teknologi yang terus berkembang. Nantinya homepage ini memuat berita terkini dari berbagai titik didunia yang tentunya terkatit dengan teknologi",
        },
        {
            image:"/assets/otherproject/platform-food.png",
            title:"MEMBUAT DESAIN APLIKASI PEMESANAN MAKANAN ONLINE (ONLINE FOOD DELIVERY)",
            description:"Desain ini diharapkan menjadi solusi untuk pengguna yang ingin memesan makanan secara daring/online.",
        },
        {
            image:"/assets/otherproject/platform-movie.jpg",
            title:"MEMBUAT DESAIN APLIKASI PLATFORM FILM ONLINE",
            description:"DESAIN YANG DITUJUKAN MENJADI SOLUSI UNTUK ORANG ORANG YANG TIDAK DAPAT DATANG KE BIOSKON UNTUK MENONTON FILM.",
        },
        {
            image:"/assets/otherproject/elibs.png",
            title:"MEMBUAT DESAIN WEB PERPUSTAKAAN ONLINE",
            description:"Desain web perpustakaan online, untuk memudahkan proses peminjamanan buku dan efisiensi waktu untuk para pembaca buku.",
        }
    ];
    return(
        <Swiper
        modules={[Navigation, EffectCoverflow,A11y]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
            delay: 500,
          }}
        loop={true}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
        }}
        navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
        }}
        className="mySwiper"
    > 
        {CardContent.map((slide, index) => (
        <SwiperSlide key={index} className="p-5">
                    <div className="card-wraper flex flex-col md:flex-row md:space-x-5 justify-start w-full items-start min-h-[480px] max-h-max  p-5 md:p-14 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl border-2 border-white">
                        <div className="image-wraper mb-2 w-full md:w-4/12">
                            <img src={slide.image} className="h-full rounded-xl border border-white w-full object-cover md:h-48 md:w-96"/>
                        </div>
                        <div className="text-wraper w-full md:w-8/12 text-balance space-y-2 md:space-y-0 flex flex-col">
                            <div className="font-bold text-base md:text-2xl flex w-full justify-between">
                                <h1>
                                    {slide.title}
                                </h1>
                            </div>
                            <div className="flex text-sm md:text-base">
                                <p className="">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>
        ))}
        </Swiper>
            )
        }
export default NewSwiper1