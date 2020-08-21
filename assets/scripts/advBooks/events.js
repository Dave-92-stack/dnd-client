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

const onDestroyAdvBook = (event) => {
  event.preventDefault()
  const advBookId = $(event.target).data('id')
  api.destroyAdvBook(advBookId)
    .then(() => {
      api.onShowAdvBooks()
        .then(ui.destroyAdvBookSuccess)
    })
    .catch(ui.destroyAdvBookFailure)
}

const addHandler = () => {
  $('.content').on('submit', '.destroyAdvBook', onDestroyAdvBook)
}

const onUpdateAdvBook = function (event) {
  event.preventDefault()

  const form = event.target
  const advBookId = $(form).data('id')
  const formData = getFormFields(form)

  api.updateAdvBook(advBookId, formData)
    .then(ui.updateAdvBookSuccess)
    .then(function () {
      onShowAdvBooks(event)
    })
    .catch(ui.updateAdvBookFailure)
}

module.exports = {
  onCreateAdvBook,
  onShowAdvBooks,
  onDestroyAdvBook,
  onUpdateAdvBook,
  addHandler
}
