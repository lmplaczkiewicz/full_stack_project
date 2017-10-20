'use strict'

const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const passwordChange = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const show = function (playerId) {
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const find = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/locations',
    method: 'POST',
    data: data
  })
}

const removeLocation = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/locations/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateLocation = function (locationId, data) {
  console.log('Below is locationId')
  console.log(locationId)
  console.log('Below is data')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/locations/' + locationId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  passwordChange,
  show,
  find,
  create,
  removeLocation,
  updateLocation
}
