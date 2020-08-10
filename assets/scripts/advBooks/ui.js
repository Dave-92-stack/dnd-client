const config = require('../config')
const store = require('../store')
const showadvBookTemplate = require('../templates/advBook.handlebars')

const advBookId = showadvBookTemplate.book

const getBooks = function (data) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/books',
    method: 'GET',
    data: {
      user: store.user.id
    }
  })
}

const createBook = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/books',
    method: 'POST',
    data: formData
  })
}

const deleteBook = function (advBookId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/books/' + advBookId,
    method: 'DELETE'
  })
}

const updateBook = function (advBookId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/books/' + advBookId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  getBooks,
  createBook,
  deleteBook,
  updateBook
}
