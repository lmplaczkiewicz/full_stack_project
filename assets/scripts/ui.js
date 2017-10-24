'use strict'

// clear form fields and reset overlay header on sign in.

const store = require('./store')
const showLocationTemplate = require('../template/location-listing.handlebars')
const api = require('./api')

// const errorShake = function shakeForm (data) {
//   let l = 20
//   for (let i = 0; i <= 10; i++) {
//     $(data).animate({
//       'left': '+=' + (l = -l) + 'px',
//       'right': '-=' + l + 'px'
//     }, 50)
//   }
// }

// function shakeModal(){
//     $('#loginModal .modal-dialog').addClass('shake');
//              $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
//              $('input[type="password"]').val('');
//              setTimeout( function(){
//                 $('#loginModal .modal-dialog').removeClass('shake');
//     }, 500 );
// }

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
// setTimeout(function () {
//   $('#addLocationModal').removeClass('shake')
// }, 500)
// setTimeout(function () {
//   $('#errorAddLocation').removeClass('alert alert-danger').html('')
// }, 1000)

const signInSuccess = function (data) {
  store.user = data.user
  console.log(store.user)
  $('#signInModal').modal('hide')
  $('#sign-in')[0].reset()
  $('#underlay').show()
  $('#overlay').hide()
  getLocationsData()
  return data
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
