document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "a":
            keys.a.pressed = true
            break
        case "d":
            keys.d.pressed = true
            break
        case "w":
            keys.w.pressed = true
            break
    }
})

document.addEventListener("keyup", (event) => {
    switch(event.key) {
        case "a":
            keys.a.pressed = false
            break
        case "d":
            keys.d.pressed = false
            break
        case "w":
            keys.w.pressed = false
            break
    }
})

document.addEventListener("keypress", (event) => {
    switch(event.key) {
        case "k":
            console.log("pressed k");
            keys.k.pressed = true
            console.log("keys.k.pressed = " + keys.k.pressed);
            setTimeout(() => {
                keys.k.pressed = false
                if (testEnemy.hit) {
                    testEnemy.velocity.x = 0
                    testEnemy.hit = false
                }
            }, 200)
            break
    }
})