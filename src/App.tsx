import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex h-[100vh] w-full flex-wrap overflow-hidden bg-sky-400 to-sky-600">
      <div className="-skew-y-6 lg:-skew-x-12 flex h-1/2 w-full items-center justify-center bg-white text-center lg:h-full lg:w-1/2 lg:skew-y-0">
        <img
          src="logo.png"
          alt="logo"
          className="lg:-skew-x-[-12deg] hidden h-[3.75rem] lg:block"
        />
        <h1 className="-skew-y-[-6deg] lg:-skew-x-[-12deg] font-ChakraPetch font-bold text-6xl lg:skew-y-0">
          Trigonometry
        </h1>
      </div>
      <div className="flex h-1/2 w-full flex-col items-center justify-center lg:h-full lg:w-1/2">
        <Link
          to={`/lessons`}
          className="cursor-pointer rounded-md bg-cyan-600 p-2 text-white hover:bg-cyan-500"
        >
          <FontAwesomeIcon icon={faPlay} /> Start lesson
        </Link>
      </div>
    </div>
  );
}

export default App;
