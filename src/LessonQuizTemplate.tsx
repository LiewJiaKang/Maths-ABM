import { useState } from "react";
import triangle_8_15_17 from "./assets/triangle 8 15 17.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faForward,
  faRedo,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import useSound from "use-sound";
import correct from "./assets/correct.mp3";
import wrong from "./assets/wrong.mp3";
import lesson2_q1_img from "./assets/lesson2-q1.png";
import lesson2_q2_img from "./assets/lesson2-q2.png";
import lesson2_q3_img from "./assets/lesson2-q3.png";
import lesson2_q4_img from "./assets/lesson2-q4.png";

function LessonQuizTemplate(props: { lesson: number }) {
  const [lessonResult, setLessonResult] = useState(
    JSON.parse(String(localStorage.getItem("lessonResult"))),
  );
  const Questions = [
    [
      [
        "Trigonometry functions can be applied on: ",
        "",
        "Right-angled triangle",
        "Circle",
        "Pentagon",
        "Hexagon",
        0,
      ],
      [
        "What is the length of the hypotenuse side?",
        triangle_8_15_17,
        "8",
        "15",
        "17",
        "20",
        2,
      ],
      [
        "What is the length of the adjacent side?",
        triangle_8_15_17,
        "8",
        "15",
        "17",
        "20",
        1,
      ],
      [
        "What is the length of the opposite side?",
        triangle_8_15_17,
        "8",
        "15",
        "17",
        "20",
        0,
      ],
      [
        "Which is the longest side of the triangle?",
        "",
        "opposite",
        "hypotenuse",
        "adjacent",
        "Who knows",
        1,
      ],
      [
        "What is the length of the adjacent side plus the opposite side?",
        triangle_8_15_17,
        "25",
        "23",
        "32",
        "28",
        1,
      ],
      [
        "What is the length of the hypothenuse side plus the opposite side?",
        triangle_8_15_17,
        "25",
        "23",
        "32",
        "28",
        0,
      ],
      [
        "What is the length of the adjacent side plus the hypothenuse side?",
        triangle_8_15_17,
        "25",
        "23",
        "32",
        "28",
        2,
      ],
      [
        "Trigonometry is a subtopic of:",
        "",
        "Geography",
        "Geometry",
        "Geology",
        "Grrrr",
        1,
      ],
      [
        "Trigonometry can be used in various situation, except:",
        "",
        "Calculate the length of the side of the triangle.",
        "Designing products",
        "3D game devolopment",
        "Find a girlfriend",
        3,
      ],
    ],
    [
      [
        "Find the value of tan(x).",
        lesson2_q1_img,
        "3/4",
        "3/5",
        "5/3",
        "4/5",
        0,
      ],
      [
        "Find the value of cos C",
        lesson2_q2_img,
        "20/29",
        "20/21",
        "21/20",
        "29/30",
        0,
      ],
      ["Find value of sin A", lesson2_q3_img, "3/4", "4/5", "5/3", "5/4", 0],
      [
        "What is the correct equation to solve x?",
        lesson2_q4_img,
        "Sin(45°) = 13/x",
        "Sin(45°) = x/13",
        "Cos(45°) = x/13",
        "Tan(45°) = x/13",
        0,
      ],
    ],
    [
      ["What is the value for tan 45°?", "", "1", "2", "0", "1/2", 0],
      ["What is the value for cos 60°?", "", "1/2", "2", "3", "1", 0],
      ["What is the value for sin 30°?", "", "1/2", "1", "√3/2", "√3/3", 0],
      ["What is the value for sin 45°?", "", "1/2", "2", "1/√2", "√3/2", 2],
      ["What is the value for tan 30°?", "", "1/2", "1", "√3/2", "1/√3", 3],
      ["What is the value for sin 60°?", "", "1/2", "2", "√3/2", "√3/3", 2],
      ["What is the value for cos 30°?", "", "1/2", "1", "√3/2", "√3/3", 2],
      ["What is the value for tan 45°?", "", "1/2", "1", "√2/2", "√3/2", 1],
      ["What is the value for cos 0°?", "", "1/2", "1", "0", "1/2", 1],
    ],
  ];
  const { lesson } = props;

  const [quizNumber, setQuizNumber] = useState(0);
  const [selectAnswer, setSelectAnswer] = useState(-1);
  const [corectAnswer, setCorrectAnswer] = useState(0);
  const wrongQuestionsInitialValue: (string | number)[][] = [];
  const [wrongAnswers, setWrongAnswers] = useState(wrongQuestionsInitialValue);
  const [lessonQuestions, setLessonQuestions] = useState(Questions[lesson - 1]);
  const [answeringWrongQuestions, setAnsweringWrongQuestions] = useState(false);

  const [correctSound] = useSound(correct);
  const [wrongSound] = useSound(wrong);

  const question = lessonQuestions[Number(quizNumber)];
  const title = question[0];
  const choices = [question[2], question[3], question[4], question[5]];
  const img = question[1];
  const answer = question[6];

  return (
    <div
      className="min-h-screen w-full bg-sky-400 to-sky-600 "
      onLoad={() => {
        setSelectAnswer(-1);
      }}
    >
      <div className="mx-[auto] flex min-h-screen w-5/6 flex-col items-center justify-center bg-white drop-shadow-lg">
        <h1 className="absolute top-2 right-2 font-bold text-3xl">
          {corectAnswer}/{Questions[lesson - 1].length}
        </h1>
        <h1 className="mb-6 font-bold text-3xl lg:mx-8">{title}</h1>
        {img ? <img className="h-[30vh]" src={String(img)} alt="" /> : ""}
        <div className="mt-6 grid h-[40vh] w-11/12 grid-cols-2 grid-rows-2 text-white lg:w-3/5">
          {choices.map((choice, index) => {
            return index.toString() == answer.toString() ? (
              <button
                className={
                  "m-4 rounded-lg bg-sky-400 font-bold text-xl hover:bg-sky-300" +
                  (selectAnswer == corectAnswer
                    ? " border-4 border-green-700 text-green-700"
                    : "")
                }
                onClick={() => {
                  setSelectAnswer(index);
                  setCorrectAnswer(corectAnswer + 1);
                  correctSound();
                }}
              >
                {choice}
                {selectAnswer != -1 ? (
                  <FontAwesomeIcon className="ml-4" icon={faCheckCircle} />
                ) : (
                  ""
                )}
              </button>
            ) : (
              <button
                className={
                  "m-4 rounded-lg bg-sky-400 font-bold text-xl hover:bg-sky-300" +
                  (selectAnswer == index
                    ? " border-4 border-red-600 text-red-600"
                    : "")
                }
                onClick={() => {
                  setSelectAnswer(index);
                  wrongSound();
                  if (!answeringWrongQuestions) {
                    const newWrongAnswers = wrongAnswers;
                    newWrongAnswers.push(question);
                    setWrongAnswers(newWrongAnswers);
                    console.log(newWrongAnswers);
                  }
                }}
                disabled={selectAnswer != -1}
              >
                {choice}
                {selectAnswer == index ? (
                  <FontAwesomeIcon className="ml-4" icon={faXmarkCircle} />
                ) : (
                  ""
                )}
              </button>
            );
          })}
        </div>
        {answeringWrongQuestions ? (
          <div className="rounded-full bg-red-600 text-white p-2">
            You are answering questions that you have selected the wrong answer
            previously.
          </div>
        ) : (
          ""
        )}
        {selectAnswer != -1 ? (
          <div
            className={
              "absolute bottom-0 flex h-16 w-full items-center justify-between border-t-4 bg-white p-4 font-bold text-lg" +
              (selectAnswer != answer
                ? " border-t-red-600 text-red-600"
                : " border-t-green-700 text-green-700")
            }
          >
            {selectAnswer == answer ? (
              <div>
                <FontAwesomeIcon className="ml-4" icon={faCheckCircle} />
                <span> Answer correct!</span>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon className="ml-4" icon={faXmarkCircle} />
                <span> The answer is wrong.</span>
              </div>
            )}
            {lessonQuestions.length > Number(quizNumber) + 1 ? (
              <button
                className="inline-block rounded bg-sky-500 p-2 text-white"
                onClick={() => {
                  setSelectAnswer(-1);
                  setQuizNumber(quizNumber + 1);
                }}
              >
                Next question <FontAwesomeIcon icon={faForward} />
              </button>
            ) : (
              <>
                {wrongAnswers.length == 0 ? (
                  <div>
                    {Math.round(
                      (corectAnswer / Questions[lesson - 1].length) * 3,
                    ) == 0 ? (
                      <button
                        className="mr-2 rounded bg-gray-500 p-2 text-white"
                        onClick={() => {
                          setSelectAnswer(-1);
                          setQuizNumber(0);
                        }}
                      >
                        Retake
                      </button>
                    ) : (
                      ""
                    )}
                    <Link
                      className="rounded bg-sky-500 p-2 text-white"
                      to={`/lessons`}
                      onClick={() => {
                        setSelectAnswer(-1);
                        setQuizNumber(0);
                        const newLessonResult = lessonResult;
                        newLessonResult[lesson - 1] = Math.round(
                          (corectAnswer / Questions[lesson - 1].length) * 3,
                        );
                        setLessonResult(newLessonResult);
                        localStorage.setItem(
                          "lessonResult",
                          JSON.stringify(newLessonResult),
                        );
                      }}
                    >
                      Finish!
                    </Link>
                  </div>
                ) : (
                  <>
                    <button
                      className="inline-block rounded bg-sky-500 p-2 text-white"
                      onClick={() => {
                        const newLessonQuestions =
                          lessonQuestions.concat(wrongAnswers);
                        setLessonQuestions(newLessonQuestions);
                        console.log(newLessonQuestions);
                        setSelectAnswer(-1);
                        setQuizNumber(quizNumber + 1);
                        setAnsweringWrongQuestions(true);
                        setWrongAnswers([]);
                      }}
                    >
                      Redo wrong questions <FontAwesomeIcon icon={faRedo} />
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default LessonQuizTemplate;
