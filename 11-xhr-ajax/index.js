document.addEventListener('DOMContentLoaded', function() {
  // On click of my button
  // Get a list of dog breeds from Dog CEO API
  // Convert data to html
  // Insert HTML onto the page

  const getDataEl = document.getElementById('get-data')

  getDataEl.addEventListener('click', function(event) {
    // 1. Getting some data from the user
    const req = new XMLHttpRequest()
    req.open('GET', 'https://dog.ceo/api/breeds/list/all')
    req.addEventListener('load', function(event) {
      const data = JSON.parse(event.target.response)
      const breedNames = Object.keys(data.message)
      const breeds = []

      breedNames.forEach(function(breedName) {
        const imgReq = new XMLHttpRequest()
        imgReq.open('GET', `https://dog.ceo/api/breed/${breedName}/images/random`)
        imgReq.addEventListener('load', function(event) {
          const data = JSON.parse(event.target.response)
          const imageUrl = data.message

          // 2. Doing some data manipulation
          // 3. Rendering to the screen
          document.body.innerHTML += `<div>${breedName}</div><img src="${imageUrl}">`
        })
        imgReq.send()
      })

    })
    req.send()

  })
})
