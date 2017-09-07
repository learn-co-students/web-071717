class PokemonList {
  constructor(pokemons) {
    this.pokemons = pokemons.map(poke => {
      return new Pokemon(poke.name, poke.sprites.front, poke.sprites.back)
    })
  }

  filter(searchTerm) {
    return searchTerm
      ? this.pokemons.filter(poke => poke.name.includes(searchTerm))
      : []
  }

  static render(pokemons) {
    return pokemons.map(poke => poke.render()).join('')
  }

  findByName(pokemonName) {
    return this.pokemons.find(poke => poke.name === pokemonName)
  }
}
