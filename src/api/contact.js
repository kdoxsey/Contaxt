import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexContacts = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/contacts',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showContact = (user, contactId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/contacts/' + contactId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteContact = (user, contactId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/contacts/' + contactId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const createContact = (user, contact) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/contacts',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { contact }
  })
}

export const updateContact = (user, contact, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/contacts/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: { contact: contact }
  })
}
