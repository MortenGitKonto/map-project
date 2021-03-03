import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function markerComponent({ arrayElementIndex, object }) {
  // console.log(object)

    return (
        <>
        <Marker 
          key={object.id} 
          position={[object.coordinates[arrayElementIndex][0], object.coordinates[arrayElementIndex][1]]}
          >
          <Popup>
            <div>
              <h2>{object.name}</h2>
              <p>{object.type}</p>
              <p>Coordinates: {object.coordinates[arrayElementIndex][0]}, {object.coordinates[arrayElementIndex][1]}</p>
            </div>
          </Popup>
        </Marker>
      </>
)}
