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
});