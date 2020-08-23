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

const editAdvBook = (formData) => {
  const advBook = {
    article: formData
  }
  return $.ajax({
    headers: {
      Authroization: 'Bearer' + store.user.token
    },
    url: config.apiUrl + '/advbooks/' + formData._id,
    method: 'PATCH',
    data: advBook
  })
}

module.exports = {
  createAdvBook,
  showAdvBooks,
  destroyAdvBook,
  editAdvBook
}
