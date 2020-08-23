const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAdvBook = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createAdvBook(formData)
    .then(ui.createAdvBookSuccess)
    .then(onShowAdvBooks(event))
    .catch(ui.createAdvBookFailure)
}

const onShowAdvBooks = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showAdvBooks(formData)
    .then(ui.showAdvBooksSuccess)
    .catch(ui.showAdvBooksFailure)
}

const onDestroyAdvBook = (event) => {
  event.preventDefault()
  const advBookId = $(event.target).data('id')
  api.destroyAdvBook(advBookId)
    .then(ui.destroyAdvBookSuccess)
    .then(function () {
      onShowAdvBooks(event)
    })
    .catch(ui.destroyAdvBookFailure)
}

const onAdvBookEdit = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.editAdvBook(formData)
    .then(ui.editAdvBookSuccess)
    .then(function () {
      api.showAdvBooks()
    })
    .catch(ui.editAdvBookFailure)
}

module.exports = {
  onCreateAdvBook,
  onShowAdvBooks,
  onDestroyAdvBook,
  onAdvBookEdit
}
