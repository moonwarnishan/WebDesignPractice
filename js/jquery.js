$('header').vegas({
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    color: 'red',
    animation: 'random',
    animationDuration: 20000,
    slides: [
       { src: 'img/1.JPG'},
       { src: 'img/13.JPG' },
       { src: 'img/IMG_8510.JPG' }
    ]
 });

 $(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
    });
    $('nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('nav').removeClass('open');
    });
});

