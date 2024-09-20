import styles from "./Projects.module.css";
import React from "react";
import portfolio from "../assets/portfolio.png";
import cusine from "../assets/bhairavisCusines.png";

import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: portfolio,
    projectTitle: "Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: cusine,
    projectTitle: "Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: portfolio,
    projectTitle: "Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
  {
    avatar: portfolio,
    projectTitle: "Portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi.",
  },
];

export default function Projects() {
  return (
    <>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsInnerConatiner}>
          <div className={styles.projectsHeadingContainer}>Projects</div>
          <div className={styles.projectsItemContainer}>
            <Swiper
              className={styles.testimonialsConatiner}
              // install Swiper modules
              modules={[Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 4000 }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {data.map(({ avatar, projectTitle, desc }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.testimonials}>
                      <div className={styles.projectsDesc}>
                        <div className={styles.projectName}>{projectTitle}</div>
                        <div className={styles.projectDesc}>{desc}</div>
                        <div className={styles.btnsConatiner}>
                          <button className={styles.about_button}>Demo</button>
                          <button className={styles.cta}>
                            <span>Github</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                              <path d="M1,5 L11,5" stroke="#ffffff"></path>
                              <polyline
                                points="8 1 12 5 8 9"
                                stroke="#ffffff"
                              ></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className={styles.projectsImage}>
                        <img src={avatar} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
