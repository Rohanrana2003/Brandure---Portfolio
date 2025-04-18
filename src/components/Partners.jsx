import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { partners } from "../utils/constants";

const Partners = () => {
  return (
    <section className=" text-white max-lg:py-10">
      <div className="py-4 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="font-heading mb-4 lg:mb-10 text-3xl font-semibold tracking-tight leading-tight md:text-4xl text-gray-800 text-center">
          Our Clients
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          modules={[Autoplay]}
          className="mySwiper partners-swiper "
        >
          {partners.map((partner) => (
            <SwiperSlide
              key={partner.id}
              className="flex justify-center items-center"
            >
              <img src={partner.img} alt="partner-logo" className="w-32" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
