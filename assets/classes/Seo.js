class Seo {
    constructor({ collisionBlocks = [] }) {
      this.position = {
        x: 50,
        y: 595,
      }
      this.width = 55;
      this.height = 55;
      
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
       ctx.fillStyle = "black";
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
            }
            if (this.velocity.x > 1) {
              
            }
        }
      }
      this.position.y += this.velocity.y;
      this.sides.bottom = this.position.y + this.height;
      if (this.sides.bottom + this.velocity.y < HEIGHT) {
        this.velocity.y += this.gravity;
      } else {
        this.velocity.y = 0;
        this.position.y = HEIGHT - this.height;
      }
    }
  }