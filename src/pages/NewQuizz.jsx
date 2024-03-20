import React, { useState } from "react";
import { QuizNavbar } from "../component/QuizNavbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const NewQuizz = () => {
  // upload img
  const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // الحصول على الملف المحدد
    const reader = new FileReader(); // إنشاء قارئ لقراءة الملف

    // عند اكتمال عملية قراءة الملف
    reader.onload = () => {
      const imageDataURL = reader.result; // الحصول على بيانات URL للصورة
      setImage(imageDataURL); // تعيين الصورة في الحالة المحلية
      localStorage.setItem("uploadedImage", imageDataURL); // حفظ الصورة في localStorage
    };

    if (file) {
      reader.readAsDataURL(file); // قراءة الملف كـ Data URL
    }
  };

  const { register, watch, reset } = useForm();

  const quizTitle = watch("quizTitle");
  const subject = watch("subject");
  const gradeLevel = watch("gradeLevel");
  const quizDuration = watch("quizDuration");

  if (localStorage.quizdata != null) {
    quizData = JSON.parse(localStorage.quizData);
  }
  let quizData = localStorage.getItem("quizData")
    ? JSON.parse(localStorage.getItem("quizData"))
    : [];

  const addNewQuestion = () => {
    const uploadedImage = localStorage.getItem("uploadedImage");
    const newData = {
      quizTitle: quizTitle,
      subject: subject,
      gradeLevel: gradeLevel,
      quizDuration: parseInt(quizDuration),
      image: uploadedImage || "",
    };
    quizData.push(newData);

    localStorage.setItem("quizData", JSON.stringify(quizData));
    localStorage.removeItem("uploadedImage");

    reset();
  };

  return (
    <div className="w-full">
      <QuizNavbar />
      <section className="flex justify-center">
        <section className="mt-8 bg-[#FCF8FF] w-1/2 rounded-xl flex flex-col items-center py-5 max-md:w-full">
          <p className="text-xl text-center pb-5">New quiz</p>
          <form className="w-full px-20">
            <label>Add image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-5 block mt-2"
            />

            <label className="">Quiz title</label>
            <input
              type="text"
              id="quizTitle"
              {...register("quizTitle")}
              className="border rounded-lg block w-full py-1 mb-5 mt-2 focus:border-[#780084] duration-300 transition-all outline-none px-2"
            />

            <label className="">Subject</label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              className="border rounded-lg block w-full py-1 mb-5 mt-2 focus:border-[#780084] duration-300 transition-all outline-none px-2"
            />

            <label className="">Grade level</label>
            <select
              {...register("gradeLevel")}
              id="gradeLevel"
              defaultValue="Choose your grade level"
              className="rounded-lg block w-full py-1 mb-5 mt-2 border focus:border-[#780084] duration-300 transition-all outline-none px-2"
            >
              <option value="" disabled>
                Choose your grade level
              </option>
              <option value="Grade 1">Grade 1</option>
              <option value="Grade 2">Grade 2</option>
              <option value="Grade 3">Grade 3</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
            </select>

            <label>Quiz duration</label>
            <input
              type="number"
              id="quizDuration"
              {...register("quizDuration")}
              className="border rounded-lg block w-full py-1 mt-2 focus:border-[#780084] duration-300 transition-all outline-none px-2"
            />
          </form>
          <Link
            onClick={addNewQuestion}
            className="bg-[#702C91] text-white py-2 px-5 rounded-full mx-auto block mt-5"
          >
            Add quistion
          </Link>
        </section>
      </section>
    </div>
  );
};
