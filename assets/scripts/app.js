'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./auth/events')
$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-button').on('click', events.onSignOut)

  // < - - Hidden By Default - ->
  $('#sign-up-form').hide()
  $('#profile').hide()
  $('#events').hide()
  $('#add-event-form').hide()
  $('#update-event-form').hide()
  $('#delete-event-form').hide()
  $('#change-password-form').hide()

  // < - - Show things buttons - ->
  $('#sign-up-button').click(function () {
    $('#sign-up-form').show()
    $('#sign-in-form').hide()
  })
  $('#sign-in-button').click(function () {
    $('#sign-in-form').show()
    $('#sign-up-form').hide()
  })
  $('#add-event-button').click(function () {
    $('#add-event-form').show()
    $('#update-event-form').hide()
    $('#delete-event-form').hide()
    $('#change-password-form').hide()
  })
  $('#update-event-button').click(function () {
    $('#update-event-form').show()
    $('#add-event-form').hide()
    $('#delete-event-form').hide()
    $('#change-password-form').hide()
  })
  $('#delete-event-button').click(function () {
    $('#delete-event-form').show()
    $('#add-event-form').hide()
    $('#update-event-form').hide()
    $('#change-password-form').hide()
  })
  $('#change-password-button').click(function () {
    $('#change-password-form').show()
    $('#add-event-form').hide()
    $('#update-event-form').hide()
    $('#delete-event-form').hide()
  })
  $('#view-events-button').click(function () {
    $('#add-event-form').hide()
    $('#update-event-form').hide()
    $('#delete-event-form').hide()
    $('#change-password-form').hide()
  })
  $('#sign-out-button').click(function () {
    $('#profile').hide()
    $('#events').hide()
    $('#sign-in-form').show()
  })
})
