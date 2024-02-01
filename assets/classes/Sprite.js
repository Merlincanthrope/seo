class Sprite {
    constructor({ position, imageSrc, frameCount = 1, frameBuffer = 5, animations, loop = true }) {
      this.position = position
      this.image = new Image()
      this.image.onload = () => {
        this.loaded = true
        this.width = this.image.width / this.frameCount
        this.height = this.image.height
      }
      this.image.src = imageSrc
      this.loaded = false
      this.frameCount = frameCount
      this.currentFrame = 0
      this.elapsedFrames = 0
      this.frameBuffer = frameBuffer
      this.animations = animations
      this.loop = loop
      this.currentAnim
    }
    draw() {
      if (!this.loaded) return
      const cropbox = {
        position: {
          x: this.width*this.currentFrame,
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

      this.updateFrames();
    }

    playAnim() {
      this.autoplay = true
    }
    
    updateFrames() {
      if (!this.autoplay) return
      this.elapsedFrames++

      if (this.elapsedFrames % this.frameBuffer === 0) {
        if (this.currentFrame < this.frameCount - 1) this.currentFrame++
        else if (this.loop) this.currentFrame = 0;
      }

      if (this.currentAnim?.onComplete) {
        if (this.currentFrame === this.frameCount - 1 &&
           !this.currentAnim.isActive) {
        this.currentAnim.onComplete()
        this.currentAnim.isActive = true
           }
      }
    }
  }