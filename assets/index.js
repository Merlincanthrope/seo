var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var bg1 = document.getElementById("background1");
var WIDTH = 800;
var HEIGHT = 650;
var columns = WIDTH/50;
var rows = HEIGHT/50;
canvas.width = 800;
canvas.height = 650;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectFrom2D();

const seo = new Seo({
  collisionBlocks,
});
const background1 = new Sprite(0, 0, 'assets/images/background1.png');

var keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  d: {
    pressed: false
  }
};


function animate() {
  window.requestAnimationFrame(animate);
  
  background1.draw();
  collisionBlocks.forEach((collisionBlocks) => {
    collisionBlocks.draw()
  })
  
  seo.velocity.x = 0;
  if (keys.d.pressed) {
    seo.velocity.x = 4;
  } else if (keys.a.pressed) {
    seo.velocity.x = -4;
  }
  
  seo.draw();
  seo.update();
}
animate();

window.addEventListener("keydown", (event) => {
  switch(event.key) {
    case "a":
      keys.a.pressed = true
      
    break;
    case "d":
      keys.d.pressed = true
      
    break;
    case "w":
      if (seo.velocity.y === 0) seo.velocity.y = -15;
      
    break;
  }
})

window.addEventListener("keyup", (event) => {
  switch(event.key) {
    case "a":
      keys.a.pressed = false;
      
    break;
    case "d":
      keys.d.pressed = false;
      
    break;
  }
});