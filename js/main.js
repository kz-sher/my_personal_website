document.addEventListener("DOMContentLoaded", function(event) { 
    
    /**
     * Global
     */

    // Add full page controller
    new fullpage('#app', {
        navigation: true,
        anchors: ['home', 'about_me', 'my_projects', 'work_experience', 'job_interests'],
        navigationTooltips: ['Home', 'About Me', 'My Projects', 'Work Experience', 'Job Interests'],
        afterLoad: function(anchorLink, index) {
            history.pushState(null, null, "index.html");
        },
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

    /**
     * Section: Work Experience
     */
    // Adjust position of timeline dots
    const timelineDots = document.querySelectorAll("#timeline .dot");
    const timelineDates = document.querySelectorAll("#timeline date");
    const timelineInside = document.querySelector("#timeline .inside");
    const companyField = document.querySelector(".s4 .description .company-name");
    const positionField = document.querySelector(".s4 .description .position");
    const responsibilityField = document.querySelector(".s4 .description .responsibility");
    const s4Description = document.querySelector(".s4 .description");

    // Change CSS style for all odd number of dates
    timelineDates.forEach(function(date, index){
        if (index % 2 === 0){
            date.style.top = "-30px";
        }
        else{
            date.style.top = "30px";
        }
    });

    timelineDots.forEach(function(dot, index){
        dot.style.left = 100/(timelineDots.length + 1) * (index + 1) + "%";

        // Update work experience content  when clicked
        dot.addEventListener('click', function(){
            const company = this.querySelector(".company-name");
            const position = this.querySelector(".position");
            const responsibility = this.querySelector(".responsibility");

            // Reset CSS style for all dots
            timelineDots.forEach(function(dot){
                dot.style.backgroundColor = "white";
                dot.style.border = "5px solid red";
            });

            // Update content
            companyField.innerHTML = company.innerHTML;
            positionField.innerHTML = position.innerHTML;
            responsibilityField.innerHTML = responsibility.innerHTML;

            // Update CSS style for that dot
            this.style.backgroundColor = "red";
            this.style.border = "5px solid white";
            timelineInside.style.width = this.style.left;
            
        });

        if (index === 0) {
            dot.click();
        }
    });

    /**
     * Canvas
     */
    // Add starfield background animation
    // window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    // var canvas = document.getElementById("canvas");
    // var w = canvas.width = window.innerWidth;
    // var h = canvas.height = window.innerHeight;
    // var ctx = canvas.getContext("2d");
    // var centerX = w / 2;
    // var centerY = h / 2;
    // var hue = 183;
    // var speed = 6;
    // var stars = [];
    // var starNum = 400;
    // const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    // const random = (min, max) => Math.random() * (max - min) + min;
    // ctx.translate(centerX, centerY);
    // ctx.shadowBlur = 2;
    // ctx.shadowColor = "white";

    // // Create gradient
    // var grd = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
      
    // // Add colors
    // grd.addColorStop(0.000, 'rgba(255, 0, 0, 1.000)');
    // grd.addColorStop(0.150, 'rgba(255, 0, 255, 1.000)');
    // grd.addColorStop(0.330, 'rgba(0, 0, 255, 1.000)');
    // grd.addColorStop(0.490, 'rgba(0, 255, 255, 1.000)');
    // grd.addColorStop(0.670, 'rgba(0, 255, 0, 1.000)');
    // grd.addColorStop(0.840, 'rgba(255, 255, 0, 1.000)');
    // grd.addColorStop(1.000, 'rgba(255, 0, 0, 1.000)');
    // ctx.lineWidth = 0.3;

    // // window.addEventListener('mousemove', function(event) {
    // //     var mouseX = event.clientX;
    // //     speed = map(mouseX, 0, w, 0, 100);
    // // }, false);

    // function Star(){};
    // Star.prototype = {
    //     init: function(){
    //         this.x = random(-w/2, w/2);
    //         this.y = random(-h/2, h/2);
    //         this.z = random(0, w);
    //         this.pz = this.z;
    //     },
        
    //     draw: function(){
    //         var sx = map(this.x / this.z, 0, 1, 0, w);
    //         var sy = map(this.y / this.z, 0, 1, 0, h);

    //         var px = map(this.x / this.pz, 0, 1, 0, w);
    //         var py = map(this.y / this.pz, 0, 1, 0, h);

    //         this.pz = this.z;

    //         ctx.beginPath();
    //         ctx.moveTo(px, py);
    //         ctx.lineTo(sx, sy);
    //         ctx.strokeStyle = "white";
    //         ctx.strokeStyle = grd;
    //         ctx.stroke();
    //         ctx.closePath();

    //         this.update();
    //     },
        
    //     update: function(){
    //         this.z = this.z - speed;
    //         if (this.z < 1) {
    //             this.init();
    //             this.pz = this.z;
    //         }
    //     }
    // }
    
    // function setUpStarField(){
    //     for (i = 0 ;i < starNum; i++){
    //         var star = new Star();
    //         star.init();
    //         stars.push(star);
    //     }
    //     return stars;
    // }

    // function animateStarfield(){
    //     // Store the current transformation matrix
    //     ctx.save();

    //     // Use the identity matrix while clearing the canvas
    //     ctx.clearRect(-w/2, -h/2, w, h);

    //     // Restore the transform
    //     ctx.restore(); 

    //     for (i = 0 ;i < starNum; i++){
    //         var star = stars[i];
    //         star.draw();
    //     }
    
    //     requestAnimationFrame(animateStarfield);
    // }
    
    // setUpStarField();
    // animateStarfield();
});