import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import img1 from "../images/Myimg.jpg";
import { IconButton } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import webdevelopment from "../images/webdevelopment.png";
import reactjs from "../images/reactjs.png";
import springboot from "../images/springboot.png";
import dbms from "../images/dbms.png";
import css from "../images/css.png";

const Home = () => {
  const [data, setData] = useState({
    Name: "",
    phone: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleContact = () => {
    console.log(data);
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      `http://localhost:8080/Contact?Name=${data.Name}&phone=${data.phone}&Email=${data.Email}&Subject=${data.Subject}&Message=${data.Message}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Navbar />
      <section className="hero" id="Home">
        <div className="container">
          <div className="hero_row">
            <div className="hero_col">
              <div className="wrapper">
                <p>Hi, I'M Subhojeet</p>
                <div className="words">
                  <span>A developer who likes to take up challenges</span>
                  <div className="skills">
                    <h2>BEST SKILLS ON</h2>
                    <div className="skills_icons">
                      <IconButton>
                        <FaReact />
                      </IconButton>
                      <IconButton>
                        <DiJavascript1 />
                      </IconButton>
                      <div className="find_me">
                        <h2>FIND ME WITH</h2>
                        <div className="socials">
                          {/* Instagram */}
                          <a
                            href="https://www.instagram.com/imsubhojeet/"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            <AiOutlineInstagram />
                          </a>
                          {/* facebook */}
                          <a
                            href="https://www.facebook.com/subhojeet.bhattacharya/"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            <AiOutlineFacebook />
                          </a>
                          {/* linkedin */}
                          <a
                            href="https://www.linkedin.com/in/subhojeet-bhattacharya-b4b8b6222/"
                            target={"_blank"}
                            rel="noreferrer"
                          >
                            <AiOutlineLinkedin />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero_col">
              <div className="myimg">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="fixing_space"></div>
      </section>
      {/* features */}
      <section className="features" id="Features">
        <div className="container">
          <div className="features_header">
            <h3>FEATURES</h3>
            <h2>WHAT I DO</h2>
          </div>
          <div className="container">
            <div className="features_row">
              <div className="features_col">
                <div className="features_col_details">
                  <img src={webdevelopment} alt="" />
                  <h1>WEB DEVELOPMENT</h1>
                </div>
              </div>
              <div className="features_col">
                <div className="features_col_details">
                  <img src={reactjs} alt="" />
                  <h1>REACT JS DEVELOPMENT</h1>
                </div>
              </div>
              <div className="features_col">
                <div className="features_col_details">
                  <img src={springboot} alt="" />
                  <h1>SPRING BOOT DEVELOPMENT</h1>
                </div>
              </div>
              <div className="features_col">
                <div className="features_col_details">
                  <img src={dbms} alt="" />
                  <h1>DATA BASE MANAGEMENT SYSTEM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixing_space"></div>
      </section>
      {/* Resume */}
      <section className="resume" id="Resume">
        <div className="container">
          <div className="resume_header">
            <h3>RESUME</h3>
            <h2>MY RESUME</h2>
          </div>
          {/* Education */}
          <div className="resume_row">
            <div className="resume_col">
              <div className="resume_section">
                <h1>MY EDUCATION</h1>
              </div>
            </div>
            <div className="resume_col">
              <div className="edu_container">
                <div className="edu_row">
                  <div className="edu_col">
                    <h1>Bachelor of Technology</h1>
                    <p>MAKAUT</p>
                  </div>
                  <div className="edu_col">
                    <h2>Batch of 2018-2022</h2>
                  </div>
                  <div className="edu_details">
                    <p>
                      Graduated with Bachelor of Technology in Applied
                      Electronics And Instrumentation from Techno International
                      NewTow with 8.71 CGPA
                    </p>
                  </div>
                </div>
              </div>
              <div className="edu_container">
                <div className="edu_row">
                  <div className="edu_col">
                    <h1>Higher Secondary</h1>
                    <p>CBSE</p>
                  </div>
                  <div className="edu_col">
                    <h2>Batch of 2016-2018</h2>
                  </div>
                  <div className="edu_details">
                    <p>
                      Compleated my higher Secondary in science from Central
                      Board of Secondary Education with 53.2%
                    </p>
                  </div>
                </div>
              </div>
              <div className="edu_container">
                <div className="edu_row">
                  <div className="edu_col">
                    <h1>Secondary School</h1>
                    <p>CBSE</p>
                  </div>
                  <div className="edu_col">
                    <h2>Batch of 2015-2016</h2>
                  </div>
                  <div className="edu_details">
                    <p>
                      Compleated my Secondary schooling in science from Central
                      Board of Secondary Education with 93.1%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SKILLS */}
          <div className="resume_row">
            <div className="resume_section">
              <h1 style={{ marginBottom: "30px" }}>MY SKILLS</h1>
              <div className="skills_row">
                <div className="skills_col">
                  <div className="skill_col1">
                    <img src={reactjs} alt="" />
                    <h3>React Js</h3>
                  </div>
                </div>
                <div className="skills_col">
                  <div className="skill_col1">
                    <img src={dbms} alt="" />
                    <h3>Data Base Management SystemS</h3>
                  </div>
                </div>
                <div className="skills_col">
                  <div className="skill_col1">
                    <img src={css} alt="" />
                    <h3>CSS</h3>
                  </div>
                </div>
                <div className="skills_col">
                  <div className="skill_col1">
                    <img src={springboot} alt="" />
                    <h3>SPRING BOOT</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="resume_col">
              <div className="edu_container">
                <div className="skills_row">
                  <div className="skills_col">
                    <div className="skill_col1">
                      <img src={reactjs} alt="" />
                      <h1>React Js</h1>
                    </div>
                  </div>
                  <div className="skills_col"></div>
                </div>
              </div>
              <div className="edu_container">
                <div className="skills_row">
                  <div className="skills_col">
                    <div className="skill_col1">
                      <img src={dbms} alt="" />
                      <h1>Data Base Management SystemS</h1>
                    </div>
                  </div>
                  <div className="skills_col"></div>
                </div>
              </div>
              <div className="edu_container">
                <div className="skills_row">
                  <div className="skills_col">
                    <div className="skill_col1">
                      <img src={css} alt="" />
                      <h1>CSS</h1>
                    </div>
                  </div>
                  <div className="skills_col"></div>
                </div>
              </div>
              <div className="edu_container">
                <div className="skills_row">
                  <div className="skills_col">
                    <div className="skill_col1">
                      <img src={springboot} alt="" />
                      <h1>SPRING BOOT</h1>
                    </div>
                  </div>
                  <div className="skills_col"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className="container">
          <div className="contact_header">
            <h3>CONTACT</h3>
            <h2>Contact Me With</h2>
          </div>
          <div className="contact_row">
            <div className="contact_col">
              <div className="about">
                <h1>Subhojeet Bhattacharya</h1>
                <p>A developer you can trust</p>
                <h2>If you need any help you can contact me via my Email</h2>
                <h2>EMAIL-Subhojeet92@gmail.com</h2>
              </div>
              <div className="contact_socials">
                {/* Instagram */}
                <p>FIND ME WITH</p>
                <a
                  href="https://www.instagram.com/imsubhojeet/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <IconButton>
                    <AiOutlineInstagram />
                  </IconButton>
                </a>
                {/* facebook */}
                <a
                  href="https://www.facebook.com/subhojeet.bhattacharya/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button>
                    <IconButton>
                      <AiOutlineFacebook />
                    </IconButton>
                  </button>
                </a>
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/subhojeet-bhattacharya-b4b8b6222/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button>
                    <IconButton>
                      <AiOutlineLinkedin />
                    </IconButton>
                  </button>
                </a>
              </div>
            </div>
            <div className="contact_col">
              <div className="form">
                <div className="cnt_row mb-3">
                  <div className="cnt_md1">
                    <h3>NAME</h3>
                    <input
                      type="text"
                      className="input_control"
                      style={{ width: "95%" }}
                      value={data.Name}
                      onChange={(e) =>
                        setData({ ...data, Name: e.target.value })
                      }
                    />
                  </div>
                  <div className="cnt_md1">
                    <h3>PHONE NUMBER</h3>
                    <input
                      type="number"
                      className="input_control"
                      value={data.phone}
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <h3>EMAIL</h3>
                  <input
                    type="text"
                    className="input_control"
                    value={data.Email}
                    onChange={(e) =>
                      setData({ ...data, Email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <h3>SUBJECT</h3>
                  <input
                    type="text"
                    className="input_control"
                    value={data.Subject}
                    onChange={(e) =>
                      setData({ ...data, Subject: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <h3>YOUR MESSAGE</h3>
                  <input
                    type="text"
                    className="input_control"
                    value={data.Message}
                    onChange={(e) =>
                      setData({ ...data, Message: e.target.value })
                    }
                  />
                </div>
                <div className="submit_btn">
                  <button onClick={handleContact}>SEND MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
