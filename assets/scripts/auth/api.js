'use strict'
const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const addEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

const viewEvents = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}

const updateEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events/' + data.event.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}

const deleteEvent = function (data) {
  return $.ajax({
    url: config.apiUrl + '/events/' + data.event.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE',
    data: data
  })
}

const addDrink = function (data) {
  return $.ajax({
    url: config.apiUrl + '/drinks',

    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addEvent,
  viewEvents,
  updateEvent,
  deleteEvent,
  addDrink
}
