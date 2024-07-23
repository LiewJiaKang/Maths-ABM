import { faDoorOpen, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lesson1_pic1 from "./assets/lesson1.two_triangle.jpg";
import { Link } from "react-router-dom";

function Lesson(props: { lesson: number }) {
  const { lesson } = props;
  return (
    <div className="min-h-screen w-full bg-sky-400 to-sky-600 ">
      <div className="mx-auto flex min-h-screen w-5/6 flex-col items-center bg-white drop-shadow-lg">
        <Link to={`/lessons`}>
          <FontAwesomeIcon
            className="absolute top-3 left-3 text-4xl text-gray-400 hover:text-gray-600"
            icon={faDoorOpen}
          />
        </Link>
        <article className="prose prose-lg my-16 w-[calc(100%-2rem)]">
          {lesson == 1 ? (
            <>
              <h1>Triangle Sides</h1>

              <p>
                Trigonometry is a branch of mathematics that focuses on the
                study of triangles and their properties, particularly right
                triangles. At its core, trigonometry examines the relationships
                between the sides and angles of these triangles.
              </p>

              <p>
                In a right triangle, which contains one angle measuring 90
                degrees (the right angle), there are three key sides:
              </p>

              <ul>
                <li>
                  <strong>Hypotenuse:</strong> This is the side opposite the
                  right angle and is the longest side of the triangle.
                </li>
                <li>
                  <strong>Adjacent Side:</strong> This side is next to the angle
                  of interest but not the hypotenuse.
                </li>
                <li>
                  <strong>Opposite Side:</strong> This side is directly across
                  from the angle of interest, not including the hypotenuse.
                </li>
              </ul>
              <img src={lesson1_pic1} alt="explanation in picture" />
              <p>
                These sides play crucial roles in trigonometric calculations. By
                understanding how these sides interact with each other and with
                the angles of the triangle, we can determine unknown angles or
                side lengths based on known information.
              </p>
            </>
          ) : (
            <>
              {lesson == 2 ? (
                <>
                  <h1>Basic Trigonometric Functions: Sin, Cos, and Tan</h1>

                  <p>
                    Trigonometry, a mathematical discipline centered on triangle
                    measurements, introduces three primary functions: sine
                    (sin), cosine (cos), and tangent (tan). These functions
                    define relationships between angles and sides in triangles,
                    offering crucial tools for calculations in geometry and
                    beyond.
                  </p>

                  <h3>Sine Function (sin θ)</h3>
                  <p>
                    The sine of an angle θ in a right triangle is the ratio of
                    the length of the side opposite θ to the length of the
                    hypotenuse.
                  </p>
                  <p>sin(θ) = opposite side / hypotenuse</p>

                  <h3>Cosine Function (cos θ)</h3>
                  <p>
                    The cosine of an angle θ in a right triangle is the ratio of
                    the length of the side adjacent to θ to the length of the
                    hypotenuse.
                  </p>
                  <p>cos(θ) = adjacent side / hypotenuse</p>

                  <h3>Tangent Function (tan θ)</h3>
                  <p>
                    The tangent of an angle θ in a right triangle is the ratio
                    of the length of the side opposite θ to the length of the
                    side adjacent to θ.
                  </p>
                  <p>tan(θ) = opposite side / adjacent side</p>

                  <p>
                    These trigonometric functions are essential in mathematics
                    for solving problems involving angles and sides of
                    triangles. They provide fundamental tools for calculations
                    in various scientific and engineering fields.
                  </p>
                </>
              ) : (
                <>
                  <h1>Trigonometric Values of Special Angles</h1>
                  <div>
                    <h2>
                      Trigonometric Values for Special Angles Using Pythagoras'
                      Theorem
                    </h2>

                    <div>
                      <h3>0° (Horizontal Line)</h3>
                      <p>
                        <strong>Angle</strong>: 0°
                        <br />
                        In this case, the triangle degenerates into a horizontal
                        line segment, where the opposite side length is 0.
                        <br />
                        Trigonometric values:
                        <ul>
                          <li>sin 0° = 0</li>
                          <li>cos 0° = 1</li>
                          <li>tan 0° = 0</li>
                        </ul>
                      </p>
                    </div>

                    <div>
                      <h3>30° (Equilateral Triangle Halved)</h3>
                      <p>
                        <strong>Angle</strong>: 30°
                        <br />
                        Consider an equilateral triangle halved to form a right
                        triangle. Assume the sides are 1 for simplicity.
                        <br />
                        Trigonometric values:
                        <ul>
                          <li>sin 30° = 1/2</li>
                          <li>cos 30° = √3/2</li>
                          <li>tan 30° = √3/3</li>
                        </ul>
                      </p>
                    </div>

                    <div>
                      <h3>45° (Isosceles Right Triangle)</h3>
                      <p>
                        <strong>Angle</strong>: 45°
                        <br />
                        In an isosceles right triangle with sides 1:
                        <br />
                        Trigonometric values:
                        <ul>
                          <li>sin 45° = 1/√2</li>
                          <li>cos 45° = 1/√2</li>
                          <li>tan 45° = 1</li>
                        </ul>
                      </p>
                    </div>

                    <div>
                      <h3>60° (Equilateral Triangle)</h3>
                      <p>
                        <strong>Angle</strong>: 60°
                        <br />
                        Consider an equilateral triangle divided into two
                        30-60-90 triangles.
                        <br />
                        Trigonometric values:
                        <ul>
                          <li>sin 60° = √3/2</li>
                          <li>cos 60° = 1/2</li>
                          <li>tan 60° = √3</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </article>
        <Link
          to={`/lessons/lesson${lesson}/quiz`}
          className="m-6 inline-block rounded-md bg-cyan-600 p-2 text-white hover:bg-cyan-500"
        >
          <FontAwesomeIcon icon={faPlay} /> Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Lesson;
