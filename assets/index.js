var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var bg1 = document.getElementById("background1");
var WIDTH = 1200;
var HEIGHT = 800;
var columns = WIDTH / 50;
var rows = HEIGHT / 50;
canvas.width = WIDTH;
canvas.height = HEIGHT;

/**
 * ---- General Game Statistics ----
 ** Width of Canvas = 1000
 ** Height of Canvas = 800
 ** Number of Rows = 16
 ** Number of Columns = 20
 */

console.log("Running Game...");

const keys = {
  d: {pressed: false},
  a: {pressed: false},
  w: {pressed: false},
  k: {pressed: false}
};

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
  }

  inputHandler(keys) {
    if (this.preventInput || this.dead) return;
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

  jump() {
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
    if (this.stunFrames > 0) return;
    if (this.lastDirection === "right") {
      this.drawHurtbox("groundRight")
    }
    if (this.lastDirection === "left") {
      this.drawHurtbox("groundLeft")
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

    this.touchingGrass = false;
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
    if (this.stunFrames > 0) return
    if (!keys.k.pressed) return
    if (player.lastDirection === "right") {
      if (
        this.position.x + this.width > player.hurtbox.groundRight.x &&
        this.position.x < player.hurtbox.groundRight.x + player.hurtbox.groundRight.width &&
        this.position.y + this.height > player.hurtbox.groundRight.y &&
        this.position.y < player.hurtbox.groundRight.y + player.hurtbox.groundRight.height
      ) {
        console.log("colliding with attack!");
        this.getHit()
        this.hit = true
        this.velocity.x += 10
        this.velocity.y += -7
      }
    }
  }

  getHit() {
    if (this.stunFrames > 0) return
    if (this.health <= 0) {
      this.dead = true
      this.preventInput = true
    } else {
      this.dead = false
      this.stunFrames = 20
      this.health -= 10
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

  draw() {
    ctx.save()
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.restore()
  }
}

let player, testEnemy;

let level = 1;
const levelEntData = {
  1: {
    init: () => {
      player = new Player();

      testEnemy = new EnemyEnt({
        position: {
          x: 600,
          y: 650,
        },
        type: "ground",
        name: "testEnemy",
      });
    },
  },
};

// const parsedCollisions = collisionsLevel1.parse2D();
// const collisionBlocks = parsedCollisions.createObjectFrom2D();

function animate() {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Player Animate
  player.updateHitboxAndHurtbox()
  player.position.x += player.velocity.x;
  player.draw();
  player.inputHandler(keys);
  player.testCanvasCollisionX();

  // Player Gravity Function
  player.velocity.y += player.gravity;
  player.position.y += player.velocity.y;

  player.testCanvasCollisionY();
  player.testPlayerStatus();

  // Test Enemy Animate
  testEnemy.getEnemyData();
  testEnemy.getStatus();
  testEnemy.position.x += testEnemy.velocity.x;
  testEnemy.draw();

  testEnemy.checkCollisionWithHurtbox();

  testEnemy.testCanvasCollisionX();

  // Test Enemy Gravity Function
  testEnemy.velocity.y += testEnemy.gravity;
  testEnemy.position.y += testEnemy.velocity.y;

  testEnemy.testCanvasCollisionY();

  player.testEnemyCollision(testEnemy);
}

try {
  levelEntData[level].init();
  console.log("Got Level Data...");
} catch {
  console.error("Couldn't get level's init() entity data");
}

try {
  animate();
} catch {
  console.error("Error while trying to animate");
}
