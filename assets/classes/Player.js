class Player {
    constructor() {
      this.position = {
        x: 200,
        y: 650,
      };
      this.width = 60;
      this.height = 85;
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.gravity = 1;
      this.isColliding = {
        x: false,
        y: false,
      };
  
      this.sides = {
        top: this.position.y,
        bottom: this.position.y + this.height,
        left: this.position.x,
        right: this.position.x + this.width,
      };
      this.preventInput = false;
      this.dead = false;
  
      this.color = "green";
      this.stunFrames = 0;
      this.health = 10000;
  
      this.lastDirection = "right"
      this.attacking = false
      this.hit = false
    }
  
    inputHandler(keys) {
      if (this.preventInput) return
      if (keys.a.pressed) {
        this.velocity.x = -4;
        this.lastDirection = "left"
      } else if (keys.d.pressed) {
        this.velocity.x = 4;
        this.lastDirection = "right"
      } else {
        this.velocity.x = 0;
      }
      if (keys.w.pressed) {
        this.jump();
      }
      if (keys.k.pressed && !this.attacking) {
        this.attack()
      }
      if (keys.u.pressed && !testEnemy.attacking) {
        testEnemy.attack()
      }
    }
  
    testPlayerStatus() {
      if (player.stunFrames > 0) {
        player.stunFrames--;
      } else if (player.stunFrames <= 0 && player.dead === false) {
        player.preventInput = false;
      } else if (player.stunFrames <= 0 && player.dead) {
        player.preventInput = true;
        if (player.isColliding.y && player.position.y !== 0)
          player.velocity.x = 0;
      }
    }
  
    testEnemyCollision(ent) {
      if (
        this.position.x + this.width > ent.position.x &&
        this.position.x < ent.position.x + ent.width &&
        this.position.y + this.height > ent.position.y &&
        this.position.y < ent.position.y + ent.height
      ) {
        if (this.position.x + this.width < ent.position.x + ent.width / 2) {
          if (this.stunFrames > 0) return;
          this.getHit();
          this.velocity.x += -7;
          this.velocity.y += -7;
        }
        if (this.position.x > ent.position.x + ent.width / 2) {
          if (this.stunFrames > 0) return;
          this.getHit();
          this.velocity.x += 7;
          this.velocity.y += 7;
        }
      }
    }
  
    checkCollisionWithHurtbox() {
  
      if (keys.u.pressed && testEnemy.lastDirection === "left") {
        if (
          this.position.x <
           testEnemy.hurtbox.groundLeft.x + testEnemy.hurtbox.groundLeft.width &&
          this.position.x + this.width >
           testEnemy.hurtbox.groundLeft.x &&
          this.position.y <
           testEnemy.hurtbox.groundLeft.y + testEnemy.hurtbox.groundLeft.height &&
          this.position.y + this.height >
           testEnemy.hurtbox.groundLeft.y
        ) {
          console.log("Colliding with attack!");
          this.getHit();
          if (!this.hit) {
            this.velocity.x += -1
            this.velocity.y += -15
            this.hit = true
            // console.log(this.hit);
          }
        }
      } else if (keys.u.pressed && testEnemy.lastDirection === "right") {
        if (
          this.position.x <
           testEnemy.hurtbox.groundRight.x + testEnemy.hurtbox.groundRight.width &&
          this.position.x + this.width >
           testEnemy.hurtbox.groundRight.x &&
          this.position.y <
           testEnemy.hurtbox.groundRight.y + testEnemy.hurtbox.groundRight.height &&
          this.position.y + this.height >
           testEnemy.hurtbox.groundRight.y
        ) {
          console.log("Colliding with attack!");
          this.getHit();
          this.hit = true
          this.velocity.x += 1
          this.velocity.y += -15
        }
      }
    }
  
    jump() {
      if (this.dead) return
      if (
        this.isColliding.y && 
        this.position.y !== 0
      ) this.velocity.y += -17;
    }
  
    getHit() {
      if (this.stunFrames > 0) return;
      if (this.health <= 0) {
        this.dead = true;
        console.log("Player Has Died!");
      } else {
        this.health -= 800;
        this.stunFrames = 20;
        this.preventInput = true;
        console.log("Player Got Hit!");
      }
    }
  
    drawHurtbox(box) {
      if (this.hurtbox[box] === this.hurtbox.groundRight) {
        ctx.fillStyle = "rgba(255, 255, 0, 0.5)"
        ctx.fillRect(
          this.hurtbox.groundRight.x,
          this.hurtbox.groundRight.y,
          this.hurtbox.groundRight.width,
          this.hurtbox.groundRight.height,
          )
      }
      if (this.hurtbox[box] === this.hurtbox.groundLeft) {
        ctx.fillStyle = "rgba(255, 255, 0, 0.5)"
        ctx.fillRect(
          this.hurtbox.groundLeft.x,
          this.hurtbox.groundLeft.y,
          this.hurtbox.groundLeft.width,
          this.hurtbox.groundLeft.height
        )
      }
    }
  
    attack() {
      if (this.dead) return
      if (this.stunFrames > 0) return;
      if (this.lastDirection === "right") {
        this.drawHurtbox("groundRight")
        testEnemy.checkCollisionWithHurtbox()
      }
      if (this.lastDirection === "left") {
        this.drawHurtbox("groundLeft")
        testEnemy.checkCollisionWithHurtbox()
      }
    }
  
    updateHitboxAndHurtbox() {
      this.hurtbox = {
        groundRight: {
          x: this.position.x + this.width + 3,
          y: this.position.y + 5,
          width: 60,
          height: 50,
        },
        groundLeft: {
          x: this.position.x - 63,
          y: this.position.y + 5,
          width: 60,
          height: 50,
        },
      }
    }
  
    testCanvasCollisionX() {
      if (
        this.position.x <= 0.01 ||
        this.position.x + this.width >= canvas.width - 0.01
      ) {
        this.isColliding.x = true;
  
        // Collision with the left wall
        if (this.position.x <= 0) {
          this.velocity.x = 0;
          this.position.x = 0.01;
        }
  
        // Collision with the right wall
        if (this.position.x + this.width >= canvas.width) {
          this.velocity.x = 0;
          this.position.x = canvas.width - this.width - 0.01;
        }
      } else this.isColliding.x = false;
    }
  
    testCanvasCollisionY() {
      if (
        this.position.y <= 0.01 ||
        this.position.y + this.height >= canvas.height - 0.01
      ) {
        this.isColliding.y = true;
  
        // Collision with the ceiling
        if (this.position.y <= 0) {
          this.velocity.y = 0;
          this.position.y = 0.01;
        }
  
        // Collision with the floor
        if (this.position.y + this.height >= canvas.height) {
          this.velocity.y = 0;
          this.position.y = canvas.height - this.height - 0.01;
        }
      } else this.isColliding.y = false;
    }
  
    draw() {
      ctx.save()
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      ctx.restore()
    }
  }