'use strict'

// clear form fields and reset overlay header on sign in.

const store = require('./store')
const showLocationTemplate = require('../template/location-listing.handlebars')
const showCompanyTemplate = require('../template/company-listing.handlebars')
const api = require('./api')

const signUpSuccess = function (data) {
  $('#signUpModal').modal('hide')
  $('#sign-up')[0].reset()
  $('#frontSuccess').addClass('alert alert-success').html('Account Created')
  setTimeout(function () {
    $('#frontSuccess').removeClass('alert alert-success').html('')
  }, 1000)
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
  $('#companyDisplay').empty()
  $('#userDisplay').text('Welcome to the Location Management System')
}

const signOutFailure = function () {
  $('#uiError').addClass('alert alert-danger').html('Unable to Sign Out')
  setTimeout(function () {
    $('#uiError').removeClass('alert alert-danger').html('')
  }, 1000)
}

const changePasswordSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#change-password')[0].reset()
  $('#uiSuccess').addClass('alert alert-success').html('Password Changed')
  setTimeout(function () {
    $('#uiSuccess').removeClass('alert alert-success').html('')
  }, 1000)
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
  if (store.locations.length === 0) {
    $('#uiWarning').addClass('alert alert-warning').html('Create a Location')
    setTimeout(function () {
      $('#uiWarning').removeClass('alert alert-warning').html('')
    }, 1000)
  } else {
    $('#uiSuccess').addClass('alert alert-success').html('Locations displayed below')
    setTimeout(function () {
      $('#uiSuccess').removeClass('alert alert-success').html('')
    }, 1000)
  }
}

const getLocationsFailure = function () {
  $('#uiError').addClass('alert alert-danger').html('Unable to retrieve locations')
  setTimeout(function () {
    $('#uiError').removeClass('alert alert-danger').html('')
  }, 1000)
}

const findLocationSuccess = function (data) {
  const showLocationHtml = showLocationTemplate({ locations: data })
  $('#contentDisplay').html(showLocationHtml)
  $('#findLocationModal').modal('hide')
  $('#findLocation')[0].reset()
  if (store.locations.length === 0) {
    $('#uiWarning').addClass('alert alert-warning').html('Create a Location')
    setTimeout(function () {
      $('#uiWarning').removeClass('alert alert-warning').html('')
    }, 1000)
  } else {
    $('#uiSuccess').addClass('alert alert-success').html('Information displayed below')
    setTimeout(function () {
      $('#uiSuccess').removeClass('alert alert-success').html('')
    }, 1000)
  }
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
  $('#uiError').addClass('alert alert-danger').html('Unable to connect to database')
  setTimeout(function () {
    $('#uiError').removeClass('alert alert-danger').html('')
  }, 1000)
}

const updateLocationSuccess = function (data) {
  $('#contentDisplay').empty()
  $('#userDisplay').text('Location Updated')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#uiSuccess').addClass('alert alert-success').html('Location Updated')
  setTimeout(function () {
    $('#uiSuccess').removeClass('alert alert-success').html('')
  }, 1000)
}

const updateLocationFailure = function () {
  $('.errorTarget').addClass('shake')
  $('.errorUpdateLocation').addClass('alert alert-danger').html('Create Location Failure')
  setTimeout(function () {
    $('.errorTarget').removeClass('shake')
    setTimeout(function () {
      $('.errorUpdateLocation').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
}

const createLocationSuccess = function () {
  $('#addLocationModal').modal('hide')
  $('#addLocation')[0].reset()
  $('#uiSuccess').addClass('alert alert-success').html('Location Created')
  setTimeout(function () {
    $('#uiSuccess').removeClass('alert alert-success').html('')
  }, 1000)
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
  store.companies = data.companies
  if (store.companies.length === 0) {
    $('#uiCompWarning').addClass('alert alert-warning').html('Create a Company')
    setTimeout(function () {
      $('#uiCompWarning').removeClass('alert alert-warning').html('')
    }, 1000)
  } else {
    $('#uiCompSuccess').addClass('alert alert-success').html('Companies displayed below')
    setTimeout(function () {
      $('#uiCompSuccess').removeClass('alert alert-success').html('')
    }, 1000)
  }
}

const getCompaniesFailure = function () {
  $('#uiCompError').addClass('alert alert-danger').html('Unable to retrieve companies')
  setTimeout(function () {
    $('#uiCompError').removeClass('alert alert-danger').html('')
  }, 1000)
}

const createCompanySuccess = function () {
  $('#addCompanyModal').modal('hide')
  $('#addCompany')[0].reset()
  $('#uiCompSuccess').addClass('alert alert-success').html('Company Created')
  setTimeout(function () {
    $('#uiCompSuccess').removeClass('alert alert-success').html('')
  }, 1000)
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
  $('#uiCompError').addClass('alert alert-danger').html('Database Connection Error')
  setTimeout(function () {
    $('#uiCompError').removeClass('alert alert-danger').html('')
  }, 1000)
}

const updateCompanySuccess = function (data) {
  $('#companyDisplay').empty()
  $('#userDisplay').text('Company Updated')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#uiCompSuccess').addClass('alert alert-success').html('Company Updated')
  setTimeout(function () {
    $('#uiCompSuccess').removeClass('alert alert-success').html('')
  }, 1000)
}

const updateCompanyFailure = function () {
  $('.errorTarget').addClass('shake')
  $('.errorUpdateCompany').addClass('alert alert-danger').html('Update Company Failure')
  setTimeout(function () {
    $('.errorTarget').removeClass('shake')
    setTimeout(function () {
      $('.errorUpdateCompany').removeClass('alert alert-danger').html('')
    }, 1000)
  }, 1000)
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
