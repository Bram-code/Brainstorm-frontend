import './App.css';
import {
  MapContainer,
  TileLayer,
  useMap,
  polygon,
  Marker
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet'

const center = [51.914489639203964, 4.469976900179068];

const marker = [
  {
  geocode: [51.91672782942032, 4.483008152569202],
  PopUp:"Verdrinking, water, auto, gedronken"
  },
];

const costomIcon = new Icon({
  iconUrl: "https://cdn.pixabay.com/photo/2013/07/13/10/29/icon-157354_1280.png",
  iconSize: [38]
})

function App() {
  return (
    <MapContainer
    center={center}
    zoom={11}
    style={{ width: '100vw', height: '100vh'}}>

      <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=XZFkelHKMGmz6pc20kRu'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      >

      </TileLayer>
      {marker.map(marker=>(
        <Marker
        position={marker.geocode}
        icon={costomIcon}
        >

        </Marker>
        ))}

    </MapContainer>
   );
}

export default App;
