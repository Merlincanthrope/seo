class Enemy extends Sprite {
  constructor({
    position,
    velocity,
    color = "red",
    imageSrc,
    size,
    frameCount,
    sprites,
    health = 100,
  }) {
    super({ position, imageSrc, frameCount })

    this.position = position
    this.size = size
    this.velocity = velocity
    this.lastInput
    this.hitbox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      width: this.size.width,
      height: this.size.height,
    }
    this.color = color
    this.isAttacking = false
    this.health = health
    
    this.currentFrame = 0
    this.elapsedFrames = 0
    this.frameBuffer = 5
    this.sprites = sprites
    this.isDead = false

    for (let key in this.sprites) {
      this.sprites[key].image = new Image()
      this.sprites[key].image.src = this.sprites[key].imageSrc
    }
  }

  update() {
    this.draw()
    if (!this.isDead) updateFrames()
  }

  switchSprites(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.currentFrame === this.sprites.death.frameCount - 1) {
        this.isDead = true
        return
      }
    }

    if (
      (this.image === this.sprites.attackLeft.image || this.image === this.sprites.attackRight.image) &&
      this.currentFrame < this.sprites.attackLeft.frameCount - 1
    ) 
      return

    if (
      this.image === this.sprites.getHit.image &&
      this.currentFrame < this.sprites.getHit.frameCount - 1
    )
      return

    switch(sprite) {
      case "idleLeft":
        if (this.image !== this.sprites.idleLeft.image) {
          this.image = this.sprites.idleLeft.image
          this.frameCount = this.sprites.idleLeft.frameCount
          this.currentFrame = 0
        }
        break
      case "idleRight":
        if (this.image !== this.sprites.idleRight.image) {
          this.image = this.sprites.idleRight.image
          this.frameCount = this.sprites.idleRight.frameCount
          this.currentFrame = 0
        }
        break
      case "moveLeft":
        if (this.image !== this.sprites.moveLeft.image) {
          this.image = this.sprites.moveLeft.image
          this.frameCount = this.sprites.moveLeft.frameCount
          this.currentFrame = 0
        }
        break
      case "moveRight":
        if (this.image !== this.sprites.moveRight.image) {
          this.image = this.sprites.moveRight.image
          this.frameCount = this.sprites.moveRight.frameCount
          this.currentFrame = 0
        }
        break
      case "jumpLeft":
        if (this.image !== this.sprites.jumpLeft.image) {
          this.image = this.sprites.jumpLeft.image
          this.frameCount = this.sprites.jumpLeft.frameCount
          this.currentFrame = 0
        }
        break
      case "jumpRight":
        if (this.image !== this.sprites.jumpRight.image) {
          this.image = this.sprites.jumpRight.image
          this.frameCount = this.sprites.jumpRight.frameCount
          this.currentFrame = 0
        }
        break
      case "fallLeft":
        if (this.image !== this.sprites.fallLeft.image) {
          this.image = this.sprites.fallLeft.image
          this.frameCount = this.sprites.fallLeft.frameCount
          this.currentFrame = 0
        }
        break
      case "fallRight":
        if (this.image !== this.sprites.fallRight.image) {
          this.image = this.sprites.fallRight.image
          this.frameCount = this.sprites.fallRight.frameCount
          this.currentFrame = 0
        }
        break
      case "attackLeft":
        if (this.image !== this.sprites.attackLeft.image) {
          this.image = this.sprites.attackLeft.image
          this.frameCount = this.sprites.attackLeft.frameCount
          this.currentFrame = 0
        }
        break
      case "attackRight":
        if (this.image !== this.sprites.attackRight.image) {
          this.image = this.sprites.attackRight.image
          this.frameCount = this.sprites.attackRight.frameCount
          this.currentFrame = 0
        }
        break
      case "getHit":
        if (this.image !== this.sprites.getHit.image) {
          this.image = this.sprites.getHit.image
          this.frameCount = this.sprites.getHit.frameCount
          this.currentFrame = 0
        }
        break
      case "death":
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.frameCount = this.sprites.death.frameCount
          this.currentFrame = 0
        }
        break
    }
  }
}