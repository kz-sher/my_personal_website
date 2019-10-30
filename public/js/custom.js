document.addEventListener("DOMContentLoaded", function(event) { 
    // const faceButton = document.querySelector('.face-button');
    
    // Set stroke dasharray of logo text after delay
    const mainText = document.querySelectorAll('.logo-text .main-text');
    
    mainText.forEach(function(item){
        setTimeout(function() {
            item.style.setProperty('stroke-dasharray', 200, 'important')
            item.style.setProperty('stroke-dashoffset', 0, 'important')
        }, 1000);
    });
    
    // Set random time for lightbulb to flicker
    const flicker = document.querySelectorAll('.flicker');

    function changeAnimationTime() {
        var animationDuration = Math.random();
        console.log(animationDuration)
        flicker.forEach(function(item){
            item.style.setProperty('--animation-time', animationDuration +'s');
        });
    }

    setInterval(changeAnimationTime, 1000);

});