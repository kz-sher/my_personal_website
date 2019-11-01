document.addEventListener("DOMContentLoaded", function(event) { 
    
    // Add full page controller
    new fullpage('#app', {
        navigation: true,
        anchors: ['home', 'aboutme', 'myprojects'],
        navigationTooltips: ['Home', 'About Me', 'My Projects'],
        // onLeave: function(last, curr, direction) {
        //         var lastIndex = last.index + 1;
        //         var currIndex = curr.index + 1;
        //         document.querySelector(".s" + lastIndex + ' .reset-anime').className = "reset-anime animated fadeOut faster";

        //         setTimeout(function(){
        //             if(lastIndex > currIndex){
        //                 document.querySelector(".s" + currIndex + ' .reset-anime').className = "reset-anime animated fadeInUp delay-1s";
        //             }
        //             else{
        //                 document.querySelector(".s" + currIndex + ' .reset-anime').className = "reset-anime animated fadeInDown faster";
        //             }
        //         }, 600);
        // },
    });

    // Add fadeInUp animation to vertical scroll dots
    const scrollDots = document.querySelector('#fp-nav');
    scrollDots.classList.add('animated');
    scrollDots.classList.add('fadeInUp');

    // Set stroke dasharray of logo text after delay
    const mainText = document.querySelectorAll('.logo-text .main-text');
    mainText.forEach(function(item){
        setTimeout(function() {
            item.style.setProperty('stroke-dasharray', 200, 'important')
            item.style.setProperty('stroke-dashoffset', 0, 'important')
        }, 1000);
    });
    
    // Set random time for flicker element to flicker
    const flicker = document.querySelectorAll('.flicker');
    function changeAnimationTime() {
        var animationDuration = Math.random();
        
        flicker.forEach(function(item){
            item.style.setProperty('--animation-time', animationDuration +'s');
        });
    }
    setInterval(changeAnimationTime, 1000);

    // Open & close navigation
    const menu = document.querySelector('.menu');
    const navModalClose = document.querySelectorAll('.nav-modal-close');
    const navModal = document.querySelector('#nav-modal');
    const navModalLinks = document.querySelectorAll(".nav-modal-content li");

    menu.addEventListener('click', function(){
        navModal.style.display = "block";
        navModal.className = 'animated fadeIn';
        var delaySecond = 0;

        // Add animation to nav modal link every time it is open
        for(i = 0; i < navModalLinks.length; i ++){
            navModalLinks[i].className = 'nav-item animated fadeInLeft';
            navModalLinks[i].style.animationDelay = delaySecond + "s";
            delaySecond += 0.1;   
        };

        // Disable scrolling
        fullpage_api.setAllowScrolling(false);
    });

    navModalClose.forEach(function(item){
        item.addEventListener('click', function(){
            navModal.className = 'animated fadeOut';
            
            // Remove animation from nav modal link every time it is close
            setTimeout(function(){
                navModal.style.display = "none";
            }, 1000);
            
            navModalLinks.forEach(function(link){
                link.className = 'nav-item';
            });
    
            // Enable scrolling
            fullpage_api.setAllowScrolling(true);
        });
    });

    // Canvas animation from codepen.io
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

    var c = document.getElementById("canvas-club");
    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;
    var ctx = c.getContext("2d");

    var maxParticles = 30;
    var particles = [];
    var hue = 183;

    mouse = {};
    mouse.size = 200;
    mouse.x = mouse.tx = w/2;
    mouse.y = mouse.ty = h/2;

    var clearColor = "#141414";

    function random(min, max){
        return Math.random() * (max - min) + min
    }

    function distance(x1, y1, x2, y2){
        return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
    }

    function P(){}

    P.prototype = {
        init: function(){
            this.size = this.origSize = random(10, 100);
            this.x = random(0, w);
            this.y = Math.random() > .5 ? -this.size : h + this.size;
            this.speed = this.origSpeed = random(.01, .03);
        },
        
        draw: function(){
            this.distanceFromMouse = distance(this.x, this.y, mouse.x, mouse.y);
            ctx.strokeStyle = "hsla("+hue+", 90%, 50%, 1)";
            ctx.shadowColor = "hsla("+hue+", 100%, 55%, 1)";
            // ctx.strokeStyle = "#414141";
            // ctx.shadowColor = "#414141";
            ctx.shadowBlur = this.size * 2;
            ctx.beginPath();
            ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size *  Math.sin(0));
            
            for(var i=0; i<6; i++){
                ctx.lineTo(this.x + this.size * Math.cos(i * 2 * Math.PI / 6), this.y + this.size * Math.sin(i * 2 * Math.PI / 6));
            }   
            
            ctx.closePath();
            ctx.lineWidth = 3;
            ctx.stroke();
            this.update();
        },
        
        update: function(){
            if(this.distanceFromMouse > 20){
                this.x += (mouse.x - this.x) * this.speed;
                this.y += (mouse.y - this.y) * this.speed;
                if(this.distanceFromMouse < mouse.size){
                    this.size += (0 - this.size) * this.speed;
                    this.speed += .01;
                } else {
                    this.size += (this.origSize - this.size) * this.speed;
                }
            } else {
                this.init();
            }
        }
    }


    mouse.move = function(){
        if(!distance(mouse.x, mouse.y, mouse.tx, mouse.ty) <= .1){
        mouse.x += (mouse.tx - mouse.x) * .2;
            mouse.y += (mouse.ty - mouse.y) * .2;
        } 
    };

    mouse.touches = function(e) {
        var touches = e.touches;
        if(touches){
            mouse.tx = touches[0].clientX;
            mouse.ty = touches[0].clientY;
        } else {
            mouse.tx = e.clientX;
        mouse.ty = e.clientY;
        }
        e.preventDefault();
    };

    mouse.mouseleave = function(e){
        mouse.tx = w/2;
        mouse.ty = h/2;
    };

    window.addEventListener("mousemove", mouse.touches);
    window.addEventListener("touchstart", mouse.touches);
    window.addEventListener("touchmove", mouse.touches)

    c.addEventListener("mouseleave", mouse.mouseleave)

    window.addEventListener("resize", function(){
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
    });

    for(var i=1; i<=maxParticles; i++) {
        setTimeout(function(){
            var p = new P();
            p.init();
            particles.push(p);
        }, i * 50);
    }

    function anim(){
        ctx.fillStyle = clearColor;
        ctx.shadowColor = clearColor;
        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillRect(0,0,w, h);
        mouse.move();

        for(var i in particles){
            var p = particles[i];
            p.draw();
        }
        hue++;
        requestAnimationFrame(anim);
    }

    // setTimeout(anim, 2000);
});