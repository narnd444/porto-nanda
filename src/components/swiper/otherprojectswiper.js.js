

import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow,A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const NewSwiper1 =()=>{
    const CardContent =[
        {
            image:"/assets/porto-img/tech-club.png",
            title:"MEMBUAT DESAIN WEB ENTERTAIN",
            description:"YAHAHA HAYUKKK",
        },
        {
            image:"/assets/porto-img/tech-club.png",
            title:"MEMBUAT DESAIN WEB ENTERTAINJUT",
            description:"YAHAHA HAYUKKK",
        },
        {
            image:"/assets/porto-img/tech-club.png",
            title:"MEMBUAT DESAIN WEB ENTERTAIN UHUYY",
            description:"YAHAHA HAYUKKK",
        }
    ];
    return(
        <Swiper
        modules={[Navigation, EffectCoverflow,A11y]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={true}
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
<SwiperSlide key={index}>
            <div className="card-wraper flex flex-col md:flex-row md:space-x-5 w-full items-start h-[400px] md:h-[450px] p-5 md:p-14 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-2xl border-2 border-white">
                <div className="image-wraper mb-2 md:mb-2 flex">
                    <img src={slide.image} className="md:h-44 md:w-72"/>
                </div>
                <div className="text-wraper text-balance space-y-2 md:space-y-0 flex flex-col">
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