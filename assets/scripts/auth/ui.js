'use strict'

const store = require('./../store')
const events = require('./events')

const signUpSuccess = function (response) {
  console.log('signed up!')
  $("#notification").text('Thanks for signing up ' + response.user.email)
}

const signUpFailure = function (error) {
  console.log('sign up fail')
  $("#notification").text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  console.log('SIgned IN!')
  $("#notification").text('Thanks for signing in! ' + response.user.email)
  store.user = response.user
}

const signInFailure = function (error) {
  console.log('sign in fail')
  $("#notification").text('Sign in failed, try again')
}

const changePasswordSuccess = function () {
  console.log('change password success')
  $("#notification").text('Thanks for changing your password!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.log('change password failure')
  $("#notification").text('Password Change failed, try again')
}

const signOutSuccess = function () {
  console.log('sign out success')
  $("#notification").text('succesfully signed out!')
  store.user = null
}

const signOutFailure = function (error) {
  console.log('sign out failure')
  $("#notification").text('Error, Could not sign out')
}

const addEventSuccess = function () {
  console.log('add event success')
  $("#notification").text('Event Added')
  $('form').trigger('reset')
}

const addEventFailure = function () {
  console.log('add event failure')
  $("#notification").text('Event Not Added')
}

const viewEventsSuccess = function (response) {
  console.log(response)
  $("#notification").text('Events viewable')
  $('#events').html('')
  const events = response.events
  events.forEach(function (event) {
    const eventHTML = (`
      <h5>Name: ${event.name}</h5>
      <p>Date: ${event.date}</p>
      <p>ID: ${event._id}</p>
      <br>
    `)
    $('#events').append(eventHTML)
  })
}


const viewEventsFailure = function () {
  console.log('view event failure')
  $("#notification").text('Event Not viewable')
}

const updateEventSuccess = function () {
  console.log('update event success')
  $("#notification").text('Event updated')
}

const updateEventFailure = function () {
  console.log('update event failure')
  $("#notification").text('Event Not updated')
}

const deleteEventSuccess = function () {
  console.log('delete event success')
  $("#notification").text('Event deleted')
}

const deleteEventFailure = function () {
  console.log('delete event failure')
  $("#notification").text('Event Not deleted')
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
  deleteEventFailure
}
