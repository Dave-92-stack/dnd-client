const config = require('../config')
const store = require('../store')

const createAdvBook = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/advbooks',
    method: 'POST',
    user: store.user,
    data: formData
  })
}

const showAdvBooks = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/advbooks',
    method: 'GET',
    data: {
      advbook: []
    }
  })
}

const updateAdvBook = function (advBookId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/advBooks' + advBookId,
    method: 'PATCH',
    data: formData
  })
}

const destroyAdvBook = function (advBookId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/advBooks/' + advBookId,
    method: 'DELETE'
  })
}

module.exports = {
  createAdvBook,
  showAdvBooks,
  destroyAdvBook,
  updateAdvBook
}
