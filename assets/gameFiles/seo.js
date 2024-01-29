var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var seoIdle = document.getElementById("seoIdle");
var WIDTH = 800;
var HEIGHT = 600;
var gravityPull = 12;

var seo = {
  width: 33,
  height: 34,
  x: 50,
  y: HEIGHT - this.height,
  runSpd: 15,
  spd: 0,
};
ctx.drawImage(seoIdle, seo.x, seo.y);

function drawSeo() {
  ctx.drawImage(seoIdle, seo.x, seo.y);
}

function newPos(ent) {
  ent.x += ent.spd;
}

function update() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  newPos(seo);
  drawSeo();
}

setInterval(update, 10);