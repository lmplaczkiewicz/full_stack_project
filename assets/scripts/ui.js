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
  $('#signInModal').modal('hide')
  $('#sign-in')[0].reset()
  $('#underlay').show()
  $('#overlay').hide()
  store.user = data.user
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
}

const getLocationsFailure = function () {
  $('#contentDisplay').text('Error')
}

const findLocationSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data.locations })
  $('.content').append(showLocationHtml)
}

const findLocationFailure = function () {
  $('#contentDisplay').text('Error')
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
  findLocationFailure
}
