/**
 * Canvas
 * Description: Add starfield background animation
*/
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
var canvas = document.getElementById("canvas");
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var centerX = w / 2;
var centerY = h / 2;
var hue = 183;
var speed = 6;
var stars = [];
var starNum = 400;
const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
const random = (min, max) => Math.random() * (max - min) + min;
ctx.translate(centerX, centerY);
ctx.shadowBlur = 2;
ctx.shadowColor = "white";

// Create gradient
var grd = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);

// Add colors
grd.addColorStop(0.000, 'rgba(255, 0, 0, 1.000)');
grd.addColorStop(0.150, 'rgba(255, 0, 255, 1.000)');
grd.addColorStop(0.330, 'rgba(0, 0, 255, 1.000)');
grd.addColorStop(0.490, 'rgba(0, 255, 255, 1.000)');
grd.addColorStop(0.670, 'rgba(0, 255, 0, 1.000)');
grd.addColorStop(0.840, 'rgba(255, 255, 0, 1.000)');
grd.addColorStop(1.000, 'rgba(255, 0, 0, 1.000)');
ctx.lineWidth = 0.3;

// window.addEventListener('mousemove', function(event) {
//     var mouseX = event.clientX;
//     speed = map(mouseX, 0, w, 0, 100);
// }, false);

function Star(){};
Star.prototype = {
    init: function(){
        this.x = random(-w/2, w/2);
        this.y = random(-h/2, h/2);
        this.z = random(0, w);
        this.pz = this.z;
    },
    
    draw: function(){
        var sx = map(this.x / this.z, 0, 1, 0, w);
        var sy = map(this.y / this.z, 0, 1, 0, h);

        var px = map(this.x / this.pz, 0, 1, 0, w);
        var py = map(this.y / this.pz, 0, 1, 0, h);

        this.pz = this.z;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = "white";
        ctx.strokeStyle = grd;
        ctx.stroke();
        ctx.closePath();

        this.update();
    },
    
    update: function(){
        this.z = this.z - speed;
        if (this.z < 1) {
            this.init();
            this.pz = this.z;
        }
    }
}

function setUpStarField(){
    for (i = 0 ;i < starNum; i++){
        var star = new Star();
        star.init();
        stars.push(star);
    }
    return stars;
}

function animateStarfield(){
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.clearRect(-w/2, -h/2, w, h);

    // Restore the transform
    ctx.restore(); 

    for (i = 0 ;i < starNum; i++){
        var star = stars[i];
        star.draw();
    }

    requestAnimationFrame(animateStarfield);
}

setUpStarField();
animateStarfield();