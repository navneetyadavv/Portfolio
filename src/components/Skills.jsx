import React from "react";
import brain from "../assets/image.png";
import react from "../assets/programming/react.svg";
import javascript from "../assets/programming/javascript.svg";
import expressjs from "../assets/programming/expressjs.png";
import nodejs from "../assets/programming/nodejs.svg";
import django from "../assets/programming/django.svg";
import mongodb from "../assets/programming/mongodb.svg";
import redux from "../assets/programming/redux.svg";
import java from "../assets/programming/java.svg";
import docker from "../assets/programming/docker.svg";
import python from "../assets/programming/python.svg";
import cpp from "../assets/programming/cpp.svg";
import git from "../assets/programming/git.svg";
import styles from "./Skills.module.css";

const Skills = () => {
  const skills = [
    { name: "react", image: react },
    { name: "javascript", image: javascript },
    { name: "expressJs", image: expressjs },
    { name: "django", image: django },
    { name: "nodeJs", image: nodejs },
    { name: "mongodb", image: mongodb },
    { name: "redux", image: redux },
    { name: "java", image: java },
    { name: "python", image: python },
    { name: "cpp", image: cpp },
    { name: "docker", image: docker },
    { name: "git", image: git },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={brain} alt="" />
        </div>

        <div className={styles.skillsContainer}>
          <div className={styles.skillsHeader}>Skills</div>
          <div className={styles.skills}>
            {skills.map((s, index) => {
              return (
                <span key={index} className={styles.skill}>
                  <img src={s.image} alt="" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
