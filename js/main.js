let currentPage = 0;

$(document).ready(function() {
        $('.home-button').click(function() {
            $('.home').removeClass('hidden');
            $('.about').addClass('hidden');
            $('.contact').addClass('hidden');
            $('.home-button').removeClass('non-active-nav-item');
            $('.home-button').addClass('active-nav-item');
            $('.about-button').removeClass('active-nav-item');
            $('.about-button').addClass('non-active-nav-item');
            $('.contact-button').removeClass('active-nav-item');
            $('.contact-button').addClass('non-active-nav-item');
        });
        $('.about-button').click(function() {
            $('.home').addClass('hidden');
            $('.about').removeClass('hidden');
            $('.contact').addClass('hidden');
            $('.home-button').removeClass('active-nav-item');
            $('.home-button').addClass('non-active-nav-item');
            $('.about-button').removeClass('non-active-nav-item');
            $('.about-button').addClass('active-nav-item');
            $('.contact-button').removeClass('active-nav-item');
            $('.contact-button').addClass('non-active-nav-item');
        });
        $('.contact-button').click(function() {
            $('.home').addClass('hidden');
            $('.about').addClass('hidden');
            $('.contact').removeClass('hidden');
            $('.home-button').removeClass('active-nav-item');
            $('.home-button').addClass('non-active-nav-item');
            $('.about-button').removeClass('active-nav-item');
            $('.about-button').addClass('non-active-nav-item');
            $('.contact-button').removeClass('non-active-nav-item');
            $('.contact-button').addClass('active-nav-item');
        });
});