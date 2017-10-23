'use strict'

// clear form fields and reset overlay header on sign in.

const store = require('./store')
const showLocationTemplate = require('../template/location-listing.handlebars')
const api = require('./api')

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#sign-up')[0].reset()
}

const signUpFailure = function () {
  $('#sign-up')[0].reset()
  $('#overlayAlert').text('Unable to sign out')
}

const getLocationsData = function () {
  api.show()
    .then(getLocationsDataSuccess)
    .catch(getLocationsDataFailure)
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log(store.user)
  $('#signInModal').modal('hide')
  $('#sign-in')[0].reset()
  $('#underlay').show()
  $('#overlay').hide()
  getLocationsData()
}

const signInFailure = function () {
  $('#sign-in')[0].reset()
  $('#overlayAlert').text('Unable to sign in')
}

const signOutSuccess = function () {
  $('#underlay').hide()
  $('#overlay').show()
  store.user = null
  $('#contentDisplay').empty()
}

const signOutFailure = function () {
  $('#userDisplay').text('Unable to sign out')
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#change-password')[0].reset()
  $('#userDisplay').text('Change password success')
}

const changePasswordFailure = function () {
  $('#change-password')[0].reset()
  $('#userDisplay').text('Unable to change password')
}

const getLocationsSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data.locations })
  $('#contentDisplay').html(showLocationHtml)
  store.locations = data.locations
  $('#userDisplay').text('Locations displayed below')
}

const getLocationsFailure = function () {
  $('#userDisplay').text('Unable to find locations')
}

const findLocationSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data })
  $('.content').html(showLocationHtml)
  $('#findLocationModal').modal('hide')
  $('#findLocation')[0].reset()
  $('#userDisplay').text('Location displayed below')
}

const findLocationFailure = function () {
  $('#userDisplay').text('Unable to find location')
}

const getLocationsDataSuccess = function (data) {
  console.log('We got data?')
  store.locations = data.locations
  console.log(store.locations)
}

const getLocationsDataFailure = function () {
  $('#userDisplay').text('Unable to find user locations')
}

const updateLocationSuccess = function (data) {
  $('#contentDisplay').empty()
  $('#userDisplay').text('Location Updated')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  console.log('location updated')
  console.log('store.locations below')
  console.log(store.locations)
}

const updateLocationFailure = function () {
  console.log('This is update failure')
}

const createLocationSuccess = function () {
  $('#addLocationModal').modal('hide')
  $('#addLocation')[0].reset()
}

const createLocationFailure = function () {
  console.log('This is a create failure')
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
  updateLocationFailure,
  createLocationSuccess,
  createLocationFailure
}
