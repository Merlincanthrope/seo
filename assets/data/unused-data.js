// class Enemy extends Sprite {
//   constructor({ position, offset = { x: 22, y: 22}, frameCount, frameBuffer, animations, loop, color }) {
//     super({ position, imageSrc, frameCount, frameBuffer, animations, loop})
//     this.position = position

//     this.frameCount = frameCount

//     this.velocity = {
//       x: 0,
//       y: 0,
//     }

//     this.color = color
//     this.offset = offset
//     this.gravity = 1;
//   }

//   drawHitbox() {
//     this.hitbox = {
//       position: {
//         x: this.position.x + this.offset.x,
//         y: this.position.y + this.offset.y,
//       },
//       width: 50,
//       height: 65,
//     }
//   }

//   draw() {
//     ctx.fillStyle = this.color
//     ctx.fillRect(
//       this.position.x,
//       this.position.y,
//       this.width,
//       this.height
//     )
//   }

//   checkHorizontalCollision() {
//     for (let i = 0; i < this.collisionBlocks.length; i++) {
//       const collisionBlock = this.collisionBlocks[i]
//       // if colliding
//       if (this.hitbox.position.x <=
//          collisionBlock.position.x + collisionBlock.width &&
//         this.hitbox.position.x + this.hitbox.width >=
//          collisionBlock.position.x &&
//         this.hitbox.position.y + this.hitbox.height >=
//          collisionBlock.position.y &&
//         this.hitbox.position.y <=
//          collisionBlock.position.y + collisionBlock.height) {
        
//         if (this.velocity.x < 0) {
//           this.velocity.x = 0
//           this.position.x = collisionBlock.position.x + collisionBlock.width - this.offset.x + 0.01
//           break
//         }
//         if (this.velocity.x > 0) {
//           this.velocity.x = 0
//           this.position.x = collisionBlock.position.x - this.offset - 0.01
//           break
//         }
//       }
//     }
//   }

//   checkVerticalCollisions() {
//     for (let i = 0; i < this.collisionBlocks.length; i++) {
//       const collisionBlock = this.collisionBlocks[i]
//       // if colliding
//       if (this.hitbox.position.x <=
//          collisionBlock.position.x + collisionBlock.width &&
//         this.hitbox.position.x + this.hitbox.width >=
//          collisionBlock.position.x &&
//         this.hitbox.position.y + this.hitbox.height >=
//          collisionBlock.position.y &&
//         this.hitbox.position.y <=
//          collisionBlock.position.y + collisionBlock.height) {

//           if (this.velocity.y < 0) {
//             this.velocity.y = 0
//             this.position.y = collisionBlock.position.y + collisionBlock.height - this.offset + 0.01
//             break
//           }
//           if (this.velocity.y > 0) {
//             this.velocity.y = 0
//             this.position.y = collisionBlock.position.y - this.offset - 0.01
//             break
//           }
//       }
//     }
//   }

//   switchSprite(name) {
//     if (this.image === this.animations[name].image) return
//     this.currentFrame = 0;
//     this.image = this.animations[name].image;
//     this.frameCount = this.animations[name].frameCount;
//     this.frameBuffer = this.animations[name].frameBuffer;
//     this.loop = this.animations[name].loop;
//     this.currentAnimation = this.animations[name];
//   }

//   update() {
//     this.position.x += this.velocity.x
//     this.drawHitbox()
//     this.checkHorizontalCollision()
    
//     this.velocity.y += this.gravity
//     this.position.y += this.velocity.y

//     this.drawHitbox()
//     this.checkVerticalCollisions()
//   }
// }

    //   super({ imageSrc, frameCount, animations, loop })
    //     this.position = {
    //       x: 450,
    //       y: 475,
    //     }
    //     this.width = 100
    //     this.height = 100

    //     this.sides = {
    //         left: this.position.x,
    //         right: this.position.x + this.width,
    //         top: this.position.y,
    //         bottom: this.position.y + this.height
    //     }
    //     this.gravity = 1

    //     this.collisionBlocks = collisionBlocks

    //     this.velocity = {
    //       x: 0,
    //       y: 0,
    //   }
    //   this.currentAnimationLogged = false
    // }

    // updateHitbox() {
    //     this.hitbox = {
    //         position: {
    //             x: this.position.x + 22,
    //             y: this.position.y + 22,
    //         },
    //         width: 50,
    //         height: 65,
    //     }
    // }

    // checkHorizontalCollision() {
    //     // Check for horizontal collisions
    //     for (let i = 0; i < this.collisionBlocks.length; i++) {
    //       const collisionBlock = this.collisionBlocks[i]
    //       // if colliding
    //       if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
    //           this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
    //         this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
    //         this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
    //           // collision on horizontal axis on left side of player
    //           if (this.velocity.x < -1) {
    //             const offset =
    //              this.hitbox.position.x - this.position.x
    //             this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
    //             break
    //           }
    //           // collision on horizontal axis on right side of player
    //           if (this.velocity.x > 1) {
    //             const offset =
    //              this.hitbox.position.x - this.position.x + this.hitbox.width
    //             this.position.x = collisionBlock.position.x - offset - 0.01
    //             break
    //           }
    //       }
    //     }
    //   }
  
    //   insertGravity() {
    //      // insert gravity to collisions
    //      this.velocity.y += this.gravity;
    //      this.position.y += this.velocity.y;
    //   }
  
    //   checkVerticalCollision() {
    //     // Check for vertical collisions
    //     for (let i = 0; i < this.collisionBlocks.length; i++) {
    //       const collisionBlock = this.collisionBlocks[i]
    //       // if colliding
    //       if (this.hitbox.position.x <=
    //          collisionBlock.position.x + collisionBlock.width &&
    //         this.hitbox.position.x + this.hitbox.width >=
    //          collisionBlock.position.x &&
    //         this.hitbox.position.y + this.hitbox.height >=
    //          collisionBlock.position.y &&
    //         this.hitbox.position.y <=
    //          collisionBlock.position.y + collisionBlock.height) {
    //           // collision on vertical axis on top side of player
    //           if (this.velocity.y < 0) {
    //             this.velocity.y = 0;
    //             const offset = this.hitbox.position.y - this.position.y;
    //             this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
    //             break;
    //           }
    //           // collision on vertical axis on bottom side of player
    //           if (this.velocity.y > 0) {
    //             this.velocity.y = 0;
    //             const offset =
    //              this.hitbox.position.y - this.position.y + this.hitbox.height;
    //             this.position.y = collisionBlock.position.y - offset - 0.01;
    //             break;
    //           }
    //       }
    //     }
    //   }

    //   switchSprite(name) {
    //     if (this.image === this.animations[name].image) return
    //     this.currentFrame = 0;
    //     this.image = this.animations[name].image;
    //     this.frameCount = this.animations[name].frameCount;
    //     this.frameBuffer = this.animations[name].frameBuffer;
    //     this.loop = this.animations[name].loop;
    //     this.currentAnimation = this.animations[name];
    //   }

    //   update() {
    //     this.position.x += this.velocity.x;
    //     this.updateHitbox();
    //     this.checkHorizontalCollision();
    //     this.insertGravity();
    //     this.updateHitbox();
  
    //     // Enemy Hitbox
    //     ctx.fillStyle = "rgba(200, 0, 200, 0.5)"
    //     ctx.fillRect(
    //       this.hitbox.position.x,
    //       this.hitbox.position.y,
    //       this.hitbox.width,
    //       this.hitbox.height,
    //     )
    //     this.checkVerticalCollision();
    //   }


    // enemies.forEach((enemy) => {
  //   enemy.draw()
  //   enemy.update()
  //   console.log("drawing enemies")
  // })



   // enemies = [ 
      //   new Enemy({
      //     position: {
      //       x: 450,
      //       y: 475,
      //     },
      //     offset: {
      //       x: 22,
      //       y: 22,
      //     },
      //     frameCount: 8,
      //     frameBuffer: 7,
      //     animations: {
      //       idleLeft: {
      //         frameCount: 8,
      //         frameBuffer: 7,
      //         loop: true,
      //         imageSrc: "assets/images/seo-idle-inverted.png",
      //       },
      //       idleRight: {
      //         frameCount: 8,
      //         frameBuffer: 7,
      //         loop: true,
      //         imageSrc: "assets/images/seo-idle.png",
      //       },
      //       moveLeft: {
      //         frameCount: 8,
      //         frameBuffer: 7,
      //         loop: true,
      //         imageSrc: "assets/images/seo-idle-inverted.png",
      //       },
      //       moveRight: {
      //         frameCount: 8,
      //         frameBuffer: 7,
      //         loop: true,
      //         imageSrc: "assets/images/seo-idle.png",
      //       },
      //     },
      //     loop: true,
      //     color: 'red'
      //   }),
      // ];
      