import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // password fields
  const password = watch("password");
  const retypePassword = watch("retypePassword");

  let data = [];
  if (localStorage.user != null) {
    data = JSON.parse(localStorage.user);
  }
  const onSubmit = (data) => {
    let storedData = [];
    if (localStorage.user != null) {
      storedData = JSON.parse(localStorage.user);
    }

    let newData = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      userType: data.userType,
      birthdate: data.birthdate,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
      retypePassword: data.retypePassword,
    };
    storedData.push(newData);
    localStorage.setItem("user", JSON.stringify(storedData));
    location.href = "/success";
  };

  if (window.location.pathname === "/register") {
    document.body.style.background =
      "linear-gradient(to bottom, #cca0ce, #f0ebf4";
  }

  return (
    <div className="flex justify-center items-center h-full">
      <section className="rounded-xl flex items-center justify-center flex-col lg:w-[40%] max-md:w-[80%] bg-white z-50 my-5">
        <img src="logo 2.png" alt="logo" />
        <p className="text-xl">Sign up your account</p>
        <form className="w-full px-6" onSubmit={handleSubmit(onSubmit)}>
          <section className="pt-5">
            <section className="flex justify-around gap-4 max-md:flex-col">
              <section className="flex flex-col justify-center w-full">
                <label htmlFor="first-name" className="">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="Enter your first name"
                  {...register("firstName", {
                    required: "this field is required",
                  })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                    errors.firstName
                      ? "focus:!outline-red-500 outline-red-500"
                      : ""
                  }`}
                />
                {errors.firstName && (
                  <p role="alert" className="text-red-700">
                    {errors.firstName.message}
                  </p>
                )}
              </section>
              <section className="flex flex-col justify-center w-full">
                <label htmlFor="last-name" className="">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  {...register("lastName", {
                    required: "this field is required",
                  })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  placeholder="Enter your last name"
                  className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                    errors.lastName
                      ? "focus:!outline-red-500 outline-red-500"
                      : ""
                  }`}
                />
                {errors.lastName && (
                  <p role="alert" className="text-red-700">
                    {errors.lastName.message}
                  </p>
                )}
              </section>
            </section>

            <section className="flex justify-around gap-4 my-4 max-md:flex-col">
              <section className="flex flex-col justify-center w-full">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                  aria-invalid={errors.gender ? "true" : "false"}
                  defaultValue="Choose your gender"
                  className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                    errors.gender
                      ? "focus:!outline-red-500 outline-red-500"
                      : ""
                  }`}
                >
                  <option value="">Choose your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <p role="alert" className="text-red-700">
                    {errors.gender.message}
                  </p>
                )}
              </section>
              <section className="flex flex-col justify-center w-full">
                <label htmlFor="User-type">User type</label>
                <select
                  id="User-type"
                  name="userType"
                  {...register("userType", {
                    required: "Please select your user type",
                  })}
                  aria-invalid={errors.userType ? "true" : "false"}
                  defaultValue="Choose your type"
                  className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                    errors.userType
                      ? "focus:!outline-red-500 outline-red-500"
                      : ""
                  }`}
                >
                  <option value="">Choose your type</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
                {errors.userType && (
                  <p role="alert" className="text-red-700">
                    {errors.userType.message}
                  </p>
                )}
              </section>
            </section>

            <section className="flex flex-col">
              <label htmlFor="birthdate">birthdate</label>
              <input
                type="date"
                name="birthdate"
                {...register("birthdate", {
                  required: "this field is reuired",
                })}
                aria-invalid={errors.birthdate ? "true" : "false"}
                className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                  errors.birthdate
                    ? "focus:!outline-red-500 outline-red-500"
                    : ""
                }`}
                id="birthdate"
              />
              {errors.birthdate && (
                <p role="alert" className="text-red-700">
                  {errors.birthdate.message}
                </p>
              )}
            </section>

            <section className="flex flex-col mt-4">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: "This field is required",
                  pattern: {
                    value: /^(010|011|012|015)[0-9]{8}$/,
                    message: "Invalid mobile phone number",
                  },
                })}
                aria-invalid={errors.phoneNumber ? "true" : "false"}
                className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                  errors.phoneNumber
                    ? "focus:!outline-red-500 outline-red-500"
                    : ""
                }`}
                id="phone"
                placeholder="Enter your Phone number"
              />
              {errors.phoneNumber && (
                <p role="alert" className="text-red-700">
                  {errors.phoneNumber.message}
                </p>
              )}
            </section>

            <section className="flex flex-col mt-4">
              <label htmlFor="e-mail">Email</label>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                  errors.email ? "focus:!outline-red-500 outline-red-500" : ""
                }`}
                id="e-mail"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p role="alert" className="text-red-700">
                  {errors.email.message}
                </p>
              )}
            </section>

            <section className="flex flex-col mt-4">
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                  errors.password
                    ? "focus:!outline-red-500 outline-red-500"
                    : ""
                }`}
                name="password"
                id="pass"
                {...register("password", {
                  required: "this field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p role="alert" className="text-red-700">
                  {errors.password.message}
                </p>
              )}
            </section>

            <section className="flex flex-col mt-4">
              <label htmlFor="retypePassword">Re-type password</label>
              <input
                type="password"
                className={`block w-full p-2 rounded-lg bg-[#F0f0f0] focus:outline-[#780084] duration-300 transition-all outline-none ${
                  errors.retypePassword
                    ? "focus:!outline-red-500 outline-red-500"
                    : ""
                }`}
                name="retypePassword"
                id="retypePassword"
                {...register("retypePassword", {
                  required: "this field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={errors.retypePassword ? "true" : "false"}
                placeholder="Enter your password again"
              />
              {errors.retypePassword && (
                <p role="alert" className="text-red-700">
                  {errors.retypePassword.message}
                </p>
              )}
              {password !== retypePassword && (
                <p role="alert" className="text-red-700">
                  Passwords do not match
                </p>
              )}
            </section>
          </section>

          <input
            type="submit"
            value="Sign in"
            className="block w-full bg-[#89288F] text-white py-2 rounded-full mt-4 cursor-pointer"
          />

          <section className="flex justify-between mt-4 mb-4 max-md:flex-col">
            <p>
              You have an account?{" "}
              <Link to={"/sign"} className="cursor-pointer underline">
                Sign in
              </Link>
            </p>
          </section>
        </form>
      </section>
      <img
        src="Exams-bro 3.png"
        alt="img"
        className="fixed bottom-0 right-0 w-[470px] max-lg:hidden"
      />
    </div>
  );
};
