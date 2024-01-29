var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var WIDTH = 800;
var HEIGHT = 650;
canvas.width = 800;
canvas.height = 650;

class Sprite {
  contructor({ 
    position,
    imageSrc,
  }) {
    this.position.x = position.x
    this.image = new Image()
    this.image.onload = () => {
      this.loaded = true
    }
    this.image.src = imageSrc;
    this.loaded = false
  }
  
  draw() {
    if (this.loaded) return;
    ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}

const seo = new Seo();
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./images/background1.png",
});

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
  background.draw();
  
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