class PokemonList {
  constructor(pokemons, inputId, containerId) {
    this.pokemons = pokemons.map(poke => {
      return new Pokemon(poke.name, poke.sprites.front, poke.sprites.back)
    })
    this.inputEl = document.getElementById(inputId)
    this.containerEl = document.getElementById(containerId)
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

  handleSearch(event) {
    // 1. Get some input from the user
    const searchTerm = event.target.value

    // 2. Do some data manipulation / access
    const filteredPokemon = this.filter(searchTerm)

    // 3. Render to the screen
    const filteredPokemonTemplate = this.constructor.render(filteredPokemon)
    this.containerEl.innerHTML = filteredPokemonTemplate
  }

  handleFlipImage(event) {
    // Event delegation
    if (event.target.classList.contains('flip-image')) {
      // 1. Get some input from the user
      const pokemonName = event.target.dataset.pokename

      // 2. Do some data manipulation / access
      const foundPokemon = this.findByName(pokemonName)
      foundPokemon.flipImage()

      // 3. Render to the screen
      const foundPokemonTemplate = foundPokemon.render()
      document.getElementById(foundPokemon.name).innerHTML = foundPokemonTemplate
    }
  }
}
