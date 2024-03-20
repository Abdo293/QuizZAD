import React from "react";
import "./home.css";
import { Boxes } from "../component/boxes";
import { Navbar } from "../component/Navbar";
export const Home = () => {
  let boxData = [
    {
      img: "box1.jpg",
      title: "Group Study Sessions",
      txt: "Collaborate with fellow learners in live group study sessions facilitated .",
    },
    {
      img: "box2.jpg",
      title: "Group Study Sessions",
      txt: "Collaborate with fellow learners in live group study sessions facilitated .",
    },
    {
      img: "box3.jpg",
      title: "Group Study Sessions",
      txt: "Collaborate with fellow learners in live group study sessions facilitated .",
    },

    {
      img: "box4.jpg",
      title: "Language Conversation Classes",
      txt: "live language conversation classes where you can practice speaking .",
    },
    {
      img: "box5.jpg",
      title: "Language Conversation Classes",
      txt: "live language conversation classes where you can practice speaking .",
    },
    {
      img: "box6.jpg",
      title: "Language Conversation Classes",
      txt: "live language conversation classes where you can practice speaking .",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-[url('1.jpg')] h-[400px] w-full bg-cover home relative mt-[73px]">
        <section
          className="container mx-auto txt flex flex-col justify-center h-full z-20 relative"
          id="home"
        >
          <p className="text-white font-bold text-4xl ">
            Unlock your learning potential
          </p>
          <p className="text-white text-xl leading-[1.3] py-5 2xl:w-[33%] xl:w-[39%] lg:w-[49%] md:w-[65%] sm:w-[100%]">
            Choose from thousands of Quizzes and a vast collection of study
            materials to fuel your educational journey
          </p>
          <button className="main-btn text-white w-fit">
            Explore Our Quizzes
          </button>
        </section>
        <section id="quiz">
          <p className="text-center xl:text-4xl lg:text-4xl md:text-4xl max-md:text-3xl font-bold text-[#444] pt-5">
            Explore Our QuizZAD
          </p>
          <p className="text-center max-lg:text-2xl max-md:text-xl text-[#444] pt-5">
            Quizzes provide an opportunity for real-time engagement and{" "}
            <br></br>
            interactive learning experiences for all grades
          </p>
        </section>
        <section className="flex justify-center items-center">
          <section className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-3 xl:w-3/4 lg:w-full md:w-1/2 sm:w-1/2">
            {boxData.length
              ? boxData.map((data, index) => {
                  return (
                    <Boxes
                      key={index}
                      img={data.img}
                      title={data.title}
                      txt={data.txt}
                    />
                  );
                })
              : ""}
          </section>
        </section>
        <section
          className="bg-[url('about-us.jpg')] bg-cover h-[400px] mt-[100px]"
          id="about"
        >
          <section className="container mx-auto h-full flex flex-col justify-center items-center">
            <p className="text-7xl text-white font-bold pb-3">About Us</p>
            <p className="text-center text-white text-xl">
              From preschool to pre-tertiary, our students enjoy fun, <br></br>
              interactive and relevant lessons and are empowered to <br></br>{" "}
              think beyond the confines of the classroom.
            </p>
          </section>
        </section>
        <section
          className="flex flex-col justify-center items-center w-full mt-[60px] container mx-auto"
          id="contact"
        >
          <p className="text-center font-bold max-lg:text-4xl max-md:text-2xl text-[#780084]">
            LET’S ANSWER YOUR QUERIES
          </p>
          <section className="container mx-auto grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 mt-10">
            <section className="flex flex-col justify-center flex-wrap items-center">
              <label className="text-[#780084] self-start ml-[13%]">
                First Name
              </label>
              <input
                type="text"
                className="block w-3/4 p-2 rounded-lg mb-3 focus:outline-[#780084] duration-300 transition-all outline-none"
              />
              <label className="text-[#780084] self-start ml-[13%]">
                Last Name
              </label>
              <input
                type="text"
                className="block w-3/4 p-2 rounded-lg mb-3 focus:outline-[#780084] duration-300 transition-all outline-none"
              />
              <label className="text-[#780084] self-start ml-[13%]">
                E-mail
              </label>
              <input
                type="text"
                className="block w-3/4 p-2 rounded-lg mb-3 focus:outline-[#780084] duration-300 transition-all outline-none"
              />
            </section>
            <section className="flex flex-col justify-center flex-wrap items-center">
              <textarea
                placeholder="Leave a message for us"
                className="w-3/4 rounded-lg p-2 h-full max-lg:h-[250px] placeholder:text-[#780084] mb-3 focus:outline-[#780084] duration-300 transition-all outline-none"
              ></textarea>
            </section>
          </section>
          <button className="main-btn rounded-lg text-white py-3 self-end mr-[6%] max-lg:mr-[12%]">
            Submit
          </button>
        </section>
        <section className="bg-[#872991] mt-10 py-8">
          <section className="grid xl:grid-cols-2 lg:grid-cols-2 max-md:grid-cols-1 container mx-auto">
            <section className="h-full flex flex-col justify-center">
              <p className="font-bold text-white xl:text-6xl lg:text-5xl max-md:text-2xl max-md:text-center">
                Your pathway to smarter learning
              </p>
              <p className="text-white py-5 xl:text-3xl lg:text-3xl max-md:text-lg max-md:text-center">
                Engage, learn, and grow with our Quizzes platform
              </p>
              <section className="flex w-full">
                <button className="bg-white py-3 px-6 rounded-3xl">
                  Test yourself
                </button>
                <button className="bg-white ml-3 py-3 px-6 rounded-3xl">
                  Join us now
                </button>
              </section>
            </section>
            <section className="max-md:hidden">
              <img src="smart.png" alt="" />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};
