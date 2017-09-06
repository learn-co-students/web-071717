class Pokemon {
  constructor(name, frontImage, backImage) {
    this.name = name
    this.frontImage = frontImage
    this.backImage = backImage
    this.currentImage = frontImage
  }

  flipImage() {
    //   // pokemon.sprites[sprite] will be front image OR back image
    //   let sprite = "front"
    //   if (imageSrc === pokemon.sprites.front) {
    //     sprite = "back"
    //   }
    if (this.currentImage === this.frontImage) {
      this.currentImage = this.backImage
    } else {
      this.currentImage = this.frontImage
    }
  }

  render() {
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

    return `
      <div class="pokemon-card" id="${this.name}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img id="${this.name}-img" src="${this.frontImage}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
  }
}
