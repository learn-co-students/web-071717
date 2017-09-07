class PokemonList {
  // Constructor function invoked with `new` keyword
  constructor(pokemons, inputId, containerId) {
    this.inputEl = document.getElementById(inputId)
    this.containerEl = document.getElementById(containerId)
    this.pokemons = pokemons.map(poke => {
      return new Pokemon(poke.name, poke.sprites.front, poke.sprites.back)
    })
  }

  // Return a filtered or empty array depending on the `searchTerm`
  filter(searchTerm) {
    return searchTerm
      ? this.pokemons.filter(poke => poke.name.includes(searchTerm))
      : []
  }

  // Find a pokemon in the current list by name
  findByName(pokemonName) {
    return this.pokemons.find(poke => poke.name === pokemonName)
  }

  // Event listener to handle searching cards:
  //  1. Grab input value from `event.target.value`
  //  2. Get a filtered list of pokemon by input value
  //  3. Get template for filtered list and insert in DOM
  handleSearch(event) {
    const searchTerm = event.target.value

    const filteredPokemon = this.filter(searchTerm)

    const filteredPokemonTemplate = this.constructor.render(filteredPokemon)
    this.containerEl.innerHTML = filteredPokemonTemplate
  }

  // Event listener to handle flipping image:
  //  * Limit flipping to only `event.target`s which contain `flip-image` class
  //
  //  1. Get `pokename` from `event.target.dataset`
  //  2. Find pokemon by name, and flip the image
  //  3. Get template for pokemon with flipped image and insert in DOM
  handleFlipImage(event) {
    if (event.target.classList.contains('flip-image')) {
      const pokemonName = event.target.dataset.pokename

      const foundPokemon = this.findByName(pokemonName)
      foundPokemon.flipImage()

      const foundPokemonTemplate = foundPokemon.render()
      foundPokemon.getCardEl().innerHTML = foundPokemonTemplate
    }
  }

  // Render a list of pokemon passed in as argument
  static render(pokemons) {
    return pokemons.map(poke => poke.render()).join('')
  }
}
