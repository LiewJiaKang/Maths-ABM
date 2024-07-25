import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function Visualizer() {
  const [rotateAngle, setRotateAngle] = useState(0);
  function handleRotateAngle(value: number) {
    setRotateAngle(value);
    console.log(rotateAngle);
  }
  return (
    <div className="min-h-screen w-full bg-sky-400 to-sky-600">
      <div className="mx-auto flex min-h-screen w-5/6 flex-col items-center bg-white drop-shadow-lg pt-12">
        <div className="border border-black rounded-full w-[40vmin] h-[40vmin] mt-8"></div>
        <Link to={`/`}>
          <FontAwesomeIcon
            className="absolute top-3 left-3 text-4xl text-gray-400 hover:text-gray-600"
            icon={faDoorOpen}
          />
        </Link>
        <div className="h-1 w-[40vmin] border-t border-black translate-y-[-20vmin]" />
        <div
          className={`h-0 w-[40vmin] translate-y-[calc(-0.25rem-20vmin)] rotate-[${-rotateAngle}deg]`}
        >
          <div className="w-[20vmin] border-t-4 translate-x-full border-red-600 translate-y-[calc(-50%)]"></div>
          <div className="border border-black w-4 h-4 rounded-full bg-sky-400 translate-x-[calc(40vmin-0.5rem)] translate-y-[-0.75rem]">
            <div
              className={`h-0 w-0 translate-y-[calc(0.5rem-50%)] rotate-[${rotateAngle}deg]`}
            >
              <div
                className={`h-[${Math.abs(Math.floor(Math.sin((rotateAngle / 180) * Math.PI) * 20))}vmin] border-l-4 border-green-600 ${rotateAngle < 0 ? "translate-y-[calc(0.25rem-100%)]" : ""}`}
              />
            </div>
          </div>
          <div className="border border-black w-4 h-4 rounded-full bg-sky-400 translate-x-[calc(20vmin-0.5rem)] translate-y-[-1.75rem]">
            <p className={`rotate-[${rotateAngle}deg] font-bold translate-y-6`}>
              {rotateAngle}
              {"°"}
            </p>
          </div>
        </div>

        <div
          className={`w-[${Math.floor(Math.abs(Math.cos((rotateAngle / 180) * Math.PI) * 20))}vmin] border-t-4 border-blue-600 translate-y-[calc(-20vmin-0.25rem)] ${Math.abs(rotateAngle) < 90 ? "translate-x-1/2" : "translate-x-[-50%]"}`}
        />
        <input
          className="mt-5"
          type="number"
          min="-180"
          max="180"
          defaultValue="0"
          value={rotateAngle}
          onChange={(e) => {
            handleRotateAngle(Number(e.target.value));
          }}
        />
        <input
          type="range"
          min="-180"
          max="180"
          defaultValue="0"
          value={rotateAngle}
          onChange={(e) => {
            handleRotateAngle(Number(e.target.value));
          }}
        />
        <table className="table-auto text-center w-4/5 mt-10">
           {" "}
          <tr className="odd:bg-white even:bg-gray-300">
                <th></th>
                <th className="text-yellow-600">Sine (sin)</th>
                <th className="text-rose-600">Cosine (cos)</th>
                <th className="text-emerald-600">Tangent (tan)</th> 
          </tr>
          <tr className="odd:bg-white even:bg-gray-300">
            <td>
              <strong>Formula:</strong>
            </td>
            <td>
              <p className="text-green-600 mb-[-1rem]">Opposite</p>____________
              <p className="text-red-600">Hypothenuse</p>
            </td>
            <td>
              <p className="text-blue-600 mb-[-1rem]">Adjacent</p>____________
              <p className="text-red-600">Hypothenuse</p>
            </td>
            <td>
              <p className="text-green-600 mb-[-1rem]">Opposite</p>____________
              <p className="text-blue-600">Adjacent</p>
            </td>
          </tr>
          <tr className="odd:bg-white even:bg-gray-300">
            <td>
              <strong>Value:</strong>
            </td>
            <td>
              {Math.round(Math.sin((rotateAngle / 180) * Math.PI) * 10000) /
                10000}
              <div className="h-2 w-full border border-yellow-600">
                <div
                  className="h-2 bg-yellow-600"
                  style={{
                    width: `${
                      Math.round(Math.sin((rotateAngle / 180) * Math.PI) * 50) +
                      50
                    }%`,
                  }}
                />
              </div>
            </td>
            <td>
              {Math.round(Math.cos((rotateAngle / 180) * Math.PI) * 10000) /
                10000}
              <div className="h-2 w-full border border-rose-600">
                <div
                  className="h-2 bg-rose-600"
                  style={{
                    width: `${
                      Math.round(Math.cos((rotateAngle / 180) * Math.PI) * 50) +
                      50
                    }%`,
                  }}
                />
              </div>
            </td>
            <td>
              {Math.tan((rotateAngle / 180) * Math.PI) < -10000000
                ? "-Infinity"
                : Math.tan((rotateAngle / 180) * Math.PI) < 10000000
                  ? Math.round(
                      Math.tan((rotateAngle / 180) * Math.PI) * 10000,
                    ) / 10000
                  : "Infinity"}
              <div className="h-2 w-full border border-emerald-600">
                <div
                  className="max-w-full h-2 bg-emerald-600"
                  style={{
                    width: `${
                      Math.round(Math.tan((rotateAngle / 180) * Math.PI) * 20) +
                      50
                    }%`,
                  }}
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Visualizer;
