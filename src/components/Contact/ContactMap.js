import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import phoneIcon from './../Card/phone.png'
import emailIcon from './../Card/email.png'
import houseIcon from './../Card/house.png'
import mapStyles from './../../mapStyles'

function Map (props) {
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.contacts.map(contact => (
        <Marker
          key={contact._id}
          position={{
            lat: contact.latitude,
            lng: contact.longitude
          }}
          onClick={() => {
            setSelectedContact(contact)
          }}
        />
      ))}

      {selectedContact && (
        <InfoWindow
          position={{
            lat: selectedContact.latitude,
            lng: selectedContact.longitude
          }}
          onCloseClick={() => {
            setSelectedContact(null)
          }}
        >
          <div>
            <h4>
              {selectedContact.firstName} {selectedContact.lastName}
            </h4>
            <h4 className="organizationNameInfoWindow">
              {selectedContact.organizationName}
            </h4>
            <img src={phoneIcon} alt='phone icon' className='contactIcon' />
            <a href ={'tel:' + selectedContact.phoneNumber}>{selectedContact.phoneNumber}</a> <br />

            <img src={emailIcon} alt='email icon' className='contactIcon' />
            <a href={'mailto:' + selectedContact.emailAddress}>{selectedContact.emailAddress}</a> <br />

            <img src={houseIcon} alt='' className='contactIcon' />
            {selectedContact.streetAddress}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function ContactMap (props) {
  return (
    <div style={{ width: '85vw', height: '85vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${
    process.env.REACT_APP_GOOGLE_KEY
    }`}
        contacts={props.contacts}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}
