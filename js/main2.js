$(document).ready(function(){

    // Disable scrolling when modal box is open
    $('.modal').on('shown.bs.modal', function(){
        fullpage_api.setAllowScrolling(false);
    })
    
    // Enable scrolling when modal box is closed
    $('.modal').on('hidden.bs.modal', function(){
        fullpage_api.setAllowScrolling(true);
    });

    $('.project').on('click', function(){
        $('#projects-modal-label').html('<span class="dot">.</span> ' + $(this).find('.project-title').html());
        $('#demo-web-button').attr('href', $(this).find('.demo-web-url').html());
        $('#view-github-button').attr('href', $(this).find('.github-url').html());
    });
});