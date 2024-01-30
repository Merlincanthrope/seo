class Sprite {
    constructor(x, y, imageSrc) {
      this.position = {
        x: x,
        y: y,
      }
      this.image = new Image()
      this.image.src = imageSrc
    }
    draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y)
    }
  }