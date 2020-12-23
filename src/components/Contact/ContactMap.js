// import React, { useState } from 'react'
// import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
// import ContactIndex from './ContactIndex'

// function Map () {
//   const [selectedContact, setSelectedContact] = useState(null)

//   return (
//     <GoogleMap
//       defaultZoom={4}
//       defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
//     >
//       {contactIndex.map(contact => (
//         <Marker
//           key={contact._id}
//           position={{
//             lat: contact.latitude,
//             lng: contact.longitude
//           }}
//           onClick={() => {
//             setSelectedContact(contact)
//           }}
//         />
//       ))}

//       {selectedContact && (
//         <InfoWindow
//           position={{
//             lat: selectedContact.latitude,
//             lng: selectedContact.longitude
//           }}
//           onCloseClick={() => {
//             setSelectedContact(null)
//           }}
//         >
//           <div>
//             <h3>
//               {selectedContact.lastName}, {selectedContact.firstName}
//             </h3>
//             <h5>{selectedContact.phoneNumber}</h5>
//             <h5>{selectedContact.emailAddress}</h5>
//             <p>{selectedContact.streetAddress}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

// export default function ContactMap () {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <WrappedMap
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
//         libraries=geometry,drawing,places&key=${
//     process.env.REACT_APP_GOOGLE_KEY
//     }`}
//         loadingElement={<div style={{ height: '100%' }} />}
//         containerElement={<div style={{ height: '100%' }} />}
//         mapElement={<div style={{ height: '100%' }} />}
//       />
//     </div>
//   )
// }
