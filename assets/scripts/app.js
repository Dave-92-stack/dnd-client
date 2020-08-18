'use strict'

const authEvents = require('./auth/events')
const advBookEvents = require('./advBooks/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#authenticatedRoute').hide()

  $('#createAdvBook').on('submit', advBookEvents.onCreateAdvBook)
  $('#showAdvBook').on('submit', advBookEvents.onShowAdvBooks)
  $('#destroyAdvBook').on('submit', advBookEvents.onDestroyAdvBook)
  $('#updateAdvbook').on('submit', advBookEvents.onUpdateAdvBook)
})
