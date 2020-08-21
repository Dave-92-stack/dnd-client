'use strict'

const authEvents = require('./auth/events')
const advBookEvents = require('./advBooks/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#authenticatedRoute').hide()

  $('#createAdvBook').on('submit', advBookEvents.onCreateAdvBook)
  $('#showAdvBook').on('submit', advBookEvents.onShowAdvBooks)
  $('#content').on('submit', '.destroyAdvBook', advBookEvents.onDestroyAdvBook)
  $('#updateAdvbook').on('submit', advBookEvents.onUpdateAdvBook)
})
