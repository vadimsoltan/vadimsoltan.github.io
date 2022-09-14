import { useState } from "react";
import "./resume.scss";
import { Icon } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Resume() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "school",
      title: "Education",
      desc: "University of Toronto",
      details: "Honours Bachelor of Science",
      details2: "Major in Mathematics and Major in Statistics",
      details3: "2015 - 2022",
      extra:
        "Notable Courses: Computer and Network Security, Multivariate Regression Analysis, Design and Analysis of Data Structures",
      img: "https://cdnb.artstation.com/p/assets/images/images/053/709/249/large/vadim-soltan-ufot.jpg?1662847275",
    },
    {
      id: "2",
      icon: "engineering",
      title: "Experience",
      desc: "CIBC",
      details: "Software Engineer",
      details2: "Internship",
      details3: "2019 - 2020",
      extra:
        "I worked with a prototyping team to develope a virtual assistant using Node Js, React Js, Angular Js, and OpenCV along with many AWS such as LEX, Rekognition, Lambda, and S3.",
      img: "https://cdna.artstation.com/p/assets/images/images/053/709/252/large/vadim-soltan-cibc.jpg?1662847286",
    },
    {
      id: "3",
      icon: "code",
      title: "Technical Skills",
      desc: "Langues",
      details: "R, C, Python, Java, JavaScript, TypeScript",
      details2: "Libraries/Frameworks: React, Angular, OpenCV",
      details3: "Other: Docker, JIRA, Git, Balsamiq, Photoshop, Illustrator",
      img: "https://cdnb.artstation.com/p/assets/images/images/053/709/207/large/vadim-soltan-skills-6.jpg?1662847160",
    },
    {
      id: "4",
      icon: "attribution",
      title: "About Me",
      desc: "Recent Graduate",
      details: "Interested in Software, Data, UX/UI Engineering",
      details2:
        "I am currently looking for opportunities to grow and learn in the technology industry.",

      details3:
        "My hobbies include photography, digital art, writting as well as hiking and rowing.",

      img: "https://cdnb.artstation.com/p/assets/images/images/053/712/271/large/vadim-soltan-image-processing20220403-30938-zfyllu.jpg?1662857773",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="resume" id="resume">
      <h1>Resume.</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.icon} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <Icon className="icon">{d.icon}</Icon>
                  </div>
                  <h2>{d.title}</h2>
                  <h3>{d.desc}</h3>
                  <h4>{d.details}</h4>
                  <p>{d.details2}</p>
                  <p>{d.details3}</p>
                  <span>{d.extra}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosNewIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
