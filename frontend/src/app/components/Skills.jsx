import Image from "next/image";
import React from "react";
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import TypeScript from "../assets/skills/typescript.png";
import ReactImg from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import MongoDB from "../assets/skills/mongo.png";
import Firebase from "../assets/skills/firebase.png";
import AWS from "../assets/skills/aws.png";
import NextJS from "../assets/skills/nextjs.png";
import CPP from "../assets/skills/cpp.png";
import Java from "../assets/skills/java.png";
import Python from "../assets/skills/python.png";
import Bootstrap from "../assets/skills/bootstrap.png";

const titleStyle = "text-4xl font-bold inline border-b-4 border-zinc-500";

const just = "max-w-[1240px] m-auto px-2 py-16 w-full ";
const oldJust = "max-w-[1240px] mx-auto flex flex-col justify-center h-full";

const skillsData = [
  { image: NextJS, label: "NextJS" },
  { image: Node, label: "NodeJS" },
  { image: Python, label: "Python" },
  ,
  { image: Javascript, label: "JavaScript" },
  { image: Html, label: "HTML" },
  { image: Css, label: "CSS" },
  { image: CPP, label: "C++" },
  { image: Java, label: "Java" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className={just}>
        <p className={titleStyle}>
          <br />
          <br />
          Skills
        </p>
        <p className="py-4">
          <br />
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill.image} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
