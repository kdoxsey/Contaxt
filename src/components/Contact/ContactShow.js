import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { showContact, deleteContact } from '../../api/contact'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'

const ShowContact = (props) => {
  const [contact, setContact] = useState([])
  const [update, setUpdate] = useState(false)
  const { user, msgAlert, match, history } = props
  useEffect(() => {
    showContact(user, match.params.contactId)
      .then(res => {
        setContact(res.data.contact)
      })
      .then(() => {
        msgAlert({
          heading: 'Show contact Success',
          message: 'See the contact',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Contact Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteContact(user, match.params.contactId)
      .then(() => {
        msgAlert({
          heading: 'Contact deleted',
          message: 'Back to the list of contacts',
          variant: 'success'
        })
      })
      .then(() => history.push('/contacts'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }
  const handleUpdate = () => {
    setUpdate(true)
  }

  if (update) {
    return <Redirect to={'/contact-update/' + contact._id} />
  }
  console.log(contact)

  return (
    <div>
      <Fragment>
        <Card>
          <Card.Body>
            {contact.lastName}, {contact.firstName} <br />
            {contact.streetAddress }<br />
            {contact.phoneNumber}<br />
            {contact.emailAddress}<br />
            {contact.note}<br />
            coordinates: {contact.latitude}, {contact.longitude} <br />
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
      </Fragment>
    </div>
  )
}

export default withRouter(ShowContact)
