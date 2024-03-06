class EnemyEnt {
    constructor({ position, type, name }) {
      this.position = position;
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.width = 50;
      this.height = 50;
  
      // Enemy Data Necessities
      this.type = type;
      this.name = name;
      this.gravity = 1;
      this.color = "red";
      this.health = 50;
  
      this.stunFrames = 0;
      this.preventInput = false;
      this.dead = false;
      this.hit = false;
      this.attacking = false;
  
      this.touchingGrass = false;
      this.playerDirection = {
        x: "left",
        y: "above"
      }
  
      this.lastDirection = "left"
  
      this.groundLeftLogged = false
      this.groundRightLogged = false

    }
  
    getEnemyData() {
      if ((this.type = "ground")) {
        if ((this.name = "testEnemy")) {
          this.width = 70;
          this.height = 100;
          this.gravity = 1;
          this.color = "red";
        }
      }
    }
  
    updateHitboxAndHurtbox() {
      this.hurtbox = {
        groundLeft: {
          x: this.position.x - 55,
          y: this.position.y + 20,
          width: 50,
          height: 30,
        },
        groundRight: {
          x: this.position.x + this.width + 5,
          y: this.position.y + 20,
          width: 50,
          height: 30,
        }
      }
    }
  
    drawHurtbox(box) {
      try {
        if (this.hurtbox[box] === this.hurtbox.groundLeft) {
          ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
          ctx.fillRect(
            this.hurtbox.groundLeft.x,
            this.hurtbox.groundLeft.y,
            this.hurtbox.groundLeft.width,
            this.hurtbox.groundLeft.height
          );
          if (!this.groundLeftLogged) {
            console.log("Drew Hurtbox");
            this.groundLeftLogged = true
          }
        } else
        if (this.hurtbox[box] === this.hurtbox.groundRight) {
          ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
          ctx.fillRect(
            this.hurtbox.groundRight.x,
            this.hurtbox.groundRight.y,
            this.hurtbox.groundRight.width,
            this.hurtbox.groundRight.height
          );
          if (!this.groundRightLogged) {
            console.log("Drew Hurtbox");
            this.groundRightLogged = true
          }
        }
      } catch {
        console.log("Could not draw hurtbox");
      }
    }
  
    // GetDistanceFromPlayer() {
    //   let a = (this.position.x + (this.width/2)) - (player.position.x + (player.width/2))
    //   let b = (this.position.y + (this.height/2)) - (player.position.y + (player.height/2))
  
    //   let distance = Math.sqrt(a*a + b*b)
    //   // console.log(a);
    //   return distance
    // }
  
    getStatus() {
      if (this.stunFrames > 0) {
        this.preventInput = true
        this.stunFrames--
      } else {
        this.preventInput = false
      }
      if (this.dead) {
        this.preventInput = true
      }
    }
  
    checkCollisionWithHurtbox() {
      if (!keys.k.pressed || this.stunFrames > 0) return
      try {
        if (player.lastDirection === "right") {
          if (
            this.position.x + this.width > player.hurtbox.groundRight.x &&
            this.position.x < player.hurtbox.groundRight.x + player.hurtbox.groundRight.width &&
            this.position.y + this.height > player.hurtbox.groundRight.y &&
            this.position.y < player.hurtbox.groundRight.y + player.hurtbox.groundRight.height
          ) {
            console.log("colliding with attack!");
            if (!this.hit) {
              this.getHit(player.lastDirection, 8, "up", 5, 200)
              this.hit = true
              // console.log(this.hit);
            }
          }
        } else if (player.lastDirection === "left") {
          if (
            this.position.x + this.width > player.hurtbox.groundLeft.x &&
            this.position.x < player.hurtbox.groundLeft.x + player.hurtbox.groundLeft.width &&
            this.position.y + this.height > player.hurtbox.groundLeft.y &&
            this.position.y < player.hurtbox.groundLeft.y + player.hurtbox.groundLeft.height
          ) {
            console.log("Colliding with attack!");
            if (!this.hit) {
              this.getHit(player.lastDirection, 8, "up", 5, 200)
            }
          }
        }
      } catch {
        console.log("Couldn't detect Hurtbox");
      }
    }
  
    // decideActions() {
    //   if (this.GetDistanceFromPlayer() < 200) {
    //     this.attack()
    //   }
    // }
  
    attack() {
      if (this.preventInput) return
      if (this.stunFrames > 0) return
      // if (this.GetDistanceFromPlayer() > 200) return
  
      // if player is to the left
      if (player.position.x + player.width < this.position.x) {
        this.drawHurtbox("groundLeft")
        player.checkCollisionWithHurtbox()
      // if player is to the right
      } else if (player.position.x > this.position.x + this.width) {
        this.drawHurtbox("groundRight")
        player.checkCollisionWithHurtbox()
      }
    }
  
    attackPlayer() {
      if (
        player.position.x + player.width > this.position.x &&
        player.position.x < this.position.x + this.width &&
        player.position.y + player.height > this.position.y &&
        player.position.y < this.position.y + this.height
      ) {
        this.attack()
      }
    }
  
    getHit(dx, kx, dy, ky, stun) {
      if (this.stunFrames > 0) return
      if (this.health <= 0) {
        this.dead = true
        this.preventInput = true
      } else {
        this.dead = false
        this.hit = true
        this.stunFrames = stun
        if (dx == "left") {
          this.velocity.x += -kx
        } else if (dx == "right") {
          this.velocity.x += kx
        }
        if (dy == "up") {
          this.velocity.y += -ky
        } else if (dy == "down") {
          this.velocity.y += ky
        }
        this.health -= 10
        setTimeout(() => {
          this.hit = false
          this.preventInput = false
          this.stunFrames = 0
          this.velocity.x = 0
        }, this.stunFrames)
      }
    }
  
    testCanvasCollisionX() {
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
    }
  
    testCanvasCollisionY() {
      // Collision with the ceiling
      if (this.position.y <= 0) {
        this.velocity.y = 0;
        this.position.y = 0.01;
      }
  
      // Collision with the floor
      if (this.position.y + this.height >= canvas.height) {
        this.velocity.y = 0;
        this.position.y = canvas.height - this.height - 0.01;
        this.touchingGrass = true
      }
    }
  
    checkWorldCollisionsAndGravity() {
      // Test horizontal collision with collision blocks
      testEnemy.testCanvasCollisionX();
  
      // Insert gravity
      testEnemy.velocity.y += testEnemy.gravity;
      testEnemy.position.y += testEnemy.velocity.y;
  
      // Test vertical collision with collision blocks
      testEnemy.testCanvasCollisionY();
    }
  
    draw() {
      ctx.save()
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      ctx.restore()
    }
  }