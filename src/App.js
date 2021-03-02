import React, {useState, useEffect} from "react"
import './App.css';

import * as objectData from "./object-data.json"

import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerComponent from "./MapComponent";

function App() {

  const [seconds, setSeconds] = useState(0);
  const [arrayElementNr, setArrayElementNr] = useState(0);

  useEffect(() => {
    // Todo: To track an object, code logic should be inserted here below...


    /////////////////////////////////////////////////////////////////
    // eslint-disable-next-line
  }, [seconds])

  useEffect(() => {
    // console.log(arrayElementNr)
  }, [arrayElementNr])

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
          <div className="information-box">
          {objectData.objects.map(object => (
            <span className="info" key={object.id}>
              <p> Object name: {object.name}</p>
              <p> Object coordinates: {object.coordinates[arrayElementNr][0]}, {object.coordinates[arrayElementNr][1]}</p>
            </span>)
          )}
          </div>
          {objectData.objects.map(object => 
            <MarkerComponent
              key={object.id}
              object={object} 
              arrayElementNr={arrayElementNr}
            />
          )}
        </MapContainer>
      </div>
    </>
    );
}

export default App;
