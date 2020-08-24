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

const destroyAdvBook = function (advBookId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/advBooks/' + advBookId,
    method: 'DELETE',
    user: store.user
  })
}

const editAdvBook = (formData, advBookId) => {
  return $.ajax({
    url: config.apiUrl + '/advBooks/' + advBookId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}
module.exports = {
  createAdvBook,
  showAdvBooks,
  destroyAdvBook,
  editAdvBook
}
