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
  k: {pressed: false},
  u: {pressed: false},
};

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
  testEnemy.updateHitboxAndHurtbox();
  testEnemy.getStatus();
  testEnemy.position.x += testEnemy.velocity.x;
  testEnemy.draw();

  // testEnemy.decideActions();

  testEnemy.checkIfPlayerIsAttackable()

  player.checkCollisionWithHurtbox();

  testEnemy.checkWorldCollisionsAndGravity()

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
