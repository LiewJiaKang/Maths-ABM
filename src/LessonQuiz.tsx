import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function LessonQuiz(props: { lesson: number }) {
  const { lesson } = props;
  return (
    <div className="min-h-screen w-full bg-sky-400 to-sky-600 ">
      <div className="mx-[auto] flex min-h-screen w-5/6 flex-col items-center justify-center bg-white drop-shadow-lg">
        <article className="prose">
          {lesson == 1 ? (
            <>
              <h1>Quiz 1:Introduction</h1>
              <p>
                This quiz contain 5 questions about basic of trigonometry.
                Answer all of the questions carefully to unlock the next lesson.
              </p>
              <h2>Quick Note:</h2>
              <ul>
                <li>
                  <strong>Opposite</strong>: The side of the opposite of the
                  triangle
                </li>
                <li>
                  <strong>Hypothenuse</strong>: The longest side of the triangle
                </li>
                <li>
                  <strong>Adjacent</strong>: The side of the interest angle but
                  not the hypothenuse
                </li>
              </ul>
            </>
          ) : (
            <>
              {lesson == 2 ? (
                <>
                  <h1>Quiz 2:Basic Trigonometry Functions</h1>
                  <p>
                    This quiz contain 4 questions about basic trigonometry
                    functions. Answer all of the questions carefully to unlock
                    the next lesson.
                  </p>
                  <h2>Quick Note:</h2>
                  <ul>
                    <li>
                      <strong>Sin(θ)</strong>: Opposite/Hypothenuse
                    </li>
                    <li>
                      <strong>Cos(θ)</strong>: Adjacent/Hypothenuse
                    </li>
                    <li>
                      <strong>Tan(θ)</strong>: Opposite/Adjacent
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h1>Quiz 3:Trigonometric Values of Special Angles</h1>
                  <p>
                    This quiz contain 5 questions about trigonometric values of
                    special angles. Answer all of the questions carefully to
                    complete the lesson.
                  </p>
                  <h2>Quick Note:</h2>
                  <table className="table-auto text-center">
                     {" "}
                    <tr className="odd:bg-white even:bg-gray-300">
                          <th>Angle (°)</th>
                          <th>Sine (sin)</th>
                          <th>Cosine (cos)</th>
                          <th>Tangent (tan)</th> 
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-300">
                          <td>0°</td>
                          <td>0</td>
                          <td>1</td>
                          <td>0</td> 
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-300">
                          <td>30°</td>
                          <td>1/2</td>
                          <td>√3/2</td>
                          <td>1/√3</td> 
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-300">
                          <td>45°</td>
                          <td>1/√2</td>
                          <td>1/√2</td>
                          <td>1</td> 
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-300">
                          <td>60°</td>
                          <td>√3/2</td>
                          <td>1/2</td>
                          <td>√3</td> 
                    </tr>
                  </table>
                </>
              )}
            </>
          )}
        </article>
        <div>
          <Link
            to={`/lessons/lesson${lesson}/`}
            className="m-3 inline-block rounded-md bg-gray-600 p-2 text-white"
          >
            <FontAwesomeIcon icon={faBook} /> Study
          </Link>
          <Link
            to={`/lessons/lesson${lesson}/quiz/start`}
            className="m-3 inline-block rounded-md bg-cyan-600 p-2 text-white hover:bg-cyan-500"
          >
            <FontAwesomeIcon icon={faPlay} /> Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LessonQuiz;
