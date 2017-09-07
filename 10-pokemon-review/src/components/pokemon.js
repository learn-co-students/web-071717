class Pokemon {
  // Constructor function invoked with `new` keyword
  constructor(name, frontImage, backImage) {
    this.name = name
    this.frontImage = frontImage
    this.backImage = backImage
    this.currentImage = frontImage
  }

  // Get the element of the pokemon card div on the page
  getCardEl() {
    return document.getElementById(this.name)
  }

  // Update the currentImage property on a pokemon
  flipImage() {
    this.currentImage = this.currentImage === this.frontImage
      ? this.backImage
      : this.frontImage
  }

  // Tell our program how to render a single pokemon card
  render() {
    return `
      <div class="pokemon-card" id="${this.name}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src="${this.currentImage}">
            </div>
          </div>

          <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}">flip card</p>
        </div>
      </div>`
  }
}
