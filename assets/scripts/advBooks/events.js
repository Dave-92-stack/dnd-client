const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAdvBook = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createAdvBook(formData)
    .then(ui.createAdvBookSuccess)
    .catch(ui.createAdvBookFailure)
}

const onShowAdvBooks = function (event) {
  event.preventDefault()
  api.showAdvBooks()
    .then(ui.showAdvBooksSuccess)
    .catch(ui.showAdvBooksFailure)
}

const onDestroyAdvBook = function (event) {
  event.preventDefault()
  const advBookId = $(event.target).data('id')
  api.destroyAdvBook(advBookId)
    .then(() => onShowAdvBooks(event))
    .then(ui.destroyAdvBookSuccess)
    .catch(ui.destroyAdvBookFailure)
}

const onUpdateAdvBook = function (event) {
  event.preventDefault()
  const advBookId = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateAdvBook(advBookId, formData)
    .then(ui.updateAdvBookSuccess)
    .catch(ui.updateAdvBookFailure)
}

module.exports = {
  onCreateAdvBook,
  onShowAdvBooks,
  onDestroyAdvBook,
  onUpdateAdvBook
}