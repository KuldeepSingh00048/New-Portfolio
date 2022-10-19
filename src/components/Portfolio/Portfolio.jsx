import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import blog from "../../img/blog.PNG";
import face from "../../img/face.PNG";
import hand from "../../img/hand.PNG";
import pluto from "../../img/pluto.PNG";
import task from "../../img/task.PNG";
import movie from "../../img/movie.PNG";
import rent from "../../img/rent.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <br/>
      <br/>
      <br/>
      <br/>
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects Using</span>
      <span>MERN Stack</span>
      <div>(Hold and Swipe)</div>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://abroadaid-task-planner-assigment.netlify.app' target='_blank'><img src={task}/></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://kd-movie-ticket-booking.netlify.app' target='_blank'><img src={movie} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://kd-real-state.netlify.app' target='_blank'><img src={rent} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://kd-blog.netlify.app' target='_blank'><img src={blog} alt="" /></a>
        </SwiperSlide>
      </Swiper>
      <br/>
      <br/>
      <span style={{color: darkMode?'white': ''}}>Projects Using</span>
      <span>Python & ML</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://kd-robo.netlify.app' target='_blank'><img src={hand} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://kd-expression-recognition.netlify.app' target='_blank'><img src={pluto} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://kd-pluto.netlify.app' target='_blank'><img src={face} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
