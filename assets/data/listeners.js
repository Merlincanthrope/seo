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

          if (seo.position.x <= door.position.x + door.width &&
            seo.position.x + seo.width >= door.position.x &&
            seo.position.y + seo.height >= door.position.y &&
            seo.position.y <= door.position.y + door.height
            ) {
              seo.velocity.x = 0;
              seo.velocity.y = 0;
              seo.preventInput = true
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