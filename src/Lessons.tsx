import {
  faArrowsRotate,
  faBook,
  faDoorOpen,
  faLock,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Lessons() {
  if (localStorage.getItem("lessonResult") == null) {
    localStorage.setItem("lessonResult", JSON.stringify([0, 0, 0]));
  }
  const [lessonResult, setLessonResult] = useState(
    JSON.parse(String(localStorage.getItem("lessonResult"))),
  );
  const lesson1 = lessonResult[0];
  const lesson2 = lessonResult[1];
  const lesson3 = lessonResult[2];
  return (
    <div className="min-h-screen w-full bg-sky-400 to-sky-600 ">
      <div className="mx-[auto] flex min-h-screen w-5/6 flex-col items-center bg-white drop-shadow-lg">
        <h1 className="mt-12 font-ChakraPetch text-6xl">Lessons</h1>
        <Link to={`/`}>
          <FontAwesomeIcon
            className="absolute top-3 left-3 text-4xl text-gray-400 hover:text-gray-600"
            icon={faDoorOpen}
          />
        </Link>
        <button
          onClick={() => {
            if (confirm("Delete data?")) {
              localStorage.setItem("lessonResult", JSON.stringify([0, 0, 0]));
              setLessonResult([0, 0, 0]);
            }
          }}
        >
          <FontAwesomeIcon
            className="absolute top-3 right-3 text-4xl text-gray-400 hover:text-gray-600"
            icon={faArrowsRotate}
          />
        </button>
        <div className="flex h-full w-full flex-col items-center justify-evenly lg:mt-12 lg:flex-row lg:items-start">
          <div className="min-content)] h-[max(25%, w-2/3 rounded-md border border-gray-500 bg-white p-2 lg:h-1/2 lg:w-1/4">
            <h2 className="font-ChakraPetch text-2xl md:text-3xl">
              Introduction
              <span className="ml-2 text-lg">
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson1 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson1 > 1 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson1 > 2 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
              </span>
            </h2>
            <p className="ml-2 text-gray-600 text-sm">
              A basic introduction to the fundamentals of trigonometry.
            </p>
            <Link
              to={`/lessons/lesson1`}
              className="m-4 inline-block rounded-md bg-cyan-600 p-2 text-white hover:bg-cyan-500"
            >
              <FontAwesomeIcon icon={faBook} /> Study
            </Link>
            <Link
              to={`/lessons/lesson1/quiz`}
              className="m-4 inline-block rounded-md bg-gray-500 p-2 text-white"
            >
              <FontAwesomeIcon icon={faPlay} /> Go to quiz
            </Link>
          </div>
          <div className="min-content)] h-[max(25%, w-2/3 rounded-md border border-gray-500 bg-white p-2 lg:h-1/2 lg:w-1/4">
            <h2 className="font-ChakraPetch text-2xl md:text-3xl">
              Trigonometric Functions
              <span className="ml-2 text-lg">
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson2 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson2 > 1 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson2 > 2 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
              </span>
            </h2>
            <p className="ml-2 text-gray-600 text-sm">
              Learn about basic trigonometric functions: sine, cosine and
              tangent.
            </p>
            {lesson1 ? (
              <>
                <Link
                  to={`/lessons/lesson2`}
                  className="m-4 inline-block rounded-md bg-cyan-600 p-2 text-white hover:bg-cyan-500"
                >
                  <FontAwesomeIcon icon={faBook} /> Study
                </Link>
                <Link
                  to={`/lessons/lesson2/quiz`}
                  className="m-4 inline-block rounded-md bg-gray-500 p-2 text-white"
                >
                  <FontAwesomeIcon icon={faPlay} /> go to quiz
                </Link>
              </>
            ) : (
              <button className="m-4 rounded-md bg-gray-500 p-2 text-gray-200">
                <FontAwesomeIcon icon={faLock} /> Locked
              </button>
            )}
          </div>
          <div className="min-content)] h-[max(25%, w-2/3 rounded-md border border-gray-500 bg-white p-2 lg:h-1/2 lg:w-1/4">
            <h2 className="font-ChakraPetch text-2xl md:text-3xl">
              Trigonometric Values of Special Angles
              <span className="ml-2 whitespace-nowrap text-lg">
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson3 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson3 > 1 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className={`text-gray-400 ${lesson3 > 2 ? "text-yellow-500" : ""}`}
                  icon={faStar}
                />
              </span>
            </h2>
            <p className="ml-2 text-gray-600 text-sm">
              Learn about the trigonometric values of special angles (0°, 30°,
              45° and 60°) and proof using Pythagoras theorem
            </p>
            {lesson2 ? (
              <>
                <Link
                  to={`/lessons/lesson3`}
                  className="m-4 inline-block rounded-md bg-cyan-600 p-2 text-white hover:bg-cyan-500"
                >
                  <FontAwesomeIcon icon={faBook} /> Study
                </Link>
                <Link
                  to={`/lessons/lesson3/quiz`}
                  className="m-4 inline-block rounded-md bg-gray-500 p-2 text-white"
                >
                  <FontAwesomeIcon icon={faPlay} /> go to quiz
                </Link>
              </>
            ) : (
              <button className="m-4 rounded-md bg-gray-500 p-2 text-gray-200">
                <FontAwesomeIcon icon={faLock} /> Locked
              </button>
            )}
          </div>
          {lesson3 ? (
            <div className="absolute bottom-0 h-12 w-full bg-green-600 font-bold text-white">
              <p className="pt-2 pl-4">You have passed the test!</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
