import React from "react";
import { Link } from "react-router-dom";

export const StudentProfile = () => {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="w-full">
      <section className="flex justify-between items-center mb-5 px-8 relative">
        <p className="font-bold text-xl pb-5">student</p>
        <Link to="/profile/viewProfile">
          <img src="/profile 2.png" alt="profile" className="w-[50px]" />
        </Link>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-[#52057B] to-[#8a62e7] flex justify-around">
        <section className="flex flex-col justify-center max-[1280px]:ml-5 max-md:text-center max-md:py-5">
          <p className="text-[#ccc]">September 4, 2023</p>
          <p className="mt-5 text-white text-3xl font-bold max-md:text-xl">
            Welcome back, {loggedInUser.firstName}
          </p>
          <p className="text-[#ccc] pt-2">
            Always stay updated in your student portal
          </p>
        </section>
        <section>
          <img
            src="/img 1.png"
            alt="img"
            className="h-[190px] pt-3 max-md:hidden"
          />
        </section>
      </section>

      <section className="flex justify-between items-center gap-3 mt-5 max-md:flex-col">
        <section className="bg-[#f7f3fa] w-full text-center rounded-lg flex items-center justify-between p-5 border-b-[#8A288E] border-b-4 py-8">
          <div>
            <i className="fa-solid fa-book-open-reader text-2xl text-[#8A288E]"></i>
            <p className="text-[#8A288E]">Students</p>
          </div>
          <div className="text-[#8A288E] text-xl font-bold student-number">
            19
          </div>
        </section>
        <section className="bg-[#f7f3fa] w-full text-center rounded-lg flex items-center justify-between p-5 border-b-[#8A288E] border-b-4 py-8">
          <div>
            <i className="fa-solid fa-book-open-reader text-2xl text-[#8A288E]"></i>
            <p className="text-[#8A288E]">Classes</p>
          </div>
          <div className="text-[#8A288E] text-xl font-bold student-number">
            9
          </div>
        </section>
        <section className="bg-[#f7f3fa] w-full text-center rounded-lg flex items-center justify-between p-5 border-b-[#8A288E] border-b-4 py-8">
          <div>
            <i className="fa-solid fa-book-open-reader text-2xl text-[#8A288E]"></i>
            <p className="text-[#8A288E]">Quiz</p>
          </div>
          <div className="text-[#8A288E] text-xl font-bold student-number">
            5
          </div>
        </section>
      </section>

      <section className="flex justify-center items-center">
        <img
          src="/college students-bro 1.png"
          alt="img"
          className="h-[340px]"
        />
      </section>
    </div>
  );
};
