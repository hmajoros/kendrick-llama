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
            winWidth = $(window).width();

        $('.cover').each(function() {
            $(this).css({
                width: winWidth,
                height: winHeight,
            });
        });

        resizePageOne(winHeight);
        resizePageTwo(winHeight);
        resizePageThree(winHeight);
    }

    function resizePageOne(winHeight) {
        var page = $('#page1'),
            content = page.find('.main-content'),
            arrowDn = page.find('.container:last'),
            cntPadding = (winHeight - content.height()) / 2,
            arrowPadding = cntPadding - arrowDn.height(); 

        if (content.height() + arrowDn.height() < winHeight && cntPadding >= 0) {
            content.css({ paddingTop: cntPadding });
            arrowDn.css({ paddingTop: arrowPadding });
        } else {
            content.css({ paddingTop: 0 });
            arrowDn.css({ paddingTop: 0 });
        }
    }
    
    function resizePageTwo(winHeight) {
        var page = $('#page2'), 
            content = page.find('.main-content'),
            arrowUp = page.find('.container:first'),
            arrowDn = page.find('.container:last'),
            padding = ((winHeight - content.height()) / 2) - arrowUp.height();

        if (content.height() + arrowUp.height() + arrowDn.height() < winHeight && padding >= 0) {
            content.css({ paddingTop: padding });
            arrowDn.css({ paddingTop: padding });
        } else {
            content.css({ paddingTop: 0 });
            arrowDn.css({ paddingTop: 0 });
        }
    }    
    
    function resizePageThree(winHeight) {
        var page = $('#page3'),
            content = page.find('.main-content'),
            arrowUp = page.find('.container:first'),
            padding = ((winHeight - content.height()) / 2) - arrowUp.height();

            console.warn(padding);

        if (content.height() + arrowUp.height() < winHeight && padding >= 0) {
            content.css({ paddingTop: padding });
        } else {
            content.css({ paddingTop: 0 });
        }
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
