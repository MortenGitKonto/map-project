import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function markerComponent({ arrayElementNr, object }) {
  // console.log(object)

    return (
        <>
        <Marker 
          key={object.id} 
          position={[object.coordinates[arrayElementNr][0], object.coordinates[arrayElementNr][1]]}
          >
          <Popup>
            <div>
              <h2>{object.name}</h2>
              <p>{object.type}</p>
              <p>Coordinates: {object.coordinates[arrayElementNr][0]}, {object.coordinates[arrayElementNr][1]}</p>
            </div>
          </Popup>
        </Marker>
      </>
)}
