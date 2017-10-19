'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onPasswordChange = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.passwordChange(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const getLocations = function (event) {
  event.preventDefault()
  // const userId = store.user.id
  api.show()
    .then(ui.getLocationsSuccess)
    .catch(ui.getLocationsFailure)
}

const findLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  // const userId = store.user.id
  api.find(data)
    .then(ui.findLocationSuccess)
    .catch(ui.findLocationFailure)
}

const createLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // const userId = store.user.id
  api.create(data)
    .then(ui.createLocationSuccess)
    .catch(ui.createLocationFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onPasswordChange)
  $('#getLocationButton').on('click', getLocations)
  $('#findLocation').on('submit', findLocation)
  $('#addLocation').on('submit', createLocation)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onPasswordChange
}
