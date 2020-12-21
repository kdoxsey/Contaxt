
import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import * as parksData from './../../data/national-parks.json'

const markerPosition = { lat: 44.427963, lng: -110.588455 }
console.log(markerPosition)

const places = [{
  name: 'Bossa nova Civic Club',
  latitude: 40.697980,
  longitude: -73.927980
}, {
  name: 'Sunrise Deli',
  latitude: 40.697910,
  longitude: -73.925090
}, {
  name: 'Varity Coffee Roasters',
  latitude: 40.702650,
  longitude: -73.917110
}]

function Map () {
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: places[0].latitude, lng: places[0].longitude }}
    >
      {parksData.map(park => (
        <Marker
          key={park.LocationNumber}
          position={{
            lat: park.Latitude,
            lng: park.Longitude
          }}
        />
      ))
      }
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
