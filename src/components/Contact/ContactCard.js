import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactCard = ({ item }) => {
  return (
    <Card
      className='contactCard'
    >
      <Card.Body>
        <Card.Title><Link to={`/contacts/${item._id}`}>{item.title}</Link></Card.Title>
        <Card.Text>card text</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ContactCard
