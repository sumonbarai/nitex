// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../../assets/image/slider-1.jpg";
import slider2 from "../../assets/image/slider-2.jpg";
import slider3 from "../../assets/image/slider-3.jpg";
import { useRef } from "react";

const Carousel = () => {
  const data = [slider1, slider2, slider3];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        scrollbar={{ draggable: true }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {data.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-72  md:h-[500px] overlay-parent cursor-pointer">
              <img className="w-full h-full object-cover" src={slider} alt="" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
