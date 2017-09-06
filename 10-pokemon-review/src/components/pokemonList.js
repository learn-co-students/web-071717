class PokemonList {
  constructor(pokemons) {
    this.pokemons = pokemons.map(function(pokemon) {
      return new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back)
    })
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

  static render(pokemons) {
    // const filteredPokemonTemplate = filteredPokemon.map(renderPokemon).join('')

    return pokemons.map(function(pokemon) {
      return pokemon.render()
    }).join('')
  }

  findByName(pokemonName) {
    //     const foundPokemon = POKEMONS.find(function(pokemon) {
    //       return pokemon.name === pokemonName
    //     })
    return this.pokemons.find(function(pokemon) {
      return pokemon.name === pokemonName
    })
  }
}
