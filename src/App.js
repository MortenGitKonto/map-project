import React, {useState, useEffect} from "react"
import './App.css';

import * as objectData from "./object-data.json"

import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerComponent from "./MapComponent";

function App() {

  const [seconds, setSeconds] = useState(0);
  const [arrayElement, setArrayElement] = useState(0);

  useEffect(() => {
    if (arrayElement === (objectData.objects[0].coordinates.length - 1)) {
      setArrayElement(0)
    } else {
      setArrayElement(arrayElement + 1)
    }
    // eslint-disable-next-line
  }, [seconds])

  useEffect(() => {
    console.log(arrayElement)
  }, [arrayElement])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <MapContainer center={[59.397906, 24.657638]} zoom={12} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {objectData.objects.map(object => 
            <MarkerComponent
              key={object.id}
              object={object} 
              arrayElement={arrayElement}
            />
          )}
        </MapContainer>
      </div>
    </>
    );


}

export default App;
