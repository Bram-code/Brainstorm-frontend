import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet'

function Simulation() {
  const [startSimulation, setStartSimulation] = useState(false);

  useEffect(() => {
    if (startSimulation) {
      alert("Er is nu een incident bij jou in de buurt!!");
    }
  }, [startSimulation]);

  //map varable
const center = [51.914489639203964, 4.469976900179068];

const marker = [
  {
  geocode: [51.91672782942032, 4.483008152569202],
  PopUp:"Verdrinking"
  },
  {
    geocode: [51.91749120042259, 4.484958353291552],
    PopUp:"AED"
  }
];

const costomIcon = new Icon({
  iconUrl: "https://cdn.pixabay.com/photo/2013/07/13/10/29/icon-157354_1280.png",
  iconSize: [10]
})

  return (
    <>
    {!startSimulation ? (

    <div className="h-screen grid justify-center flex-auto content-center">
        <button
          className={"border-black border-2 p-0.5"}
          onClick={() => {
            setStartSimulation(true);
          }}
        >
          Start de simulatie
        </button>
        </div>

      ) : (
        <>
        <MapContainer
        center={center}
        zoom={11}
        style={{ width: '100%', height: '60vh'}}>
    
          <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=XZFkelHKMGmz6pc20kRu'
          >
          </TileLayer>
    
          {marker.map(marker=>(
            <Marker
            position={marker.geocode}
            >
              <Popup>{marker.PopUp}</Popup>
            </Marker>
            ))}
    
        </MapContainer>
        <div>
            <h2>Vrouw te water</h2>
            <h3>Wijnhaven 107, Rotterdam</h3>
            <h4>*cords*</h4>
            <br></br>
            <p>AED</p>
            <p>800m van je vandaan</p>
            <br></br>
            <form>
             <button type="button">Annuleren</button>
             <br></br>
             <button type="submit">Doorverbinden</button>
          </form>
    
        </div>
        </>
      )}
      </>
  );
}

export default Simulation;
