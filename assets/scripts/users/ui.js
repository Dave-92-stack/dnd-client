const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('You have signed up successfully!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Failed to sign up!')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#authenticatedRoute').show()
  $('#unauthenticatedRoute').hide()
  $('#message').text('You have successfully signed in!')
  $('form').trigger('reset')
  store.user = response.user
}

const signInFailure = function () {
  $('#message').text('Failed to sign in!')
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('Failed to sign out.')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Successfully signed out.')
  $('form').trigger('reset')
  $('#unauthenticatedRoute').show()
  $('#authenticatedRoute').hide()
  delete store.user
}

const changePasswordSuccess = function () {
  $('#message').text('You have successfully changed your password!')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Failed to change password')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
