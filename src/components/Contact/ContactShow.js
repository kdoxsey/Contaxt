import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { showContact, deleteContact } from '../../api/contact'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'
// import ContactCreate from './ContactCreate'

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
  if (contact) {
    if (contact.firstName && contact.lastName) {
      return (
        <div>
          <Fragment>
            <Card>
              <Card.Body>
                {contact.lastName}, {contact.firstName} <br />
                {contact.organizationName} <br />
                {contact.streetAddress }<br />
                {contact.phoneNumber}<br />
                {contact.emailAddress}<br />
                coordinates: {contact.latitude}, {contact.longitude} <br />
                {contact.note}<br />
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleDelete}>Delete</Button>
              </Card.Body>
            </Card>
          </Fragment>
        </div>
      )
    } else if (!contact.firstName && !contact.lastName && contact.organizationName) {
      return (
        <div>
          <Fragment>
            <Card>
              <Card.Body>
                {contact.organizationName} <br />
                {contact.streetAddress }<br />
                {contact.phoneNumber}<br />
                {contact.emailAddress}<br />
                coordinates: {contact.latitude}, {contact.longitude} <br />
                {contact.note}<br />
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleDelete}>Delete</Button>
              </Card.Body>
            </Card>
          </Fragment>
        </div>
      )
    } else if (contact.firstName && !contact.lastName && contact.organizationName) {
      return (
        <div>
          <Fragment>
            <Card>
              <Card.Body>
                {contact.firstName} <br />
                {contact.organizationName} <br />
                {contact.streetAddress }<br />
                {contact.phoneNumber}<br />
                {contact.emailAddress}<br />
                coordinates: {contact.latitude}, {contact.longitude} <br />
                {contact.note}<br />
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleDelete}>Delete</Button>
              </Card.Body>
            </Card>
          </Fragment>
        </div>
      )
    } else if (!contact.firstName && contact.lastName && !contact.organizationName) {
      return (
        <div>
          <Fragment>
            <Card>
              <Card.Body>
                {contact.lasttName} <br />
                {contact.streetAddress }<br />
                {contact.phoneNumber}<br />
                {contact.emailAddress}<br />
                coordinates: {contact.latitude}, {contact.longitude} <br />
                {contact.note}<br />
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleDelete}>Delete</Button>
              </Card.Body>
            </Card>
          </Fragment>
        </div>
      )
    } else {
      return (
        <div>
          <Fragment>
            <Card>
              <Card.Body>
                {contact.lastName} <br />
                {contact.organizationName} <br />
                {contact.streetAddress }<br />
                {contact.phoneNumber}<br />
                {contact.emailAddress}<br />
                coordinates: {contact.latitude}, {contact.longitude} <br />
                {contact.note}<br />
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleDelete}>Delete</Button>
              </Card.Body>
            </Card>
          </Fragment>
        </div>
      )
    }
  }
}

export default withRouter(ShowContact)
