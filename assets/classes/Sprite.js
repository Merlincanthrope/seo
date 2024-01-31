class Sprite {
    constructor(x, y, imageSrc, frameCount) {
      this.position = {
        x: x,
        y: y,
      }
      this.image = new Image()
      this.image.onload = () => {
        this.loaded = true
        this.width = this.image.width / this.frameCount
        this.height = this.image.height
      }
      this.image.src = imageSrc
      this.loaded = false
      this.frameCount = frameCount
    }
    draw() {
      if (!this.loaded) return
      const cropbox = {
        position: {
          x: 0,
          y: 0,
        },
        width: this.width,
        height: this.height,
      }
      ctx.drawImage(
        this.image, 
        cropbox.position.x,
        cropbox.position.y,
        cropbox.width,
        cropbox.height,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }
  }