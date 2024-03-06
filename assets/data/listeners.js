document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "a":
            if (player.preventInput) return
            keys.a.pressed = true
            break
        case "d":
            if (player.preventInput) return
            keys.d.pressed = true
            break
        case "w":
            if (player.preventInput) return
            keys.w.pressed = true
            break
    }
})

document.addEventListener("keyup", (event) => {
    switch(event.key) {
        case "a":
            if (player.preventInput) return
            keys.a.pressed = false
            break
        case "d":
            if (player.preventInput) return
            keys.d.pressed = false
            break
        case "w":
            if (player.preventInput) return
            keys.w.pressed = false
            break
    }
})

document.addEventListener("keypress", (event) => {
    switch(event.key) {
        case "k":
            if (keys.k.pressed) return
            console.log("pressed k");
            keys.k.pressed = true
            player.preventInput = true
            console.log("keys.k.pressed = " + keys.k.pressed);
            setTimeout(() => {
                keys.k.pressed = false
                player.preventInput = false
                if (testEnemy.hit) {
                    testEnemy.velocity.x = 0
                    testEnemy.hit = false
                }
            }, 300)
            // console.log(testEnemy.hit);
            break
        case "u":
            if (keys.u.pressed) return
            console.log("pressed u");
            keys.u.pressed = true
            testEnemy.preventInput = true
            console.log("keys.u.pressed = " + keys.u.pressed)
            setTimeout(() => {
                keys.u.pressed = false
                testEnemy.preventInput = false
                testEnemy.groundLeftLogged = false
                testEnemy.groundRightLogged = false
                player.hit = false
            }, 200)
            break
        case "c":
            keys.c.pressed = true
            if (keys.d.pressed && !keys.a.pressed) {
                player.dodge("right")
            } else if (keys.a.pressed && !keys.d.pressed) {
                player.dodge("left")
            } else {
                if (player.lastDirection == "right") {
                    player.dodge("left")
                } else if (player.lastDirection == "left") {
                    player.dodge("right")
                }
            }
            console.log("pressed c")
            break
    }
})