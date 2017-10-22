'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const getLocationsData = function () {
  api.show()
    .then(ui.getLocationsDataSuccess)
    .catch(ui.getLocationsDataFailure)
}

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
    .then(getLocationsData())
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

const deleteLocation = function (event) {
  event.preventDefault()
  const locationId = event.target.getAttribute('data-id')
  console.log("We're about to delete book with id: ", locationId)
  api.removeLocation(locationId)
    .then(ui.deleteLocationSuccess)
    .catch(ui.deleteLocationFailure)
}

const updateLocation = function (event) {
  event.preventDefault()
  const locationId = event.target.getAttribute('data-id')
  const data = getFormFields(event.target)
  api.updateLocation(locationId, data)
    .then(ui.updateLocationSuccess)
    .catch(ui.updateLocationFailure)
}

const getLocations = function (event) {
  event.preventDefault()
  // const userId = store.user.id
  api.show()
    .then(ui.getLocationsSuccess)
    // Enables delete button function after loading of content, probably keep it on find location as well. Probably move it to it's own function
    .then(function () {
      $('.removeButton').on('click', deleteLocation)
    })
    .then(function () {
      $('.updateButton').on('submit', updateLocation)
    })
    .catch(ui.getLocationsFailure)
}

const singleLocation = function (data) {
  for (let i = 0; i < store.locations.length; i++) {
    if (parseInt(store.locations[i].id) === parseInt(data)) {
      return data
    } else {
      console.log(store.locations[i].id)
      console.log('Error')
    }
  }
}

const findLocation = function (event) {
  event.preventDefault()
  const findData = getFormFields(event.target)
  const locationId = singleLocation(findData.locations.Id)
  // const userId = store.user.id
  api.find(locationId)
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
  addHandlers
}
