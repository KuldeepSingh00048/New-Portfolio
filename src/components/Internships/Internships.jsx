import React from "react";
import "./Internships.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import intern from "../../img/intern.png";
import saip from "../../img/saip.png";
import Intern from "../../img/di.png";

const Internships = () => {
  const clients = [
    {
      img: Intern,
      review:"Digital Ipsum PVT Ltd., Remote Nov 2022 - DEC 2022 work as Full Stack MERN Developer Intern (doing daily basis tasks on both Front-end and back-end side of websites for clients).",
    },
    {
      img: intern,
      review:"The Intern Academy, Virtual Sep 2021 - Oct 2021 Work to automate the social media platforms using python ML SO I automate the Instagram",
    },
    {
      img: saip,
      review: "IILM EDU CAMP, Virtual May 2020 - Jul 2020 Learn about deep learning and machine learning with python and data entry in excel"   
    },
  ];

  return (
    <div className="t-wrapper" id="Internships">
      <div className="t-heading">
        <span>Experience </span>
        <span>(Internships) </span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Internships;
