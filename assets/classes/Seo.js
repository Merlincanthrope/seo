class Seo extends Sprite {
    constructor({ collisionBlocks = [], imageSrc, frameCount, animations, loop }) {
      super({ imageSrc, frameCount, animations, loop })
      this.position = {
        x: 200,
        y: 400,
      }
      this.width = 100;
      this.height = 100;
      
      this.sides = {
        bottom: this.position.y + this.height,
        top: this.position.y,
        left: this.position.x,
        right: this.position.x + this.width,
      }
      this.gravity = 1;

      this.collisionBlocks = collisionBlocks
      
      this.velocity = {
        x: 0,
        y: 0,
      }
    }

    inputHandler(keys) {
      if (this.preventInput) return
      this.velocity.x = 0;
      if (keys.d.pressed) {
        this.switchSprite('moveRight')
        this.velocity.x = 4;
        this.lastDirection = 'right'
      } else if (keys.a.pressed) {
        this.switchSprite('moveLeft')
        this.velocity.x = -4;
        this.lastDirection = 'left'
      } else {
        if (this.lastDirection === 'left') {
          this.switchSprite('idleLeft')
        } else if (this.lastDirection === 'right') {
          this.switchSprite('idleRight')
        }
      }
    }

    updateHitbox() {
      this.hitbox = {
        position: {
          x: this.position.x + 22,
          y: this.position.y + 22,
        },
        width: 50,
        height: 65,
      }
    }

    checkHorizontalCollision() {
      // Check for horizontal collisions
      for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlock = this.collisionBlocks[i]
        // if colliding
        if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
            this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
          this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
          this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
            // collision on horizontal axis on left side of Seo
            if (this.velocity.x < -1) {
              const offset =
               this.hitbox.position.x - this.position.x
              this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
              break
            }
            // collision on horizontal axis on right side of Seo
            if (this.velocity.x > 1) {
              const offset =
               this.hitbox.position.x - this.position.x + this.hitbox.width
              this.position.x = collisionBlock.position.x - offset - 0.01
              break
            }
        }
      }
    }

    insertGravity() {
       // insert gravity to collisions
       this.velocity.y += this.gravity;
       this.position.y += this.velocity.y;
    }

    checkVerticalCollision() {
      // Check for vertical collisions
      for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlock = this.collisionBlocks[i]
        // if colliding
        if (this.hitbox.position.x <=
           collisionBlock.position.x + collisionBlock.width &&
          this.hitbox.position.x + this.hitbox.width >=
           collisionBlock.position.x &&
          this.hitbox.position.y + this.hitbox.height >=
           collisionBlock.position.y &&
          this.hitbox.position.y <=
           collisionBlock.position.y + collisionBlock.height) {
            // collision on vertical axis on top side of Seo
            if (this.velocity.y < 0) {
              this.velocity.y = 0;
              const offset = this.hitbox.position.y - this.position.y;
              this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
              break;
            }
            // collision on vertical axis on bottom side of Seo
            if (this.velocity.y > 0) {
              this.velocity.y = 0;
              const offset =
               this.hitbox.position.y - this.position.y + this.hitbox.height;
              this.position.y = collisionBlock.position.y - offset - 0.01;
              break;
            }
        }
      }
    }

    switchSprite(name) {
      if (this.animations.image) {
        console.log(this.animations.image)
      if (this.image === this.animations.image) return
      this.currentFrame = 0;
      this.image = this.animations[name].image;
      this.frameCount = this.animations[name].frameCount;
      this.frameBuffer = this.animations[name].frameBuffer;
      this.loop = this.animations[name].loop
      this.currentAnimation = this.animations[name];
    }
  }
      
    update() {
      this.position.x += this.velocity.x;
      this.updateHitbox();
      this.checkHorizontalCollision();
      this.insertGravity();
      this.updateHitbox();

      ctx.fillStyle = "rgba(200, 0, 200, 0.5)"
      ctx.fillRect(
        this.hitbox.position.x,
        this.hitbox.position.y,
        this.hitbox.width,
        this.hitbox.height,
      )
      this.checkVerticalCollision();
    }
  }