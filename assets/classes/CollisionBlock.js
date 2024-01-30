class CollisionBlock {
    constructor({position}) {
        this.position = position
        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}