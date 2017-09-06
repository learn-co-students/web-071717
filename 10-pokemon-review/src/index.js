// vanillaJS.js
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('pokemon-search-input') // OR document.querySelector('#pokemon-search-input')
  const pokemonContainer = document.getElementById('pokemon-container')

  searchInput.addEventListener('keyup', getFilterPokemonCallback(pokemonContainer))
  pokemonContainer.addEventListener('click', flipPokemon)
})

// eventHandlers.js
function flipPokemon(event) {
  if (event.target.classList.contains('flip-image')) {

    // 1. Get input from the user
    const pokemonName = event.target.dataset.pokename

    // 2. Do some data manipulation / access
    const foundPokemon = POKEMONS.find(function(pokemon) {
      return pokemon.name === pokemonName
    })
    const foundPokemonTemplate = renderPokemon(foundPokemon)

    // 3. Re-render my data
    document.getElementById(`${foundPokemon.name}`).innerHTML = foundPokemonTemplate // OR event.target.parentElement.parentElement.innerHTML = foundPokemonTemplate
  }
}

function getFilterPokemonCallback(pokemonContainer) {
  // This is a function which returns a function (closure) that holds on to the value of pokemonContainer
  return function filterPokemon(event) {

    // 1. Get some input from the user
    const searchTerm = event.target.value

    if (!searchTerm) {
      pokemonContainer.innerHTML = ''
      return
    }

    // 2. Do some data manipulation / access
    const filteredPokemon = POKEMONS.filter(function(pokemon) {
      return pokemon.name.includes(searchTerm) // OR return pokemon.name.match(new RegExp(searchTerm))
    })

    // 3. Render to the screen
    const filteredPokemonTemplate = filteredPokemon.map(renderPokemon).join('')
    pokemonContainer.innerHTML = filteredPokemonTemplate
  }
}

function renderPokemon(pokemon) {
  const pokemonImg = document.getElementById(`${pokemon.name}-img`)

  // Short circuiting
  const imageSrc = pokemonImg && pokemonImg.src

  // pokemon.sprites[sprite] will be front image OR back image
  let sprite = "front"
  if (imageSrc === pokemon.sprites.front) {
    sprite = "back"
  }

  return `
    <div class="pokemon-card" id="${pokemon.name}">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img id="${pokemon.name}-img" src="${pokemon.sprites[sprite] }">
        </div>
      </div>
      <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
      </div>
    </div>`
}
