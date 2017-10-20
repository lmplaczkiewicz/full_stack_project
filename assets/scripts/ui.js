'use strict'

// clear form fields and reset overlay header on sign in.

const store = require('./store')
const showLocationTemplate = require('../template/location-listing.handlebars')

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#sign-up')[0].reset()
}

const signUpFailure = function () {
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#signInModal').modal('hide')
  $('#sign-in')[0].reset()
  $('#underlay').show()
  $('#overlay').hide()
}

const signInFailure = function () {
  $('#sign-in')[0].reset()
}

const signOutSuccess = function () {
  $('#underlay').hide()
  $('#overlay').show()
  store.user = null
}

const signOutFailure = function () {
  $('#result').text('SIGN OUT FAILURE')
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#change-password')[0].reset()
}

const getLocationsSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data.locations })
  $('.content').append(showLocationHtml)
  console.log(data)
  console.log(data.locations)
  console.log(data.locations[0])
  store.locations = data.locations
  console.log(store.locations)
}

const getLocationsFailure = function () {
  $('#contentDisplay').text('Error')
}

const findLocationSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data })
  $('.content').append(showLocationHtml)
}

const findLocationFailure = function () {
  $('#contentDisplay').text('Error')
}

const getLocationsDataSuccess = function (data) {
  console.log('We got data?')
  store.locations = data.locations
  console.log(store.locations)
}

const getLocationsDataFailure = function () {
  console.log('We don\'t have data')
}

const updateLocationSuccess = function (data) {
  console.log('This is update success')
  console.log(data)
}

const updateLocationFailure = function () {
  console.log('This is update failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getLocationsSuccess,
  getLocationsFailure,
  findLocationSuccess,
  findLocationFailure,
  getLocationsDataSuccess,
  getLocationsDataFailure,
  updateLocationSuccess,
  updateLocationFailure
}
