import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow,A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const NewSliderHero =()=>{
    return(
        <Swiper
        modules={[Navigation, EffectCoverflow,A11y]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay
        loop={true}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 1000,
        modifier: 1,
        slideShadows: 0,
        }}
        className="mySwiper"
    >
        <SwiperSlide className="p-5 ">
        <div className="card-wraper flex">
                    <img src="/assets/porto-img/ikn.png" className="w-full h-full object-cover rounded-lg shadow-lg shadow-sky-100/20"/>
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-5">
        <div className="card-wraper flex">
                    <img src="/assets/porto-img/k-learn.png" className="w-full h-full object-cover rounded-lg shadow-lg shadow-sky-100/20"/>
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-5">
        <div className="card-wraper flex">
                    <img src="/assets/porto-img/tech-club.png" className="w-full h-full object-cover rounded-lg shadow-lg shadow-sky-100/20"/>
                </div>
        </SwiperSlide>
         </Swiper>
    )
}
export default NewSliderHero