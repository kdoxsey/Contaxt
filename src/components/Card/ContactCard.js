import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactCard = ({ item }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title><Link to ={`/contacts/${item._id}`}>
          {item.lastName}, {item.firstName}</Link>
        </ Card.Title>
        <Card.Text>
          {item.streetAddress}<br />
          {item.phoneNumber}<br />
          {item.emailAddress}<br />
          {item.note}<br />
          lat: {item.latitude}, lng: {item.longitude}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ContactCard
