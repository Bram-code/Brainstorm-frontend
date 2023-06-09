import { useEffect, useState } from "react";

function Simulation() {
  const [startSimulation, setStartSimulation] = useState(false);

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
        <div className={"space-x-1"}>Hier komt de kaart</div>
      )}
    </div>
  );
}

export default Simulation;
