import React from "react";
import { Sidebar } from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import { Quizzes } from "./Quizzes";
import { Classes } from "./Classes";
import { HomeProfile } from "./homeProfile";
import { StudentProfile } from "./StudentProfile";
import { StudentClass } from "./StudentClass";
import { StudentQuizz } from "./StudentQuizz";
import { ViewClass } from "./ViewClass";
import { ViewProfile } from "./ViewProfile";
import { NewQuizz } from "./NewQuizz";
import { MakeQuiz } from "./MakeQuiz";
import { AnswerQuiz } from "./AnswerQuiz";

export const Profile = () => {
  return (
    <div className="container mx-auto">
      <section className="flex pt-5">
        <section className="max-[1024px]:fixed max-[1024px]:w-full left-0 bottom-0 z-50">
          <Sidebar />
        </section>
        <Routes>
          <Route path="home" element={<HomeProfile />} />
          <Route path="classes" element={<Classes />} />
          <Route path="quizz" element={<Quizzes />} />
          <Route path="homeStudent" element={<StudentProfile />} />
          <Route path="classStudent" element={<StudentClass />} />
          <Route path="quizStudent" element={<StudentQuizz />} />
          <Route path="classes/viewClass" element={<ViewClass />} />
          <Route path="viewProfile" element={<ViewProfile />} />
          <Route path="addQuizz" element={<NewQuizz />} />
          <Route path="quizz/addQuiz" element={<MakeQuiz />} />
          <Route path="quizz/answerQuiz" element={<AnswerQuiz />} />
        </Routes>
      </section>
    </div>
  );
};
