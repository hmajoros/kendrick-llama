(function() {
    
    $(document).ready(onDocumentReady);

    function onDocumentReady() {
        renderForm();

        $(window).on('resize', renderForm);
    }

    function renderForm() {
        var winHeight = $(window).height(),
            form = $('.join-form'),
            padding = (winHeight - form.height()) / 2;

        if (winHeight > form.height() + 20) {
            form.css({ paddingTop: padding });
        } else {
            form.css({ paddingTop: "20px" });
        }
    }
     
})();
