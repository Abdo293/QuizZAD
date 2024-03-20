import React from "react";

export const RegisterSuccess = () => {
  if (window.location.pathname === "/success") {
    document.body.style.background =
      "linear-gradient(to bottom, #cca0ce, #f0ebf4";
  }

  const lastUserData = JSON.parse(localStorage.getItem("user"));
  const findLastUser = lastUserData[lastUserData.length - 1];

  const register = () => {
    if (findLastUser) {
      if (findLastUser.userType === "teacher") {
        location.href = "/profile/home";
      } else if (findLastUser.userType === "student") {
        location.href = "/profile/homeStudent";
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-svh">
      <section className="rounded-xl flex items-center justify-center flex-col lg:w-[40%] max-md:w-[80%] bg-white z-50">
        <img src="logo 2.png" alt="logo" />
        <p className="text-xl">Successfully account registration </p>

        <p className="py-5">thank you</p>
        <button
          onClick={register}
          className="block w-1/4 bg-[#89288F] text-white py-2 rounded-full mt-4 cursor-pointer text-center mb-5"
        >
          View your page
        </button>
      </section>
      <img
        src="Exams-bro 3.png"
        alt="img"
        className="absolute bottom-0 right-0 w-[470px] max-lg:hidden"
      />
    </div>
  );
};
