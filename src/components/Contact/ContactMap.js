
import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import * as parksData from './../../data/national-parks.json'

// const places = [{
//   name: 'Bossa nova Civic Club',
//   latitude: 40.697980,
//   longitude: -73.927980
// }, {
//   name: 'Sunrise Deli',
//   latitude: 40.697910,
//   longitude: -73.925090
// }, {
//   name: 'Varity Coffee Roasters',
//   latitude: 40.702650,
//   longitude: -73.917110
// }]

function Map () {
  const [selectedPark, setSelectedPark] = useState(null)

  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
    >
      {parksData.map(park => (
        <Marker
          key={park.LocationNumber}
          position={{
            lat: park.Latitude,
            lng: park.Longitude
          }}
          onClick={() => {
            setSelectedPark(park)
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.Latitude,
            lng: selectedPark.Longitude
          }}
          onCloseClick={() => {
            setSelectedPark(null)
          }}
        >
          <div>
            <h3>{
              selectedPark.LocationName}
            </h3>
            <h5>{selectedPark.City}, {selectedPark.State}</h5>
            <p>{selectedPark.Address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function ContactMap () {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${
    process.env.REACT_APP_GOOGLE_KEY
    }`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}
