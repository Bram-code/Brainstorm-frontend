import './App.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet'

const center = [51.914489639203964, 4.469976900179068];

const marker = [
  {
  geocode: [51.91672782942032, 4.483008152569202],
  PopUp:"Verdrinking"
  },
];

const costomIcon = new Icon({
  iconUrl: "https://cdn.pixabay.com/photo/2013/07/13/10/29/icon-157354_1280.png",
  iconSize: [10]
})

function App() {
  return (
    <>
    <MapContainer
    center={center}
    zoom={11}
    style={{ width: '100%', height: '60vh'}}>

      <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=XZFkelHKMGmz6pc20kRu'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
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
   );
}

export default App;
