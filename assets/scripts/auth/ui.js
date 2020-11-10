'use strict'

const store = require('./../store')
const events = require('./events')

const signUpSuccess = function (response) {
  $('#notification').text('Thanks for signing up ' + response.user.email)
}

const signUpFailure = function (error) {
  $('#notification').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#notification').text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#profile').show()
  $('#events').show()
}

const signInFailure = function (error) {
  $('#notification').text('Sign in failed, try again')
}

const changePasswordSuccess = function () {
  $('#notification').text('Thanks for changing your password!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#notification').text('Password Change failed, try again')
}

const signOutSuccess = function () {
  $('#notification').text('succesfully signed out!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#notification').text('Error, Could not sign out')
}

const addEventSuccess = function () {
  $('#notification').text('Event Added')
  $('form').trigger('reset')
}

const addEventFailure = function () {
  $('#notification').text('Event Not Added')
}

const viewEventsSuccess = function (response) {
  $('#notification').text('Events viewable')
  $('#events').html('')
  const events = response.events
  events.forEach(function (event) {
    const eventHTML = (`
      <h5>Name: ${event.name}</h5>
      <p>Date: ${event.date}</p>
      <p>ID: ${event._id}</p>
      <p>Drinks: ${event.drinks}</p>
      <br>
    `)
    $('#events').append(eventHTML)
  })
}

const viewEventsFailure = function () {
  $('#notification').text('Event Not viewable')
}

const updateEventSuccess = function (response) {
  $('#notification').text('Event updated')
  $('#events').html('')
}

const updateEventFailure = function () {
  $('#notification').text('Event Not updated')
}

const deleteEventSuccess = function () {
  $('#notification').text('Event deleted')
  $('#delete-event-form').hide()
  $('#events').html('')
}

const deleteEventFailure = function () {
  $('#notification').text('Event Not deleted')
}

const addDrinkSuccess = function () {
  $('#notification').text('Drink Added')
}

const addDrinkFailure = function () {
  $('#notification').text('Drink Not Added')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addEventSuccess,
  addEventFailure,
  viewEventsSuccess,
  viewEventsFailure,
  updateEventSuccess,
  updateEventFailure,
  deleteEventSuccess,
  deleteEventFailure,
  addDrinkSuccess,
  addDrinkFailure
}
