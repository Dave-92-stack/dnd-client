const showAdvBooksTemplate = require('../templates/advBooks.handlebars')
const advBookEvents = require('./events')

const showAdvBooksSuccess = (data) => {
  const showAdvBooksHtml = showAdvBooksTemplate({ advBooks: data.advBooks })
  $('.content').html(showAdvBooksHtml)
  $('.destroyAdvBook').on('click', advBookEvents.onDestroyAdvBook)
  // $('body').removeAttr('class')
  $('#message').text('Your adventure logs.')
}

const showAdvBooksFailure = (data) => {
  $('#message').text('Failed to show adventures')
}

const createAdvBookSuccess = (data) => {
  const showAdvBooksHtml = showAdvBooksTemplate({ advBooks: data.advBooks })
  $('.content').text(showAdvBooksHtml)
  $('#message').text('Adventure logged successfully!')
  $('form').trigger('reset')
}

const createAdvBookFailure = (data) => {
  $('#message').text('Failed to store your new adventure')
}

const destroyAdvBookSuccess = (id) => {
  $(`[data-id='${id}']`).remove()
  $('#message').text('You deleted an adventure')
}

const destroyAdvBookFailure = (id) => {
  $('#message').text('Failed to delete adventure')
}

const updateAdvBookSuccess = (id) => {
  $('#message').text('Updated adventure successfully!')
  $('form').trigger('reset')
}

const updateAdvBookFailure = () => {
  $('#message').text('Failed to update adventure!')
}

module.exports = {
  showAdvBooksSuccess,
  showAdvBooksFailure,
  createAdvBookSuccess,
  createAdvBookFailure,
  destroyAdvBookSuccess,
  destroyAdvBookFailure,
  updateAdvBookSuccess,
  updateAdvBookFailure
}
