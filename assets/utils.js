Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i += 16) {
        rows.push(this.slice(i, i + 16))
    }
    console.log(rows)
    return rows;
}

Array.prototype.createObjectFrom2D = function() {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
           if (symbol === 292) {
             objects.push(
                new CollisionBlock({
                    position: {
                    x: x*50,
                    y: y*50,
                    }
                }))
           }
        })
    })
    return objects;
}