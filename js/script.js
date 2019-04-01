$(function() {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open')
    });

    // sub menu
    $(".link-sub-menu").hover(
        function() {
            $(".sub-menu").addClass("d-block");
        },
        function() {
            $(".sub-menu").removeClass("d-block");
        }
    );
    $(".sub-menu").hover(
        function() {
            $(this).addClass("d-block");
        },
        function() {
            $(this).removeClass("d-block");
        }
    );

    $('.banner-slide .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true
    });

    $('.product-slide.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    $('.custom-datepicker input').datepicker({
        format: "dd-mm-yyyy",
        language: "th",
        autoclose: true,
        todayHighlight: true
    });

    $("input[name='input-number']").TouchSpin({
        min: 0,
        boostat: 5,
        maxboostedstep: 10,
        buttondown_class: 'btn bg-transparent border',
        buttonup_class: 'btn bg-transparent border'
    });
    $(".input-number").TouchSpin({
        min: 0,
        boostat: 5,
        maxboostedstep: 10,
        buttondown_class: 'btn bg-transparent border',
        buttonup_class: 'btn bg-transparent border'
    });

    //Shopping cart order
    $(".btn-shopping-cart").click(function(event) {
        $(".card-shopping-order").addClass('show-order');
    });
    $(".close-shopping-cart").click(function(event) {
        $(".card-shopping-order").removeClass('show-order');
    });
    $('.card-shopping-order .card-body').slimScroll({
        height: '100vh'
    });

    // product-relation-slide
    $('.product-relation-slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    // article-relation-slide
    $('.article-relation-slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
});