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

const seo = new Seo ({
  collisionBlocks,
  imageSrc: 'assets/images/seo-idle.png',
  frameCount: 8,
  frameBuffer: 7,
  animations: {
    idleLeft: {
      frameCount: 8,
      frameBuffer: 7,
      loop: true,
      imageSrc: "assets/images/seo-idle-inverted.png",
    },
    idleRight: {
      frameCount: 8,
      frameBuffer: 7,
      loop: true,
      imageSrc: "assets/images/seo-idle.png",
    },
    moveLeft: {
      frameCount: 8,
      frameBuffer: 7,
      loop: true,
      imageSrc: "assets/images/seo-idle-inverted.png",
    },
    moveRight: {
      frameCount: 8,
      frameBuffer: 7,
      loop: true,
      imageSrc: "assets/images/seo-idle.png",
    },
    enterDoor: {
      frameCount: 8,
      frameBuffer: 7,
      loop: false,
      imageSrc: "assets/images/seo-idle.png",
      onComplete: () => {
        console.log("Animation Complete")
        gsap.to(overlay, {
          duration: 1,
          opacity: 1,
        });
        console.log(overlay.opacity)
      }
    }
  }
});
const background1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: 'assets/images/background1.png',
  frameCount: 1,
  frameBuffer: 5,
});

const overlay = {
  opacity: 0,
}

// const overlay = new Sprite({
//   position: {
//     x: 0,
//     y: 0,
//   },
//   imageSrc: 'assets/images/overlay.png',
//   frameCount: 4,
//   frameBuffer: 5,
//   loop: false,
//   autoplay: false,
// })

const doors = [
  new Sprite({
    position: {
      x: 400,
      y: 450,
    },
    imageSrc: "assets/images/test-door-seo.png",
    frameCount: 3,
    frameBuffer: 10,
    loop: false,
    autoplay: false,
  }),
];

var keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  e: {
    pressed: false
  }
};

function animate() {
  window.requestAnimationFrame(animate);
  
  background1.draw();
  collisionBlocks.forEach((collisionBlocks) => {
    collisionBlocks.draw()
  })

  doors.forEach((door) => {
    door.draw()

    // ctx.fillStyle = "rgba(0, 225, 0, 0.5)"
    // ctx.fillRect(door.position.x, door.position.y, door.width, door.height)
  })

  // overlay.draw();

  seo.inputHandler(keys);

  seo.draw();
  seo.update();

  ctx.save();
  ctx.globalAlpha = overlay.opacity;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
animate();