(function() {
    
    $(document).ready(onDocReady);


    function onDocReady() {
        // page load functions
        setCoverHeight();

        // functions bound to events
        $(window).on('resize', resizeCover);
        $('.glyphicon').on('click', renderPageChange);
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

    // function renderPageChange() {
    //     var clicked = $(this),
    //         attr = clicked.data('attribute'),
    //         page = clicked.data('page'),
    //         options = { 
    //             "speed": 500,
    //             "updateURL": false, 
    //             "callbackAfter": function(toggle, anchor) { console.warn('calledback!'); $('#page' + page).addClass('hide'); }
    //         },
    //         newPage;

    //     if (attr === 'next') {
    //         newPage = '#page' + (page + 1);
    //         $('#page' + (page + 1)).removeClass('hide');
    //         smoothScroll.animateScroll(null, newPage, options);
    //     }

    //     if (attr === 'prev') {
    //         newPage = '#page' + (page - 1);
    //         console.warn(newPage);
    //         $('#page' + (page - 1)).removeClass('hide'); 
    //         smoothScroll.animateScroll(null, newPage, options);
    //     }
    // }
    
    function renderPageChange() {
        var clicked = $(this),
            direction = clicked.data('direction'),
            order = clicked.data('order'),
            curPage = clicked.data('page'),
            nextPage;

        if (order === 'next') {
            nextPage = curPage + 1;
        }

        if (order === 'prev') {
            nextPage = curPage - 1;
        }
        
        if (direction === 'up') scrollPageUp(curPage, nextPage);
        if (direction === 'down') scrollPageDown(curPage, nextPage);
        if (direction === 'left') scrollPageLeft(curPage, nextPage);
        if (direction === 'right') scrollPageRight(curPage, nextPage);
    }

    function scrollPageUp(curPage, nextPage) {
        var winHeight = $(window).height(); 

        $('#page' + nextPage).css({ top: 0 - winHeight});
        $('#page' + nextPage).removeClass('hide');

        $('#page' + nextPage).animate({ top: 0 }, {
             duration: 500, 
             queue: false
        }); 

        $('#page' + curPage).animate({ top: winHeight }, {
            duration: 500, 
            queue: false, 
            complete: function() {
                $('#page' + curPage).addClass('hide');
            }
        });
    }

    function scrollPageDown(curPage, nextPage) {
        var winHeight = $(window).height(),
            nextEl = $('#page' + nextPage),
            curEl = $('#page' + curPage);

        nextEl.css({ top: winHeight }).removeClass('hide');

        nextEl.animate({ top: 0 }, {
            duration: 500,
            queue: false
        });

        curEl.animate({ top: 0 - winHeight }, {
            duration: 500,
            queue: false,
            complete: function() {
                curEl.addClass('hide');
            }
        });
    }
    
})();
