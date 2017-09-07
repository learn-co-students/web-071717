document.addEventListener('DOMContentLoaded', loadedEvent => {
  // Create one pokemon list with reference to the data passed in
  // and the ID's of the input element and container element
  const pokemonList = new PokemonList(POKEMONS, 'pokemon-search-input', 'pokemon-container')

  // Add event listener to input element to handle search
  // where `this` in the callback function will be `pokemonList`
  pokemonList.inputEl
    .addEventListener('keyup', pokemonList.handleSearch.bind(pokemonList))

  // Add event listener to container element to handle flipping image
  // where `this` in the callback function will be `pokemonList`
  pokemonList.containerEl
    .addEventListener('click', pokemonList.handleFlipImage.bind(pokemonList))
})
