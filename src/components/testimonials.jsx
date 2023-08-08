import React from "react";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../styles/testimonials.css";
import avatar1 from "../resources/avatar1.webp";

const testimonialData = [
  {
    avatar: avatar1,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at cupiditate a facere, tempore quis itaque beatae ab, incidunt soluta laborum maiores cumque? Dolores, velit!",
  },
  {
    avatar: avatar1,
    name: "Client Name 2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at cupiditate a facere, tempore quis itaque beatae ab, incidunt soluta laborum maiores cumque? Dolores, velit!",
  },
  {
    avatar: avatar1,
    name: "Client Name 3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at cupiditate a facere, tempore quis itaque beatae ab, incidunt soluta laborum maiores cumque? Dolores, velit!",
  },
  {
    avatar: avatar1,
    name: "Client Name 4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at cupiditate a facere, tempore quis itaque beatae ab, incidunt soluta laborum maiores cumque? Dolores, velit!",
  },
  {
    avatar: avatar1,
    name: "Client Name 5",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at cupiditate a facere, tempore quis itaque beatae ab, incidunt soluta laborum maiores cumque? Dolores, velit!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Some Happy Customers</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
      >
        {testimonialData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={`avatar ${index}`} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
