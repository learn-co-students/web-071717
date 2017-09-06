// vanillaJS.js
document.addEventListener('DOMContentLoaded', function() {
  const pokemonList = new PokemonList(POKEMONS)

  console.log(pokemonList)

  const searchInput = document.getElementById('pokemon-search-input') // OR document.querySelector('#pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  searchInput.addEventListener('keyup', function() {
    // 1. Get some input from the user
    const searchTerm = event.target.value

    // 2. Do some data manipulation / access
    const filteredPokemon = pokemonList.filter(searchTerm)

    // 3. Render to the screen
    const filteredPokemonTemplate = PokemonList.render(filteredPokemon)
    pokemonContainer.innerHTML = filteredPokemonTemplate
  })

  pokemonContainer.addEventListener('click', function() {
    console.log('flip image on card click')
    // 1. Get some input from the user
    const pokemonName = event.target.dataset.pokename

    // 2. Do some data manipulation / access
    const foundPokemon = pokemonList.findByName(pokemonName)

    // 3. Render to the screen

  })
})

// // eventHandlers.js
// function flipPokemon(event) {
//   if (event.target.classList.contains('flip-image')) {
//
//     const foundPokemonTemplate = renderPokemon(foundPokemon)
//
//     // 3. Re-render my data
//     document.getElementById(`${foundPokemon.name}`).innerHTML = foundPokemonTemplate // OR event.target.parentElement.parentElement.innerHTML = foundPokemonTemplate
//   }
// }
//
// function getFilterPokemonCallback(pokemonContainer) {
//   // This is a function which returns a function (closure) that holds on to the value of pokemonContainer
//   return function filterPokemon(event) {
//
//   }
// }
//
//  Image flipping logic:
//   const pokemonImg = document.getElementById(`${pokemon.name}-img`)
//
//   // Short circuiting
//   const imageSrc = pokemonImg && pokemonImg.src
//
//   // pokemon.sprites[sprite] will be front image OR back image
//   let sprite = "front"
//   if (imageSrc === pokemon.sprites.front) {
//     sprite = "back"
//   }
