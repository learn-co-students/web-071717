document.addEventListener('DOMContentLoaded', function() {

  const getDataEl = document.getElementById('get-data')

  getDataEl.addEventListener('click', function(event) {
    $.ajax({
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/list/all',
      success: function(data) {
        const breedNames = Object.keys(data.message)

        breedNames.forEach(function(breedName) {
          $.ajax({
            method: 'GET',
            url: `https://dog.ceo/api/breed/${breedName}/images/random`,
            success: function(data) {
              const image = data.message
              document.body.innerHTML += `<div>${breedName}</div><img src="${image}">`
            }
          })
        })
      }
    })
  })
})
