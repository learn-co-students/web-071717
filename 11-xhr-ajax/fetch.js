document.addEventListener('DOMContentLoaded', function() {

  const getDataEl = document.getElementById('get-data')

  // getDataEl.addEventListener('click', fetchDogsAnyOrder)
  // getDataEl.addEventListener('click', fetchAllDogs)
  // getDataEl.addEventListener('click', fetchAllDogsSequentially)
})

function fetchDogsAnyOrder(event) {
  // fetch list of dog names
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
      return response.json()
    })
    .then(function(dogsObj) {
      let dogs = Object.keys(dogsObj.message)

      dogs.forEach(function(dog) {
        fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
          .then(function(response) {
            return response.json()
          })
          .then(function(data) {
            document.body.innerHTML += `<div>${dog}</div><img src="${data.message}">`
          })
      })
    })
}

function fetchAllDogs(event) {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
      return response.json()
    })
    .then(function(dogsObj) {
      let dogNames = Object.keys(dogsObj.message)
      const promises = dogNames.map(dogName => fetch(`https://dog.ceo/api/breed/${dogName}/images/random`));
      return Promise.all(promises)
    })
    .then(dogResponses => {
      return Promise.all(dogResponses.map(dogResponse => dogResponse.json()))
    })
    .then(dogData => {
      const dogImages = dogData.map(data => data.message)
      dogImages.forEach(image => {
        // this is unfortunate, we want to hold on to the names of the dogs
        let urlBeforeName = 'https://dog.ceo/api/img/'
        let lastSlash = image.lastIndexOf('/')
        let dog = image.slice(urlBeforeName.length, lastSlash)
        document.body.innerHTML += `<div>${dog}</div><img src="${image}">`
      })
    })
}

function fetchAllDogsSequentially(event) {
  const dogList = {}

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) { return response.json() })
    .then(function(response) {
      let sequentialPromise = Promise.resolve();

      Object.keys(response.message).forEach(dogName => {
        sequentialPromise = sequentialPromise
          .then(emptyValue => fetch(`https://dog.ceo/api/breed/${dogName}/images/random`))
          .then(response => response.json())
          .then(data => {
            document.body.innerHTML += `<div>${dogName}</div><img src="${data.message}">`
          });
      });
    })
}
