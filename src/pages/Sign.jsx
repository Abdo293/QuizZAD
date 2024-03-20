import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Sign = () => {
  if (window.location.pathname === "/sign") {
    document.body.style.background =
      "linear-gradient(to bottom, #cca0ce, #f0ebf4";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (email) => {
    setEmail(email.target.value);
  };

  const handlePassword = (pass) => {
    setPassword(pass.target.value);
  };

  const signIn = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userArray = Object.keys(userData).map((key) => userData[key]);

    const foundUser = userArray.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser.userType === "teacher") {
        location.href = "/profile/home";
      } else if (loggedInUser.userType === "student") {
        location.href = "/profile/homeStudent";
      }
    } else {
      document.querySelector(".wrong-msg").textContent =
        "email or passowrd is wrong";
      document.getElementById("pass").style.outlineColor = "red";
      document.getElementById("email").style.outlineColor = "red";
    }
  };

  return (
    <div className="flex justify-center items-center h-svh">
      <section className="rounded-xl flex items-center justify-center flex-col lg:w-[40%] max-md:w-[80%] bg-white z-50">
        <img src="logo 2.png" alt="" />
        <p className="text-xl">Sign in your account</p>
        <form className="w-full px-6">
          <label htmlFor="email" className="block pb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmail}
            className="block w-full p-2 rounded bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none"
          />

          <label htmlFor="pass" className="block mt-4 pb-2">
            Password
          </label>
          <input
            type="password"
            id="pass"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            className="block w-full p-2 rounded bg-[#F0f0f0] mb-3 focus:outline-[#780084] duration-300 transition-all outline-none"
          />
          <p className="wrong-msg text-red-700 pb-2"></p>

          <section className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 cursor-pointer transition-all duration-200 relative left-0 h-5 w-5 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-[#780084] hover:ring hover:ring-gray-300"
            />
            <label htmlFor="remember" className="cursor-pointer">
              Remember me
            </label>
          </section>

          <input
            type="button"
            value="Sign in"
            onClick={signIn}
            className="block w-full bg-[#89288F] text-white py-2 rounded-full mt-4 cursor-pointer"
          />

          <section className="flex justify-between mt-4 mb-4 max-md:flex-col">
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="cursor-pointer underline">
                Sign up
              </Link>
            </p>
            <p className="max-md:pt-2 cursor-pointer">Forgot password?</p>
          </section>
        </form>
      </section>
      <img
        src="Exams-bro 3.png"
        alt="img"
        className="absolute bottom-0 right-0 w-[470px] max-lg:hidden"
      />
    </div>
  );
};
