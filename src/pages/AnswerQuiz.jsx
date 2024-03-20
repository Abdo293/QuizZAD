import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AnswerQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [questionData, setQuestionData] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  let timer = JSON.parse(localStorage.getItem("quizData"));
  let getTimer = timer[0].quizDuration;
  const [minutes, setMinutes] = useState(getTimer - 1);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    let quizSection = document.querySelector("section.quiz");

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          return 60;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    if (minutes === 0 || quizSection.classList.contains("hidden")) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds]);
  useEffect(() => {
    let quizSection = document.querySelector("section.quiz");
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        if (prevMinutes === 0) {
          return 0;
        } else {
          return prevMinutes - 1;
        }
      });
    }, 60000);
    if (quizSection.classList.contains("hidden")) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  useEffect(() => {
    fetch("http://localhost:3000/qusetions", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestionData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSelectedOption = (option) => {
    const currentQuestion = questionData[current];
    if (currentQuestion.correct === option) {
      const newCorrectAnswers = [...correctAnswers, currentQuestion];
      setCorrectAnswers(newCorrectAnswers);
    } else {
      const newWrongAnswers = [...wrongAnswers, currentQuestion];
      setWrongAnswers(newWrongAnswers);
    }

    if (current + 1 < questionData.length) {
      setCurrent(current + 1);
    } else {
      document.querySelector(".res").classList.remove("hidden");
      document.querySelector(".quiz").classList.add("hidden");
    }
  };

  let degree = 0;
  correctAnswers.forEach((e) => {
    degree += e.degree;
  });

  let totalDegrees = 0;
  questionData.forEach((e) => {
    totalDegrees += e.degree;
  });
  useEffect(() => {}, [correctAnswers, wrongAnswers]);
  const hiddenResult = () => {
    document.querySelector(".res").classList.add("hidden");
    document.querySelector(".correct").classList.remove("hidden");
  };
  const showDashboard = () => {
    document.querySelector(".correct").classList.add("hidden");
    document.querySelector(".res").classList.remove("hidden");
  };
  return (
    <div className="w-full">
      <section className="bg-[#702C91] text-white flex justify-around py-4 rounded-full">
        <p className="text-xl font-bold">
          {current + 1}/{questionData.length}
        </p>
        <p className="text-xl font-bold">English quiz</p>
        <p className="text-xl font-bold">
          {minutes}:{seconds}
        </p>
      </section>
      <section className="bg-white mt-5 rounded-xl py-5">
        <section className="quiz">
          <img
            src="/2150710028 1.png"
            alt="img"
            className="w-[300px] mx-auto block"
          />
          <p className="text-center py-5 text-2xl px-5">
            Question {current + 1}:{" "}
            {questionData.length > 0 && questionData[current].question}
          </p>
          <section className="flex justify-center items-center flex-wrap px-32 gap-4">
            <p
              onClick={() =>
                handleSelectedOption(questionData[current].option1)
              }
              className={`answer w-[48%] text-center mb-3 bg-[#E1C4F6] py-5 rounded-xl text-xl hover:bg-[#89288F] cursor-pointer transition-all duration-300 hover:text-white`}
            >
              {questionData.length > 0 && questionData[current].option1}
            </p>
            <p
              onClick={() =>
                handleSelectedOption(questionData[current].option2)
              }
              className={`answer w-[48%] text-center mb-3 bg-[#E1C4F6] py-5 rounded-xl text-xl hover:bg-[#89288F] cursor-pointer transition-all duration-300 hover:text-white`}
            >
              {questionData.length > 0 && questionData[current].option2}
            </p>
            <p
              onClick={() =>
                handleSelectedOption(questionData[current].option3)
              }
              className={`answer w-[48%] text-center mb-3 bg-[#E1C4F6] py-5 rounded-xl text-xl hover:bg-[#89288F] cursor-pointer transition-all duration-300 hover:text-white`}
            >
              {questionData.length > 0 && questionData[current].option3}
            </p>
            <p
              onClick={() =>
                handleSelectedOption(questionData[current].option4)
              }
              className={`answer w-[48%] text-center mb-3 bg-[#E1C4F6] py-5 rounded-xl text-xl hover:bg-[#89288F] cursor-pointer transition-all duration-300 hover:text-white`}
            >
              {questionData.length > 0 && questionData[current].option4}
            </p>
          </section>
        </section>

        <section className="res hidden">
          <p className="text-center text-2xl font-bold">
            {correctAnswers.length >= wrongAnswers.length
              ? "Congratulations"
              : "Unfortunately"}
          </p>
          <img
            src={
              correctAnswers.length >= wrongAnswers.length
                ? "/Smart guy getting award 1.png"
                : "/2663517 1.png"
            }
            alt="img"
            className="mx-auto block"
          />
          <p className="text-center text-[#8A288E] text-xl">
            you get {degree} from {totalDegrees} of quiz degrees
          </p>
          <button
            onClick={hiddenResult}
            className="block bg-[#8A288E] w-fit mx-auto text-white mt-5 py-1 px-6 rounded-full text-lg"
          >
            Check correct answers
          </button>
          <section className="grid xl:grid-cols-4 lg:grid-cols-4 max-md:grid-cols-1 mt-8">
            <section className="text-center max-lg:mt-5">
              <p>Questions</p>
              <p className="font-bold">{questionData.length} Question</p>
            </section>
            <section className="text-center max-lg:mt-5">
              <p>Completion</p>
              <p className="font-bold">100%</p>
            </section>
            <section className="text-center max-lg:mt-5">
              <p>Correct Answers</p>
              <p className="font-bold">{correctAnswers.length}</p>
            </section>
            <section className="text-center max-lg:mt-5">
              <p>Inorrect Answers</p>
              <p className="font-bold">{wrongAnswers.length}</p>
            </section>
          </section>
          <Link
            to="/profile/quizStudent"
            className="block w-fit mx-auto mt-8 bg-[#8A288E] text-white py-1 px-6 text-lg rounded-full"
          >
            Back to home page
          </Link>
        </section>

        <section className="correct mt-5 hidden">
          <p className="text-center text-[#52057B] text-2xl font-bold">
            Review answers
          </p>
          <section className="flex flex-col justify-center items-center w-full mt-5">
            {wrongAnswers.length > 0 &&
              wrongAnswers.map((answer, index) => (
                <section
                  key={index}
                  className="bg-[#EADFF2] mb-3 w-1/2 rounded-xl py-3 px-5"
                >
                  <p className="text-xl font-bold">- {answer.question}</p>
                  <p className="text-[#52057B]">answer: {answer.correct}</p>
                </section>
              ))}
            <button
              onClick={showDashboard}
              className="bg-[#8A288E] text-white py-1 px-5 rounded-full"
            >
              Back to dashboard
            </button>
          </section>
        </section>
      </section>
    </div>
  );
};
