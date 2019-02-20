$(document).ready(function(){
    $('.show-modal').click(function () {
        $('.modal-overlay').addClass('active');
        document.body.style.overflow = 'hidden';
        var top = $(document).scrollTop();
        $('.modal-overlay').css('top', top);
    });
    $('[data-close]').click(':not(.modal-body)', function () {
        $('.modal-overlay').removeClass('active');
        document.body.style.overflow = 'visible';
    });

});