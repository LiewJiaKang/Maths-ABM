import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Lessons from "./Lessons.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@fontsource/chakra-petch";
import Lesson from "./Lesson.tsx";
import LessonQuiz from "./LessonQuiz.tsx";
import LessonQuizTemplate from "./LessonQuizTemplate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lessons",
    element: <Lessons />,
  },
  {
    path: "/lessons/lesson1",
    element: <Lesson lesson={1} />,
  },
  {
    path: "/lessons/lesson1/quiz",
    element: <LessonQuiz lesson={1} />,
  },
  {
    path: "/lessons/lesson1/quiz/start",
    element: <LessonQuizTemplate lesson={1} />,
  },
  {
    path: "/lessons/lesson2",
    element: <Lesson lesson={2} />,
  },
  {
    path: "/lessons/lesson2/quiz",
    element: <LessonQuiz lesson={2} />,
  },
  {
    path: "/lessons/lesson2/quiz/start",
    element: <LessonQuizTemplate lesson={2} />,
  },
  {
    path: "/lessons/lesson3",
    element: <Lesson lesson={3} />,
  },
  {
    path: "/lessons/lesson3/quiz",
    element: <LessonQuiz lesson={3} />,
  },
  {
    path: "/lessons/lesson3/quiz/start",
    element: <LessonQuizTemplate lesson={3} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
