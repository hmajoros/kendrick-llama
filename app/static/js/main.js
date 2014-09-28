(function() {
    
    $(document).ready(onDocReady);


    function onDocReady() {
        // page load functions
        resizeCover();

        // functions bound to events
        $(window).on('resize', resizeCover);
        $('.glyphicon').on('click', renderPageChange);
    }

    function resizeCover() {
        var winHeight = $(window).height(),
            winWidth = $(window).width(),
            cntHeight,
            coverPadding;

        $('.cover').each(function() {
            cntHeight = $(this).find('.container').height();
            coverPadding = (winHeight - cntHeight) / 2; 

            $(this).css({
                width: winWidth,
                height: winHeight,
                paddingTop: coverPadding
            });
        });
    }
        
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
        // if (direction === 'left') scrollPageLeft(curPage, nextPage);
        // if (direction === 'right') scrollPageRight(curPage, nextPage);
    }

    function scrollPageUp(curPage, nextPage) {
        var winHeight = $(window).height(),
            nextEl = $('#page' + nextPage),
            curEl = $('#page' + curPage);


        nextEl.css({ top: 0 - winHeight}).removeClass('hide');

        resizeCover();
        
        nextEl.animate({ top: 0 }, {
             duration: 500, 
             queue: false
        }); 

        curEl.animate({ top: winHeight }, {
            duration: 500, 
            queue: false, 
            complete: function() {
                curEl.addClass('hide');
            }
        });
    }

    function scrollPageDown(curPage, nextPage) {
        var winHeight = $(window).height(),
            nextEl = $('#page' + nextPage),
            curEl = $('#page' + curPage);

        nextEl.css({ top: winHeight }).removeClass('hide');
    
        resizeCover();

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
