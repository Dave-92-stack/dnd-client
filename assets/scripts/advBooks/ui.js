const showAdvBooksTemplate = require('../templates/advBooks.handlebars')
const advBookEvents = require('./events')
const api = require('./api')

const showAdvBooksSuccess = (data) => {
  const showAdvBooksHtml = showAdvBooksTemplate({ advBooks: data.advBooks })
  $('.content').html(showAdvBooksHtml)
  $('.destroyAdvBook').each(function (i, obj) {
    obj.on('submit', advBookEvents.onDestroyAdvBook)
  })
  $('#editModal').each(function (i, obj) {
    obj.on('submit', advBookEvents.onAdvBookEdit)
  })
  $('#message').text('Your adventure logs.')
  $('form').trigger('reset')
}

const showAdvBooksFailure = (data) => {
  $('#message').text('Failed to show adventures')
}

const createAdvBookSuccess = (data) => {
  const showAdvBooksHtml = showAdvBooksTemplate({ advBooks: data.advBooks })
  $('.content').text(showAdvBooksHtml)
  $('.destroyAdvBook').each(function (i, obj) {
    obj.on('submit', advBookEvents.onDestroyAdvBook)
  })
  $('.editModal').each(function (i, obj) {
    obj.on('submit', advBookEvents.onAdvBookEdit)
  })
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

const editAdvBookSuccess = (response) => {
  $('#message').text('Successfully edited your adventure')
  $('#editModal').modal('hide')
  api.showAdvBook()
    .then(showAdvBooksSuccess)
    .catch(showAdvBooksFailure)
}
const editAdvBookFailure = (response) => {
  ('#message').text('Failed to edit adventure, are you sure it is yours?')
  $('#editModal').modal('hide')
}

module.exports = {
  showAdvBooksSuccess,
  showAdvBooksFailure,
  createAdvBookSuccess,
  createAdvBookFailure,
  destroyAdvBookSuccess,
  destroyAdvBookFailure,
  editAdvBookSuccess,
  editAdvBookFailure
}
