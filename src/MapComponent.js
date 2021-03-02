import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function markerComponent({ arrayElement, object }) {
  // console.log(object)

    return (
        <>
        <Marker 
          key={object.id} 
          position={[object.coordinates[arrayElement][0], object.coordinates[arrayElement][1]]}
          >
          <Popup>
            <div>
              <h2>{object.name}</h2>
              <p>{object.type}</p>
              <p>Coordinates: {object.coordinates[0][0]}, {object.coordinates[0][1]}</p>
            </div>
          </Popup>
        </Marker>
      </>
)}
