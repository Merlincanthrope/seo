var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var WIDTH = 800;
var HEIGHT = 650;
canvas.width = 800;
canvas.height = 650;

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
var seo = new Seo();

class Sprite {
  contructor({ position, imageSrc}) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y)
  }
}

var background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: "assets/images/background1.png"
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