(function() {

    $(document).ready(onDocumentReady);

    function onDocumentReady() {
        renderReviews();
        addUserIcons();
        
        $(window).on('resize', renderReviews);
    }

    function renderReviews() {
        var winWidth = $(window).width(),
            iconLeft;

        $('.review').each(function() {
            iconLeft = $(this).width() - $(this).find('.review-icon').width();
            $(this).find('.review-icon').css({ left: iconLeft });
        });
    }
    
    function addUserIcons() {
        var i = 0;
        $('.review').each(function() {
            i++;
            $(this).find('.review-icon').css(
                'background-image', "url('/static/images/llama" + i + ".jpg')"
            );
        });
    }

})();
