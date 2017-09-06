class PokemonList {
  constructor(pokemons) {
    this.pokemons = pokemons
  }

  filter(searchTerm) {
    // if (!searchTerm) {
    //   pokemonContainer.innerHTML = ''
    //   return
    // }
    if (!searchTerm) {
      return  []
    }

    // const filteredPokemon = POKEMONS.filter(function(pokemon) {
    //   return pokemon.name.includes(searchTerm)
    // })
    return this.pokemons.filter(function(pokemon) {
      return pokemon.name.includes(searchTerm)
    })
  }
}
