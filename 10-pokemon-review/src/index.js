document.addEventListener('DOMContentLoaded', loadedEvent => {
  const pokemonList = new PokemonList(POKEMONS, 'pokemon-search-input', 'pokemon-container')

  pokemonList.inputEl
    .addEventListener('keyup', pokemonList.handleSearch.bind(pokemonList))

  pokemonList.containerEl
    .addEventListener('click', pokemonList.handleFlipImage.bind(pokemonList))
})
