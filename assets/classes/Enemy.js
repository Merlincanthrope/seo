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
    collisionBlocks
  }) {
    super({ position, imageSrc, frameCount })

    this.collisionBlocks = collisionBlocks

    this.position = position
    this.size = size
    this.velocity = velocity
    this.lastInput = "right"
    this.color = color
    this.isAttacking = false
    this.health = health
    
    this.currentFrame = 0
    this.elapsedFrames = 0
    this.frameBuffer = 5
    this.sprites = sprites
    this.isDead = false

    this.gravity = 1

    for (let key in this.sprites) {
      this.sprites[key].image = new Image()
      this.sprites[key].image.src = this.sprites[key].imageSrc
    }
  }

  testInputs(keys) {
    this.velocity.x = 0
    if (keys.t.pressed) {
      this.switchSprites("moveLeft")
      this.velocity.x = -4
      this.lastInput = "left"
    } else if (keys.u.pressed) {
      this.switchSprites("moveRight")
      this.velocity.x = 4
      this.lastInput = "right"
    } else {
      if (this.lastInput === "left") {
        this.switchSprites("idleLeft")
      } else if (this.lastInput === "right") {
        this.switchSprites("idleRight")
      }
    }
  }

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 22,
        y: this.position.y + 22
      },
      width: this.size.width,
      height: this.size.height,
    }
  }

  update() {
    this.draw()
    if (!this.isDead) this.updateFrames()

    this.updateHitbox()
    this.checkHorizontalCollision()
    this.insertGravity()    
    this.updateHitbox()


    // Enemy Hitbox
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
    ctx.fillRect(
      this.hitbox.position.x,
      this.hitbox.position.y,
      this.hitbox.width,
      this.hitbox.height
    )

    this.checkVerticalCollision()
  }

  insertGravity() {
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
  }
  
  checkHorizontalCollision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if (this.hitbox.position.x <=
        collisionBlock.position.x + collisionBlock.width &&
       this.hitbox.position.x + this.hitbox.width >=
        collisionBlock.position.x &&
       this.hitbox.position.y + this.hitbox.height >=
        collisionBlock.position.y &&
       this.hitbox.position.y <=
       collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.x < -1) {
          const offset = this.hitbox.position.x - this.position.x
          this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01          

          break
        }

        if (this.velocity.x > 1) {
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
          this.position.x = collisionBlock.position.x - offset - 0.01

          break
        }
      }
    }
  }

  checkVerticalCollision() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if (this.hitbox.position.x <=
        collisionBlock.position.x + collisionBlock.width &&
       this.hitbox.position.x + this.hitbox.width >=
        collisionBlock.position.x &&
       this.hitbox.position.y + this.hitbox.height >=
        collisionBlock.position.y &&
       this.hitbox.position.y <=
       collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0
          const offset = this.hitbox.position.y - this.position.y
          this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01          

          break
        }

        if (this.velocity.y > 0) {
          this.velocity.y = 0
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
          this.position.y = collisionBlock.position.y - offset - 0.01

          break
        }
      }
    }
  }

  switchSprites(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.currentFrame === this.sprites.death.frameCount - 1) {
        this.isDead = true
        console.log("enemy down. isDead = " + this.isDead)
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