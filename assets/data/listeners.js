window.addEventListener("keydown", (event) => {
  if (seo.preventInput) return
    switch(event.key) {
      case "a":
        keys.a.pressed = true
        
      break;
      case "d":
        keys.d.pressed = true
        
      break;
      case "w":
        if (seo.velocity.y === 0) seo.velocity.y = -17;
        
      break;
      case "e":
        for (let i = 0; i < doors.length; i++) {
          const door = doors[i]

          if (seo.hitbox.position.x + seo.hitbox.width <= door.position.x + door.width &&
            seo.hitbox.position.x >= door.position.x &&
            seo.hitbox.position.y + seo.hitbox.height >= door.position.y &&
            seo.hitbox.position.y <= door.position.y + door.height
            ) {
              seo.velocity.x = 0;
              seo.velocity.y = 0;
              seo.preventInput = true
              seo.switchSprite('enterDoor')
              door.playAnim()
            }
        }
      
      break
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