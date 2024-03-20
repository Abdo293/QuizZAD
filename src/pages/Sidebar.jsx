import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = () => {
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "#000",
      background: isActive ? "#89288F" : "#fff",
    };
  };
  return (
    <div>
      <section>
        <section className="max-[1024px]:w-full max-[1024px]:flex max-[1024px]:h-full w-[80%] h-screen rounded-lg bg-gradient-to-b from-[#cca0ce] to-[#f0ebf4]">
          <section className="flex items-center justify-center max-[1024px]:hidden">
            <img src="/logo 2.png" alt="logo" className="w-[75px] mr-3" />
            <p className="text-2xl font-bold text-white">QuizZAD</p>
          </section>
          <section className="text-center max-[1024px]:w-full">
            <section className="flex flex-col justify-center items-center px-5 max-[1024px]:flex-row">
              <NavLink
                to={
                  loggedInUser.userType === "teacher"
                    ? "/profile/home"
                    : "/profile/homeStudent"
                }
                style={activeLink}
                className="max-[1024px]:mb-0 justify-center items-center max-[1024px]:mr-2 bg-white mb-5 px-8 py-2 rounded-xl w-full cursor-pointer hover:bg-[#89288f] hover:text-white transition-all duration-300"
              >
                <i className="fa-solid fa-house mr-2 max-md:mr-0"></i>{" "}
                <span className="max-md:hidden">Home</span>
              </NavLink>
              <NavLink
                to={
                  loggedInUser.userType === "teacher"
                    ? "/profile/classes"
                    : "/profile/classStudent"
                }
                style={activeLink}
                className="max-[1024px]:mb-0 max-[1024px]:mr-2 bg-white mb-5 px-8 py-2 rounded-xl w-full cursor-pointer hover:bg-[#89288f] hover:text-white transition-all duration-300"
              >
                <i className="fa-solid fa-graduation-cap mr-2 max-md:mr-0"></i>{" "}
                <span className="max-md:hidden">Classes</span>
              </NavLink>
              <NavLink
                to={
                  loggedInUser.userType === "teacher"
                    ? "/profile/quizz"
                    : "/profile/quizStudent"
                }
                style={activeLink}
                className="max-[1024px]:mb-0 max-[1024px]:mr-2 bg-white mb-5 px-8 py-2 rounded-xl w-full cursor-pointer hover:bg-[#89288f] hover:text-white transition-all duration-300"
              >
                <i className="fa-regular fa-note-sticky mr-2 max-md:mr-0"></i>{" "}
                <span className="max-md:hidden">Quizzes</span>
              </NavLink>

              <img
                src="/teacher.png"
                alt="teacher"
                className="max-[1024px]:hidden"
              />

              <Link
                to="/sign"
                className="max-[1024px]:my-3 bg-white mb-5 px-8 py-2 rounded-xl w-full cursor-pointer hover:bg-[#89288f] hover:text-white transition-all duration-300"
              >
                <i className="fa-solid fa-right-from-bracket mr-2 max-md:mr-0"></i>{" "}
                <span className="max-md:hidden">Log out</span>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
