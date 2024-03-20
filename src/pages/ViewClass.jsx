import React from "react";
import { ClassNavbar } from "../component/ClassNavbar";

export const ViewClass = () => {
  return (
    <div className="w-[100%]">
      <ClassNavbar />
      <section className="grid xl:grid-cols-2 lg:grid-cols-2 max-md:grid-cols-1 my-5 gap-5">
        <section className="bg-white rounded-xl px-5">
          <img
            src="/Group 37991.png"
            alt="img"
            className="max-w-full px-5 block mx-auto mt-8"
          />
          <p className="font-bold text-2xl py-5">Mathematics Class</p>
          <section className="flex items-center">
            <section className="flex items-center">
              <img src="/profile 2.png" alt="img" className="w-[30px] mr-2" />
              <p>Mohamed basyoni</p>
            </section>
            <p className="px-5 font-bold">Category : Mathematics</p>
            <p className="text-[#04A4F4]">Grade Level : 10</p>
          </section>
          <p className="py-3">
            Description : A mathematical class explores concepts in algebra,
            geometry, calculus, and statistics. Students solve equations,
            analyze geometric shapes, and learn to model real-world situations .
          </p>
        </section>
        <section className="bg-white rounded-xl px-5 ">
          <p className="font-bold text-center py-7 text-2xl">class member</p>
          <table className="w-full text-center">
            <thead className="bg-[#89288F] text-white mb-5">
              <tr className="rounded-xl">
                <th className="py-3">id</th>
                <th className="py-3">Name</th>
                <th className="py-3">Role</th>
              </tr>
            </thead>
            <tbody className="border">
              <tr className="border">
                <td className="py-3">1</td>
                <td className="py-3">Ahmed mohamed</td>
                <td className="py-3">teacher</td>
              </tr>
              <tr className="border">
                <td className="py-3">1</td>
                <td className="py-3">Ahmed mohamed</td>
                <td className="py-3">teacher</td>
              </tr>
              <tr className="border">
                <td className="py-3">1</td>
                <td className="py-3">Ahmed mohamed</td>
                <td className="py-3">teacher</td>
              </tr>
              <tr className="border">
                <td className="py-3">1</td>
                <td className="py-3">Ahmed mohamed</td>
                <td className="py-3">teacher</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
};
