window.addEventListener("keydown", (event) => {
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