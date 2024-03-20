import React from "react";
import { Link } from "react-router-dom";

export const ClassNavbar = () => {
  return (
    <section className="bg-[#52057B] flex justify-around items-center rounded-xl py-1 relative">
      <p className="text-white text-2xl font-bold">Class</p>
      <p className="bg-white py-2 px-3 text-xl rounded-xl">my classes</p>
      <Link to="/profile/viewProfile">
        <img src="/profile 2.png" alt="profile" className="w-[50px]" />
      </Link>
    </section>
  );
};
