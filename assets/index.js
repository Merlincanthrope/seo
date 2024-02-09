var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var bg1 = document.getElementById("background1");
var WIDTH = 1000;
var HEIGHT = 800;
var columns = WIDTH/50;
var rows = HEIGHT/50;
canvas.width = WIDTH;
canvas.height = HEIGHT;

/**
* ---- General Game Statistics ----
** Width of Canvas = 1000
** Height of Canvas = 800
** Number of Rows = 16
** Number of Columns = 20
*/

console.log ("Running Game...")

// parsedCollisions = collisionsLevel3.parse2D();
// collisionBlocks = parsedCollisions.createObjectFrom2D();
// seo.collisionBlocks = collisionBlocks

function animate() {
  window.requestAnimationFrame(animate);
  
}

animate();