import React from "react";
import { Link } from "react-router-dom";

export const StudentQuizz = () => {
  const quizData = JSON.parse(localStorage.getItem("quizData"));
  const quizArray = Object.keys(quizData).map((key) => quizData[key]);
  return (
    <div className="w-full">
      <section className="bg-[#52057B] flex justify-around items-center rounded-xl py-1">
        <p className="text-white text-2xl font-bold">Quizzes</p>
        <p className="bg-white py-2 px-3 text-xl rounded-xl">my quizzes</p>
        <Link to="/profile/viewProfile">
          <img src="/profile 2.png" alt="profile" className="w-[50px]" />
        </Link>
      </section>

      <section className="bg-white mt-5 rounded-xl py-5">
        <p className="text-center text-xl font-bold pb-5">Explore Quizzes</p>
        <section className="flex justify-evenly items-center max-md:flex-col">
          <section className="w-[40%] max-md:w-full max-md:px-5">
            <input
              type="search"
              placeholder="Search quiz"
              className="border rounded-lg w-full p-2 focus:outline-[#780084] duration-300 transition-all outline-none"
            />
          </section>
          <section className="flex justify-between items-center w-[40%] max-md:w-full max-md:px-5 max-md:mt-3">
            <section className="flex justify-between items-center border p-2 rounded-lg">
              <i className="fa-solid fa-signal mr-2 text-sm"></i>
              <p>Grade</p>
            </section>
            <section className="flex justify-between items-center border p-2 rounded-lg">
              <i className="fa-solid fa-signal mr-2 text-sm"></i>
              <p>Level</p>
            </section>
            <section className="flex justify-between items-center border p-2 rounded-lg">
              <img
                src="/element-1.png"
                alt="element"
                className="w-[17px] mr-2"
              />
              <p>Subject</p>
            </section>
          </section>
        </section>
      </section>

      <section className="grid xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        {quizArray.map((e, index) => (
          <section key={index} className="mt-5 bg-white py-5 rounded-xl">
            <section className="px-5">
              <img src={e.image} alt="img" className="mx-auto rounded-xl" />
            </section>
            <p className="font-bold text-lg px-5 py-3">{e.quizTitle}</p>
            <section className="flex justify-between items-center px-5">
              <section>
                <i className="fa-regular fa-user mr-2 text-gray-400"></i>
                <span>{e.subject}</span>
              </section>
              <section>
                <i className="fa-regular fa-address-card mr-2 text-gray-400"></i>
                <span>{e.gradeLevel}</span>
              </section>
              <section>
                <i className="fa-regular fa-clock mr-2 text-gray-400"></i>
                <span>{e.quizDuration}m</span>
              </section>
            </section>
            <section className="px-5">
              <Link
                to="/profile/quizz/answerQuiz"
                className="block text-center w-full bg-[#89288F] text-white py-1 mt-3 rounded-full text-lg"
              >
                Take quiz
              </Link>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};
