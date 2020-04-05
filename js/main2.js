$(document).ready(function(){

    // Disable scrolling when modal box is open
    $('.modal-open-button').on('click', function(){
        if(fullpage_api){
            fullpage_api.setAllowScrolling(false);
        }
    })
    
    // Enable scrolling when modal box is closed
    $('.modal').on('hidden.bs.modal', function(){
        if(fullpage_api){
            fullpage_api.setAllowScrolling(true);
        }
    });

    // Change project modal box title and button url
    $('.project').on('click', function(){
        $('#projects-modal-label').html('<span class="dot">.</span> ' + $(this).find('.project-title').html());
        $('#demo-web-button').attr('href', $(this).find('.demo-web-url').html());
        $('#view-github-button').attr('href', $(this).find('.github-url').html());
        $('#project-tags').html($(this).find('.project-tags').html());
    });
});