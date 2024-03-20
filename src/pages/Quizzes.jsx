import React from "react";
import { QuizNavbar } from "../component/QuizNavbar";
import { Link } from "react-router-dom";

export const Quizzes = () => {
  const quizData = JSON.parse(localStorage.getItem("quizData"));
  let quizArray;
  if (quizData) {
    quizArray = Object.keys(quizData).map((key) => quizData[key]);
  }
  return (
    <div className="w-full">
      <QuizNavbar />
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

      <section className="grid xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-5 relative">
        {quizArray != null ? (
          quizArray.map((e, index) => (
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
                  to="/profile/quizz/addQuiz"
                  className="block text-center w-full bg-[#89288F] text-white py-1 mt-3 rounded-full text-lg"
                >
                  View quiz
                </Link>
              </section>
            </section>
          ))
        ) : (
          <p className="text-gray-500 text-center absolute top-1/2 left-1/2 pt-8 text-xl">
            not found quiz
          </p>
        )}
      </section>
    </div>
  );
};
