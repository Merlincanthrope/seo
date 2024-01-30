class Seo {
    constructor({ collisionBlocks = [] }) {
      this.position = {
        x: 200,
        y: 300,
      }
      this.width = 50;
      this.height = 50;
      
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
      
    draw() {
       ctx.fillStyle = "purple";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
      
    update() {
      this.position.x += this.velocity.x;
      // Check for horizontal collisions
      for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlock = this.collisionBlocks[i]
        // if colliding
        if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
          this.position.x + this.width >= collisionBlock.position.x &&
          this.position.y + this.height >= collisionBlock.position.y &&
          this.position.y <= collisionBlock.position.y + collisionBlock.height) {
            // collision on horizontal axis on left side of Seo
            if (this.velocity.x < -1) {
              this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
              break
            }
            // collision on horizontal axis on right side of Seo
            if (this.velocity.x > 1) {
              this.position.x = collisionBlock.position.x - this.width - 0.01
              break
            }
        }
      }

      // insert gravity to collisions
      this.velocity.y += this.gravity;
      this.position.y += this.velocity.y;

      // Check for vertical collisions
      for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlock = this.collisionBlocks[i]
        // if colliding
        if (this.position.x <= collisionBlock.position.x + collisionBlock.width &&
          this.position.x + this.width >= collisionBlock.position.x &&
          this.position.y + this.height >= collisionBlock.position.y &&
          this.position.y <= collisionBlock.position.y + collisionBlock.height) {
            // collision on vertical axis on top side of Seo
            if (this.velocity.y < 0) {
              this.velocity.y = 0
              this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
              break
            }
            // collision on vertical axis on bottom side of Seo
            if (this.velocity.y > 0) {
              this.velocity.y = 0
              this.position.y = collisionBlock.position.y - this.height - 0.01
              break
            }
        }
      }
    }
  }