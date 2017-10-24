'use strict'

// clear form fields and reset overlay header on sign in.

const store = require('./store')
const showLocationTemplate = require('../template/location-listing.handlebars')
const showCompanyTemplate = require('../template/company-listing.handlebars')
const api = require('./api')

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#sign-up')[0].reset()
}

const signUpFailure = function () {
  $('#signUpModal').addClass('shake')
  $('#errorSignUp').addClass('alert alert-danger').html('Sign Up Failure')
  setTimeout(function () {
    $('#signUpModal').removeClass('shake')
    setTimeout(function () {
      $('#errorSignUp').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
}

const getLocationsData = function () {
  api.show()
    .then(getLocationsDataSuccess)
    .catch(getLocationsDataFailure)
}

const signInFailure = function () {
  $('#signInModal').addClass('shake')
  $('#errorSignIn').addClass('alert alert-danger').html('Sign In Failure')
  setTimeout(function () {
    $('#signInModal').removeClass('shake')
    setTimeout(function () {
      $('#errorSignIn').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
}

const signOutSuccess = function () {
  $('#underlay').hide()
  $('#overlay').show()
  store.user = null
  $('#contentDisplay').empty()
  $('#userDisplay').text('Welcome to the Location Management System')
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
  $('#changePasswordModal').addClass('shake')
  $('#errorPasswordChange').addClass('alert alert-danger').html('Password Change Failure')
  setTimeout(function () {
    $('#changePasswordModal').removeClass('shake')
    setTimeout(function () {
      $('#errorPasswordChange').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
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
  $('#findLocationModal').addClass('shake')
  $('#errorFindLocation').addClass('alert alert-danger').html('Find Location Failure')
  setTimeout(function () {
    $('#findLocationModal').removeClass('shake')
    setTimeout(function () {
      $('#errorFindLocation').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
}

const getLocationsDataSuccess = function (data) {
  store.locations = data.locations
}

const getLocationsDataFailure = function () {
  $('#userDisplay').text('Unable to connect to database')
}

const updateLocationSuccess = function (data) {
  $('#contentDisplay').empty()
  $('#userDisplay').text('Location Updated')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateLocationFailure = function () {
  $('.errorTarget').addClass('shake')
  $('.errorUpdateLocation').addClass('alert alert-danger').html('Create Location Failure')
  setTimeout(function () {
    $('.errorTarget').removeClass('shake')
    setTimeout(function () {
      $('.errorUpdateLocation').removeClass('alert alert-danger').html('')
    }, 500)
  }, 500)
}

const createLocationSuccess = function () {
  $('#addLocationModal').modal('hide')
  $('#addLocation')[0].reset()
}

const createLocationFailure = function () {
  $('#addLocationModal').addClass('shake')
  $('#errorAddLocation').addClass('alert alert-danger').html('Create Location Failure')
  setTimeout(function () {
    $('#addLocationModal').removeClass('shake')
    setTimeout(function () {
      $('#errorAddLocation').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
}

const getCompaniesSuccess = function (data) {
  const showCompanyHtml = showCompanyTemplate({ companies: data.companies })
  $('#companyDisplay').html(showCompanyHtml)
  store.locations = data.locations
  $('#userDisplay').text('Companies displayed below')
}

const getCompaniesFailure = function () {
  $('#userDisplay').text('Unable to find companies')
}

const createCompanySuccess = function () {
  $('#addCompanyModal').modal('hide')
  $('#addCompany')[0].reset()
}

const createCompanyFailure = function () {
  $('#addCompanyModal').addClass('shake')
  $('#errorAddCompany').addClass('alert alert-danger').html('Create Company Failure')
  setTimeout(function () {
    $('#addCompanyModal').removeClass('shake')
    setTimeout(function () {
      $('#errorAddCompany').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
}

const getCompaniesData = function () {
  api.show()
    .then(getCompaniesDataSuccess)
    .catch(getCompaniesDataFailure)
}

const getCompaniesDataSuccess = function (data) {
  store.locations = data.locations
}

const getCompaniesDataFailure = function () {
  $('#userDisplay').text('Unable to connect to database')
}

const updateCompanySuccess = function (data) {
  $('#companyDisplay').empty()
  $('#userDisplay').text('Company Updated')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateCompanyFailure = function () {
  $('.errorTarget').addClass('shake')
  $('.errorUpdateCompany').addClass('alert alert-danger').html('Create Company Failure')
  setTimeout(function () {
    $('.errorTarget').removeClass('shake')
    setTimeout(function () {
      $('.errorUpdateCompany').removeClass('alert alert-danger').html('')
    }, 500)
  }, 500)
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#signInModal').modal('hide')
  $('#sign-in')[0].reset()
  $('#underlay').show()
  $('#overlay').hide()
  getLocationsData()
  getCompaniesData()
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
  createLocationFailure,
  createCompanySuccess,
  createCompanyFailure,
  getCompaniesSuccess,
  getCompaniesFailure,
  updateCompanySuccess,
  updateCompanyFailure
}
