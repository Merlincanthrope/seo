var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var bg1 = document.getElementById("background1");
var WIDTH = 800;
var HEIGHT = 650;
var columns = WIDTH/50;
var rows = HEIGHT/50;
canvas.width = 800;
canvas.height = 650;

console.log ("Running Game...")

let parsedCollisions
let collisionBlocks
let background
let doors
let seo
// let enemies


let level = 1
let levels = {
  1: {
    init: () => {
      seo = new Seo ({
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
          lightSwingLeft: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle-inverted.png"
          },
          lightSwingRight: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle.png"
          },
          HeavySwingRight: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle.png"
          },
          lightSwingLeft: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle-inverted.png"
          },
          enterDoor: {
            frameCount: 8,
            frameBuffer: 7,
            loop: false,
            imageSrc: "assets/images/seo-idle.png",
            onComplete: () => {
              onComplete()
            }
          }
        }
      });

      enemies = [
        new Enemy({
          position: {
            x: 450,
            y: 475,
          },
          velocity: {
            x: 0,
            y: 0,
          },
          imageSrc: "assets/images/seo-idle.png",
          size: {
            width: 50,
            height: 65,
          },
          frameCount: 8,
          sprites: {
            idleLeft: {
              imageSrc: "assets/images/seo-idle-inverted.png",
              frameCount: 8,
            },
            idleRight: {
              imageSrc: "assets/images/seo-idle.png",
              frameCount: 8,
            },
            moveLeft: {
              imageSrc: "assets/images/seo-idle-inverted.png",
              frameCount: 8,
            },
            moveRight: {
              imageSrc: "assets/images/seo-idle.png",
              frameCount: 8,
            },
            jumpLeft: {
              imageSrc: "assets/images/seo-idle-inverted.png",
              frameCount: 8,
            },
            jumpRight: {
              imageSrc: "assets/images/seo-idle.png",
              frameCount: 8,
            },
            fallLeft: {
              imageSrc: "assets/images/seo-idle-inverted.png",
              frameCount: 8,
            },
            fallRight: {
              imageSrc: "assets/images/seo-idle.png",
              frameCount: 8,
            },
            attackLeft: {
              imageSrc: "assets/images/seo-idle-inverted.png",
              frameCount: 8,
            },
            attackRight: {
              imageSrc: "assets/images/seo-idle.png",
              frameCount: 8,
            },
            death: {
              imageSrc: "assets/images/seo-idle-inverted.png",
              frameCount: 8,
            }
          },
        })
      ];

      parsedCollisions = collisionsLevel1.parse2D();
      collisionBlocks = parsedCollisions.createObjectFrom2D();
      seo.collisionBlocks = collisionBlocks

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: 'assets/images/background1.png',
        frameCount: 1,
        frameBuffer: 5,
      });
      doors = [
        new Sprite({
          position: {
            x: 525,
            y: 450,
          },
          imageSrc: "assets/images/seo-idle-inverted.png",
          frameCount: 3,
          frameBuffer: 10,
          loop: false,
          autoplay: false,
        }),
      ];
    }
  },
  2: {
    init: () => {
      seo = new Seo ({
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
          lightSwingLeft: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle-inverted.png"
          },
          lightSwingRight: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle.png"
          },
          HeavySwingRight: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle.png"
          },
          lightSwingLeft: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle-inverted.png"
          },
          enterDoor: {
            frameCount: 8,
            frameBuffer: 7,
            loop: false,
            imageSrc: "assets/images/seo-idle.png",
            onComplete: () => {
              onComplete()
            }
          }
        }
      });

      parsedCollisions = collisionsLevel2.parse2D();
      collisionBlocks = parsedCollisions.createObjectFrom2D();
      seo.collisionBlocks = collisionBlocks
      seo.position.x = 150
      seo.position.y = 300

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: 'assets/images/background1.png',
        frameCount: 1,
        frameBuffer: 5,
      });
      doors = [
        new Sprite({
          position: {
            x: 610,
            y: 250,
          },
          imageSrc: "assets/images/test-door-seo.png",
          frameCount: 3,
          frameBuffer: 10,
          loop: false,
          autoplay: false,
        }),
      ];
    }
  },
  3: {
    init: () => {
      seo = new Seo ({
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
          lightSwingLeft: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle-inverted.png"
          },
          lightSwingRight: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle.png"
          },
          HeavySwingRight: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle.png"
          },
          lightSwingLeft: {
            frameCount: 8,
            frameBuffer: 5,
            loop: false,
            imageSrc: "assets/images/seo-idle-inverted.png"
          },
          enterDoor: {
            frameCount: 8,
            frameBuffer: 7,
            loop: false,
            imageSrc: "assets/images/seo-idle.png",
            onComplete: () => {
              onComplete()
            }
          }
        }
      });

      parsedCollisions = collisionsLevel3.parse2D();
      collisionBlocks = parsedCollisions.createObjectFrom2D();
      seo.collisionBlocks = collisionBlocks
      seo.position.x = 60

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: 'assets/images/background1.png',
        frameCount: 1,
        frameBuffer: 5,
      });
      doors = [
        new Sprite({
          position: {
            x: 512,
            y: 450,
          },
          imageSrc: "assets/images/test-door-seo.png",
          frameCount: 3,
          frameBuffer: 10,
          loop: false,
          autoplay: false,
        }),
      ];
    }
  },
}
console.log("Created Entities")


const attacks = {
  lightAttack: {
    right: () => {

      // Hitbox Visualized Light Right
      ctx.fillStyle = "yellow"
      ctx.fillRect(
        seo.hitbox.position.x + seo.hitbox.width + 10,
        seo.hitbox.position.y + seo.hitbox.height - 10,
        20,
        20
      )
    },
  },
  heavyAttack: {
    right: () => {


      let attackBoxes = {
        attackbox1: {
          x: seo.hitbox.position.x + seo.hitbox.width - 10,
          y: seo.hitbox.position.y - 20,
          width: 55,
          height: 12.5,
        },
        attackbox2: {
          x: seo.hitbox.position.x + seo.hitbox.width + 10,
          y: seo.hitbox.position.y + seo.hitbox.height/2 - 40,
          width: 60,
          height: 20,
        },
        attackbox3: {
          x: seo.hitbox.position.x + seo.hitbox.width + 15,
          y: seo.hitbox.position.y + seo.hitbox.height/2 - 20,
          width: 80,
          height: 30,
        },
        attackbox4: {
          x: seo.hitbox.position.x + seo.hitbox.width + 10,
          y: seo.hitbox.position.y + seo.hitbox.height/2 + 10,
          width: 50,
          height: 10,
        },
      }

      // Hitbox Visualized Heavy Right
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)"
      
      // Attack Box 1
      ctx.fillRect(
        attackBoxes.attackbox1.x,
        attackBoxes.attackbox1.y,
        attackBoxes.attackbox1.width,
        attackBoxes.attackbox1.height,
      )
      // Attack Box 2
      ctx.fillRect(
        attackBoxes.attackbox2.x,
        attackBoxes.attackbox2.y,
        attackBoxes.attackbox2.width,
        attackBoxes.attackbox2.height,
      )
      // Attack Box 3
      ctx.fillRect(
        attackBoxes.attackbox3.x,
        attackBoxes.attackbox3.y,
        attackBoxes.attackbox3.width,
        attackBoxes.attackbox3.height,
      )
      // Attack Box 4
      ctx.fillRect(
        attackBoxes.attackbox4.x,
        attackBoxes.attackbox4.y,
        attackBoxes.attackbox4.width,
        attackBoxes.attackbox4.height,
      )
    },
    left: () => {

      let attackBoxes = {
        attackbox1: {
          x: seo.hitbox.position.x - 47,
          y: seo.hitbox.position.y - 20,
          width: 55,
          height: 12.5,
        },
        attackbox2: {
          x: seo.hitbox.position.x - 72,
          y: seo.hitbox.position.y + seo.hitbox.height/2 - 40,
          width: 60,
          height: 20,
        },
        attackbox3: {
          x: seo.hitbox.position.x - 97,
          y: seo.hitbox.position.y + seo.hitbox.height/2 - 20,
          width: 80,
          height: 30,
        },
        attackbox4: {
          x: seo.hitbox.position.x - 62,
          y: seo.hitbox.position.y + seo.hitbox.height/2 + 10,
          width: 50,
          height: 10,
        },
      }

      //Hitbox Visualized Heavy Left
      ctx.fillStyle = "rgba(255, 255, 0, 0.5)"
      ctx.fillRect(
        attackBoxes.attackbox1.x,
        attackBoxes.attackbox1.y,
        attackBoxes.attackbox1.width,
        attackBoxes.attackbox1.height,
      )
      ctx.fillRect(
        attackBoxes.attackbox2.x,
        attackBoxes.attackbox2.y,
        attackBoxes.attackbox2.width,
        attackBoxes.attackbox2.height,
      )
      ctx.fillRect(
        attackBoxes.attackbox3.x,
        attackBoxes.attackbox3.y,
        attackBoxes.attackbox3.width,
        attackBoxes.attackbox3.height,
      )
      ctx.fillRect(
        attackBoxes.attackbox4.x,
        attackBoxes.attackbox4.y,
        attackBoxes.attackbox4.width,
        attackBoxes.attackbox4.height,
      )
    }
  },
}

const overlay = {
  opacity: 0,
}

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
  },
  j: {
    pressed: false
  },
  k: {
    pressed: false
  },
  p: {
    pressed: false
  }
};

function getStats() {
  let statSheet = {
    width: seo.hitbox.width,
    height: seo.hitbox.height,
    health: undefined,
    faith: undefined,
    abilities: {
      lightAttack: true,
      heavyAttack: true,
      doubleJump: false,
      holyDash: false,
    },
  }
  for (var key in statSheet) {
    if (statSheet[key] === statSheet.abilities) {
     for (var key in statSheet.abilities) {
       if (!statSheet.abilities[key]) {
          statSheet.abilities[key] = undefined
        }
      }
    } else {
      if (statSheet[key] === statSheet.width) {
        statSheet[key] = seo.width
      }
      if (statSheet[key] === statSheet.height) {
        statSheet[key] = seo.height
      }  
    }
  }
  console.log(statSheet)
}

function animate() {
  window.requestAnimationFrame(animate);
  
  background.draw();
  collisionBlocks.forEach((collisionBlocks) => {
    collisionBlocks.draw()
  })

  enemies.forEach((enemy) => {
    enemy.draw()
  })

  doors.forEach((door) => {
    door.draw()

    // Door Hitbox
    /*
    ctx.fillStyle = "rgba(0, 225, 0, 0.5)"
    ctx.fillRect(door.position.x, door.position.y, door.width, door.height)
    */
  })

  seo.inputHandler(keys);

  seo.draw();
  seo.update();

  ctx.save();
  ctx.globalAlpha = overlay.opacity;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}

levels[level].init();
console.log("Got Level Data")
animate();