import "./App.css";
import sound from "./audio-files/test_sound.m4a";
import { useEffect, useState } from "react";

function Incident() {
  const [startSimulation, setStartSimulation] = useState(false);
  const [startAudio, setStartAudio] = useState(false);
  const audio = new Audio(sound);

  useEffect(() => {
    if (startSimulation) {
      alert("Er is nu een incident bij jou in de buurt!!");
    }
  }, [startSimulation]);

  return (
    <div className="h-screen grid justify-center flex-auto content-center">
      {!startSimulation ? (
        <button
          className={"border-black border-2 p-0.5"}
          onClick={() => {
            setStartSimulation(true);
          }}
        >
          Start de simulatie
        </button>
      ) : (
        <div className={"space-x-1"}>
          {!startAudio ? (
            <button
              className={"border-black border-2 p-0.5"}
              onClick={() => {
                audio.play();
                setStartAudio(true);
              }}
            >
              Ik ga naar het incident!
            </button>
          ) : (
            <button
              className={"border-black border-2 p-0.5"}
              onClick={() => {
                window.location.reload();
              }}
            >
              Restart
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Incident;
