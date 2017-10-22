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
  $('#overlayAlert').text('Unable to sign out')
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
  $('#overlayAlert').text('Unable to sign in')
}

const signOutSuccess = function () {
  $('#underlay').hide()
  $('#overlay').show()
  $('#contentDisplay').empty()
  store.user = null
}

const signOutFailure = function () {
  $('#userDisplay').text('Unable to sign out')
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#change-password')[0].reset()
  $('#userDisplay').text('Unable to change password')
}

const getLocationsSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data.locations })
  $('#contentDisplay').html(showLocationHtml)
  store.locations = data.locations
  $('#findLocationModal').modal('hide')
  $('#findLocation')[0].reset()
}

const getLocationsFailure = function () {
  $('#userDisplay').text('Unable to find locations')
}

const findLocationSuccess = function (data) {
  $('#contentDisplay').empty()
  const showLocationHtml = showLocationTemplate({ locations: data })
  $('.content').html(showLocationHtml)
}

const findLocationFailure = function () {
  $('#userDisplay').text('Unable to find location')
}

const getLocationsDataSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data.locations })
  $('#contentDisplay').html(showLocationHtml)
  store.locations = data.locations
}

const getLocationsDataFailure = function () {
  $('#userDisplay').text('Unable to find user locations')
}

const updateLocationSuccess = function (data) {
  $('#contentDisplay').empty()
  $('#userDisplay').text('Location Updated')
  const showLocationHtml = showLocationTemplate({ locations: data.locations })
  $('#contentDisplay').html(showLocationHtml)
  store.locations = data.locations
  console.log(store.locations)
}

const updateLocationFailure = function () {
  $('#userDisplay').text('Location update failure')
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
