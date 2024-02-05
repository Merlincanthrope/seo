function onComplete() {
  console.log("Animation Complete")
  gsap.to(overlay, {
    opacity: 1,
    onComplete: () => {
      levels[level].init()
      gsap.to(overlay, {
        opacity: 0,
      })
    },
   })
   console.log("Overlay has completed its level switch sequence")
   level++
  console.log("Current level is " + level)
}


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
      this.currentAnimation = {
        onComplete: () => {
          onComplete()
        }
      }

      this.onCompleteLogged = false

      if (this.animations) {
        for (let key in this.animations) {
          const image = new Image()
          image.src = this.animations[key].imageSrc
          this.animations[key].image = image
        }
      }
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
        this.height,
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

      // console.log(this.currentAnimation?.onComplete)
      if (this.currentAnimation?.onComplete) {
        if (this.currentFrame === this.frameCount - 1 && !this.currentAnimation.isActive) {
          this.currentAnimation.onComplete();
          this.currentAnimation.isActive = true;
        }
      } else {
        if (!this.onCompleteLogged) {
          console.log("this.currentAnimation.onComplete does not exist.")
          this.onCompleteLogged = true
        }
      }
    }
  }