import React from "react";
import { Link } from "react-router-dom";

export const ViewProfile = () => {
  const loggedUserData = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="w-full">
      <section className="flex justify-between items-center px-8">
        <p className="font-bold text-xl">{loggedUserData.userType}</p>
        <img src="/profile 2.png" alt="profile" className="w-[50px]" />
      </section>
      <section className="bg-white rounded-xl p-8 px-52 my-5 max-[1280px]:px-10">
        <p className="text-xl font-bold text-center">View profile</p>
        <section className="flex justify-around bg-[#420462] rounded-xl text-white py-8 mt-5 max-md:flex-col max-md:justify-center max-md:items-center">
          <section className="flex flex-col justify-center items-center">
            <img
              src="/profile 2.png"
              alt="profile"
              className="w-[70px] bg-gray-500 p-2 rounded-full"
            />
            <p className="text-xl py-2 mb-2">
              {loggedUserData.firstName} {loggedUserData.lastName}
            </p>
            {/* <Link className="bg-white text-black py-2 px-5 rounded-full">
              Edit profile
            </Link> */}
          </section>
          <section>
            <p className="pb-4">
              <span className="font-bold">Full name</span>:{" "}
              {loggedUserData.firstName} {loggedUserData.lastName}
            </p>
            <p className="pb-4">
              <span className="font-bold">Birthdate</span>:{" "}
              {loggedUserData.birthdate}
            </p>
            <p className="pb-4">
              <span className="font-bold">Gender</span>: {loggedUserData.gender}
            </p>
            <p className="pb-4">
              <span className="font-bold">Phone number</span>:{" "}
              {loggedUserData.phoneNumber}
            </p>
            <p className="pb-4">
              <span className="font-bold">User type</span>:{" "}
              {loggedUserData.userType}
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};
