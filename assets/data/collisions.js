const collisionsLevel1 = [
//   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],// 0
    [0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,],// 1
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 2
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 3
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 4
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 5
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 6
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 7
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,],// 8
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 0,],// 9
    [0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 0,],// 10
    [0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,],// 11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],// 12
]

Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i += 16) {
        rows.push(this.slice(i, i + 16))
    }
    return rows;
}

class CollisionBlock {
    constructor({position}) {
        this.position = position
        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
const collisionblocks = []

const parsedCollisions = collisionsLevel1.parse2D();
parsedCollisions.forEach((row, y) => {
    row.forEach((symbol, x) => {
       if (symbol === 292) {
         collisionblocks.push(
            new CollisionBlock({
                x: x,
                y: y
            }))
       }
    })
})