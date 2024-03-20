import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  useEffect(() => {
    let sideLinks = document.querySelector(".side-links");
    let xMark = document.querySelector(".x-mark");
    let bars = document.querySelector(".bars");
    if (bars && xMark && sideLinks) {
      bars.addEventListener("click", () => {
        sideLinks.classList.remove("-right-full");
        sideLinks.classList.add("right-0");
      });

      xMark.addEventListener("click", () => {
        sideLinks.classList.remove("right-0");
        sideLinks.classList.add("-right-full");
      });
    }
  }, []);
  return (
    <div className="bg-purple-100 py-2 fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto">
        <section className="flex justify-between">
          <section className="flex items-center justify-center">
            <img src="logo 2.png" alt="logo" className="w-14 " />
            <p className="text-gray-700 text-2xl font-bold">QuizZAD</p>
          </section>
          <ul className="flex items-center justify-center max-md:hidden">
            <li>
              <a
                href="#home"
                className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#quiz"
                className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
              >
                Quizzes
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
              >
                Contact us
              </a>
            </li>
          </ul>
          <section className="max-md:mr-3 flex items-center max-md:hidden">
            <Link to="/sign" className="font-medium text-gray-700">
              <p>Sign in</p>
            </Link>
          </section>
          <section className="hidden max-md:flex items-center text-xl cursor-pointer">
            <i className="fa-solid fa-bars bars"></i>
          </section>
          <section className="hidden max-md:flex fixed w-[50%] z-50 top-0 h-full justify-center bg-white duration-500 transition-all -right-full side-links">
            <ul className="text-center pt-5 w-full">
              <i className="fa-solid fa-x text-right w-full pr-8 text-lg cursor-pointer x-mark"></i>
              <li className="pt-6">
                <a
                  href="#home"
                  className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
                >
                  Home
                </a>
              </li>
              <li className="pt-6">
                <a
                  href="#quiz"
                  className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
                >
                  Quizzes
                </a>
              </li>
              <li className="pt-6">
                <a
                  href="#about"
                  className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
                >
                  About Us
                </a>
              </li>
              <li className="pt-6 pb-3">
                <a
                  href="#contact"
                  className="pr-4 font-medium text-gray-700 hover:text-[#780084]"
                >
                  Contact us
                </a>
              </li>
              <li className="pt-3 border-t">
                <Link to="/sign" className="font-medium text-gray-700">
                  <p>Sign in</p>
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
};
