(function() {
    
    $(document).ready(onDocReady);


    function onDocReady() {
        // page load functions
        setCoverHeight();

        // functions bound to events
        $(window).on('resize', resizeCover);
    }

    function setCoverHeight() {
        var winHeight = $(window).height();

        $('.cover').css({
            height: winHeight,
            paddingTop: winHeight / 3 
        });
    }

    function resizeCover() {
        var winHeight = $(window).height(),
            winWidth = $(window).width();

        $('.cover').css({
            height: winHeight,
            width: winWidth,
            paddingTop: winHeight / 3
        });
    }

})();
