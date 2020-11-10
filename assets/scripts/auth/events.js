'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

// const onSignUpButton = function () {
//   $('.sign-up-form').show()
// }

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then($('form').trigger('reset'))
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then($('form').trigger('reset'))
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then($('#change-password-form').hide())
    .then($('form').trigger('reset'))
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .then($('#profile').hide())
    .then($('#events').hide())
    .then($('#sign-in-form').show())
    .catch(ui.signOutFailure)
}

const addEvent = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addEvent(data)
    .then(ui.addEventSuccess)
    .then($('#add-event-form').hide())
    .catch(ui.addEventFailure)
}

const onViewEvents = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.viewEvents(data)
    .then(ui.viewEventsSuccess)
    .catch(ui.viewEventsFailure)
}

const onUpdateEvent = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateEvent(data)
    .then(ui.updateEventSuccess)
    .then($('form').trigger('reset'))
    .then($('#update-event-form').hide())
    .catch(ui.updateEventFailure)
}

const onDeleteEvent = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteEvent(data)
    .then(ui.deleteEventSuccess)
    .then($('form').trigger('reset'))
    .catch(ui.deleteEventFailure)
}

const onAddDrink = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addDrink(data)
    .then(ui.addDrinkSuccess)
    .then($('#add-drink-form').hide())
    .catch(ui.addDrinkFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addEvent,
  onViewEvents,
  onUpdateEvent,
  onDeleteEvent,
  onAddDrink
}
