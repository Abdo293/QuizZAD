import React from "react";
import { useForm } from "react-hook-form";

export const MakeQuiz = () => {
  const { register, watch, reset } = useForm();
  const question = watch("question");
  const option1 = watch("option1");
  const option2 = watch("option2");
  const option3 = watch("option3");
  const option4 = watch("option4");
  const correct = watch("correct");
  const degree = watch("degree");

  const addNewQuestion = () => {
    fetch("http://localhost:3000/qusetions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        option1,
        option2,
        option3,
        option4,
        correct,
        degree: parseInt(degree),
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    reset();
  };

  return (
    <div className="w-full flex justify-center">
      <section className="bg-white flex justify-center w-full rounded-lg py-5">
        <section className="w-full px-8">
          <p className="text-center font-bold text-xl pb-5">Questions</p>
          <form>
            <label>Question</label>
            <input
              type="text"
              id="question"
              {...register("question")}
              className="block w-full border rounded py-1 mb-5 px-2 focus:border-[#780084] duration-300 transition-all outline-none"
            />

            <label>Option 1</label>
            <input
              type="text"
              id="option1"
              {...register("option1")}
              className="block w-full border rounded py-1 mb-5 px-2 focus:border-[#780084] duration-300 transition-all outline-none"
            />

            <label>Option 2</label>
            <input
              type="text"
              id="option2"
              {...register("option2")}
              className="block w-full border rounded py-1 mb-5 px-2 focus:border-[#780084] duration-300 transition-all outline-none"
            />

            <label>Option 3</label>
            <input
              type="text"
              id="option3"
              {...register("option3")}
              className="block w-full border rounded py-1 mb-5 px-2 focus:border-[#780084] duration-300 transition-all outline-none"
            />

            <label>Option 4</label>
            <input
              type="text"
              id="option4"
              {...register("option4")}
              className="block w-full border rounded py-1 mb-5 px-2 focus:border-[#780084] duration-300 transition-all outline-none"
            />

            <label>Correct answer</label>
            <input
              type="text"
              id="correct"
              {...register("correct")}
              className="block w-full border rounded py-1 mb-5 px-2 focus:border-[#780084] duration-300 transition-all outline-none"
            />

            <label>Question degree</label>
            <select
              id="degree"
              {...register("degree")}
              className="block border w-full px-2 py-1 rounded focus:border-[#780084] duration-300 transition-all outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input
              type="button"
              value="Add question"
              onClick={addNewQuestion}
              className="py-2 px-5 text-white rounded-full block mx-auto mt-5 bg-[#780084]"
            />
          </form>
        </section>
      </section>
    </div>
  );
};
