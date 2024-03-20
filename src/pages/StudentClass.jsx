import React from "react";
import { Link } from "react-router-dom";
import { ClassNavbar } from "../component/ClassNavbar";

export const StudentClass = () => {
  return (
    <div className="w-full">
      <ClassNavbar />

      <section className="bg-white rounded-xl mt-5 px-5 py-5">
        <p className="text-center text-xl font-bold pb-5">Explore Class</p>
        <section className="flex justify-evenly items-center max-md:flex-col">
          <section className="w-[40%] max-md:w-full max-md:mb-3">
            <input
              type="search"
              placeholder="Search class"
              className="border rounded-lg w-full p-2 focus:outline-[#780084] duration-300 transition-all outline-none"
            />
          </section>
          <section className="flex justify-between items-center w-[40%] max-md:w-full">
            <section className="flex justify-between items-center border p-2 rounded-lg">
              <i className="fa-solid fa-signal mr-2 text-sm"></i>
              <p>Grade</p>
            </section>
            <section className="flex justify-between items-center border p-2 rounded-lg">
              <i className="fa-solid fa-signal mr-2 text-sm"></i>
              <p>Level</p>
            </section>
            <section className="flex justify-between items-center border p-2 rounded-lg">
              <img
                src="/element-1.png"
                alt="element"
                className="w-[17px] mr-2"
              />
              <p>Subject</p>
            </section>
          </section>
        </section>

        <section className="mt-5">
          <section className="overflow-auto">
            <table className="w-full max-[1024px]:min-w-[1000px]">
              <thead className="bg-[#89288F] text-white mb-5">
                <tr className="rounded-xl">
                  <th className="py-3">Id</th>
                  <th className="py-3">Class name</th>
                  <th className="py-3">Grade level</th>
                  <th className="py-3">No. students</th>
                  <th className="py-3">No. quizzes</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center space-y-4">
                <tr className="border mb-5">
                  <td className="py-3">1</td>
                  <td className="py-3">Mathematics</td>
                  <td className="py-3">5th</td>
                  <td className="py-3">15</td>
                  <td className="py-3">5</td>
                  <td>
                    <Link
                      to="/profile/classes/viewClass"
                      className="bg-[#89288F] py-2 px-6 text-white rounded-full"
                    >
                      View class
                    </Link>
                  </td>
                </tr>
                <tr className="border mb-5">
                  <td className="py-3">2</td>
                  <td className="py-3">Mathematics</td>
                  <td className="py-3">5th</td>
                  <td className="py-3">15</td>
                  <td className="py-3">5</td>
                  <td>
                    <Link
                      to="/profile/classes/viewClass"
                      className="bg-[#89288F] py-2 px-6 text-white rounded-full"
                    >
                      View class
                    </Link>
                  </td>
                </tr>
                <tr className="border mb-5">
                  <td className="py-3">3</td>
                  <td className="py-3">Mathematics</td>
                  <td className="py-3">5th</td>
                  <td className="py-3">15</td>
                  <td className="py-3">5</td>
                  <td>
                    <Link
                      to="/profile/classes/viewClass"
                      className="bg-[#89288F] py-2 px-6 text-white rounded-full"
                    >
                      View class
                    </Link>
                  </td>
                </tr>
                <tr className="border mb-5">
                  <td className="py-3">4</td>
                  <td className="py-3">Mathematics</td>
                  <td className="py-3">5th</td>
                  <td className="py-3">15</td>
                  <td className="py-3">5</td>
                  <td>
                    <Link
                      to="/profile/classes/viewClass"
                      className="bg-[#89288F] py-2 px-6 text-white rounded-full"
                    >
                      View class
                    </Link>
                  </td>
                </tr>
                <tr className="border mb-5">
                  <td className="py-3">5</td>
                  <td className="py-3">Mathematics</td>
                  <td className="py-3">5th</td>
                  <td className="py-3">15</td>
                  <td className="py-3">5</td>
                  <td>
                    <Link
                      to="/profile/classes/viewClass"
                      className="bg-[#89288F] py-2 px-6 text-white rounded-full"
                    >
                      View class
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </section>
    </div>
  );
};
