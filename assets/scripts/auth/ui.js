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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
