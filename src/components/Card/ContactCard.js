import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactCard = ({ item }) => {
  if (item.firstName || item.lastName) {
    return (
      <Card
        className="contactCard">
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.firstName} {item.lastName}</Link>
          </ Card.Title>
        </Card.Body>
      </Card>
    )
  } else if ((item.firstName || item.lastName) && (!item.organizationName)) {
    return (
      <Card
        className="contactCard">
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.firstName} {item.lastName}</Link>
          </ Card.Title>
        </Card.Body>
      </Card>
    )
  } else if ((!item.firstName && !item.lastName) && (item.organizationName)) {
    return (
      <Card
        className="contactCard">
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item.organizationName}</Link>
          </ Card.Title>
        </Card.Body>
      </Card>
    )
  } else {
    return (
      <Card
        className="contactCard">
        <Card.Body>
          <Card.Title><Link to ={`/contacts/${item._id}`}>
            {item._id}</Link>
          </ Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default ContactCard
