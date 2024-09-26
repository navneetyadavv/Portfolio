import styles from "./Projects.module.css";
import React from "react";
import Portfolio from "../assets/portfolio.png";
import BhairaviCusine from "../assets/bhairavisCusines.png";
import MindfulMosaic from "../assets/screenshots/MindfulMosiac.png";
import ClassroomConnect from "../assets/screenshots/ClassroomConnect.png";
import TaskManager from "../assets/screenshots/TaskManger.png";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: MindfulMosaic,
    projectTitle: "MindfulMosaic",
    desc: "A user-friendly blogging platform that allows you to create, publish, and manage your content with ease. It features a visually appealing interface, secure login options, and powerful tools for crafting engaging posts.",
    demoLink: "https://mindful-mosaic.vercel.app/",
    githubLink: "https://github.com/navneetyadavv/MindfulMosaic",
  },
  {
    avatar: Portfolio,
    projectTitle: "Portfolio",
    desc: `website to show off my skills and projects. It's like an online resume where you can easily check out what I've done and what I'm good at. Take a look around to see the cool stuff I've worked on!`,
    demoLink: "https://portfolio-two-gilt-41.vercel.app/",
    githubLink: "https://github.com/navneetyadavv/Portfolio",
  },
  {
    avatar: ClassroomConnect,
    projectTitle: "ClassroomConnect",
    desc: "A comprehensive web-based platform designed to streamline classroom administration. It enables principals to create and assign classrooms, teachers to manage their students and schedules, and students to view class information.",
    demoLink: "https://classroom-connect-frontend.vercel.app/",
    githubLink: "https://github.com/navneetyadavv/ClassroomConnect",
  },
  {
    avatar: BhairaviCusine,
    projectTitle: "Bhairavi's Cusine",
    desc: "Explore a static culinary website that highlights my expertise in crafting visually stunning and user-friendly web interfaces. Discover a curated collection of recipes",
    demoLink: "https://voluble-horse-402169.netlify.app/",
    githubLink: "https://github.com/navneetyadavv/Bhairavi-s-Cusine",
  },
  {
    avatar: TaskManager,
    projectTitle: "TaskManager",
    desc: "This is a handy app built with React, Node.js, and Mongodb to help you keep track of your tasks. Whether it's something you need to do today, something coming up, or something you missed, Task Manager has got you covered.",
    demoLink: "https://task-manager-omega-three.vercel.app/",
    githubLink: "https://github.com/navneetyadavv/Task-Manager",
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
              {data.map(
                (
                  { avatar, projectTitle, desc, demoLink, githubLink },
                  index
                ) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.testimonials}>
                        <div className={styles.projectsDesc}>
                          <div className={styles.projectName}>
                            {projectTitle}
                          </div>
                          <div className={styles.projectDesc}>{desc}</div>
                          <div className={styles.btnsConatiner}>
                            <a
                              href={demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className={styles.about_button}>
                                Demo
                              </button>
                            </a>
                            <a
                              href={githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className={styles.cta}>
                                <span>Github</span>
                                <svg
                                  viewBox="0 0 13 10"
                                  height="10px"
                                  width="15px"
                                >
                                  <path d="M1,5 L11,5" stroke="#ffffff"></path>
                                  <polyline
                                    points="8 1 12 5 8 9"
                                    stroke="#ffffff"
                                  ></polyline>
                                </svg>
                              </button>
                            </a>
                          </div>
                        </div>
                        <div className={styles.projectsImage}>
                          <img src={avatar} alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
