// vanillaJS.js
document.addEventListener('DOMContentLoaded', loadedEvent => {
  const pokemonList = new PokemonList(POKEMONS, 'pokemon-search-input', 'pokemon-container')

  pokemonList.inputEl.addEventListener('keyup', event => {
    // 1. Get some input from the user
    const searchTerm = event.target.value

    // 2. Do some data manipulation / access
    const filteredPokemon = pokemonList.filter(searchTerm)

    // 3. Render to the screen
    const filteredPokemonTemplate = PokemonList.render(filteredPokemon)
    pokemonContainer.innerHTML = filteredPokemonTemplate
  })

  pokemonList.containerEl.addEventListener('click', event => {
    // Event delegation
    if (event.target.classList.contains('flip-image')) {
      // 1. Get some input from the user
      const pokemonName = event.target.dataset.pokename

      // 2. Do some data manipulation / access
      const foundPokemon = pokemonList.findByName(pokemonName)
      foundPokemon.flipImage()

      // 3. Render to the screen
      const foundPokemonTemplate = foundPokemon.render()
      document.getElementById(foundPokemon.name).innerHTML = foundPokemonTemplate
    }
  })
})
