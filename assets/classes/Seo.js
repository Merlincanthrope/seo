class Seo {
    constructor() {
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
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.sides.bottom = this.position.y + this.height;
      if (this.sides.bottom + this.velocity.y < HEIGHT) {
        this.velocity.y += this.gravity;
      } else {
        this.velocity.y = 0;
        this.position.y = HEIGHT - this.height;
      }
    }
  }