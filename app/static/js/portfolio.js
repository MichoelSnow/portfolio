

$(window).on('load', function () {

    $('.single-brand-item').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
        let filt_head = document.querySelectorAll(".single-brand-item.active");
        let filt_list = Object.values(filt_head).map(a => a.getAttribute('data-filter'));
        let filt_join = filt_list.join("");
        console.log(filt_join);



        // var data = $(this).attr('data-filter');
        $workGrid.isotope({
            filter: filt_join
        });
    });


    if (document.getElementById('portfolio')) {
        var $workGrid = $('.portfolio-grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }
});
