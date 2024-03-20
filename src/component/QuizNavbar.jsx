import React from "react";
import { Link, NavLink } from "react-router-dom";

export const QuizNavbar = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#000" : "#fff",
      background: isActive ? "#fff" : "none",
    };
  };
  return (
    <section className="bg-[#52057B] flex justify-around items-center rounded-xl py-1">
      <p className="text-white text-2xl font-bold max-md:text-xl">Quizzes</p>
      <section className="flex">
        <NavLink
          to="/profile/quizz"
          style={activeLink}
          className="mr-3 text-white py-2 px-3 text-xl rounded-xl quizLink max-md:text-[18px]"
        >
          my quizzes
        </NavLink>
        <NavLink
          to="/profile/addQuizz"
          style={activeLink}
          className="text-white py-2 px-3 text-xl rounded-xl quizLink max-md:text-[18px]"
        >
          new quizz
        </NavLink>
      </section>
      <Link to="/profile/viewProfile">
        <img src="/profile 2.png" alt="profile" className="w-[50px]" />
      </Link>
    </section>
  );
};
