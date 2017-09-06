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
    //
    // function renderPokemon(pokemon) {
    //
    //   return `
    //     <div class="pokemon-card" id="${pokemon.name}">
    //       <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    //       <h1 class="center-text">${pokemon.name}</h1>
    //       <div style="width:239px;margin:auto">
    //         <div style="width:96px;margin:auto">
    //           <img id="${pokemon.name}-img" src="${pokemon.sprites[sprite] }">
    //         </div>
    //       </div>
    //       <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
    //       </div>
    //     </div>`
    // }

    function renderPokemon(pokemon) {
      return `
        <div class="pokemon-card" id="${pokemon.name}">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img id="${pokemon.name}-img" src="${pokemon.sprites.front }">
            </div>
          </div>
          <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
          </div>
        </div>`
    }

    return pokemons.map(renderPokemon).join('')
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
