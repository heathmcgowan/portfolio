const portfolio = document.getElementById("portfolio");

$(document).ready(function() {
    $('.nav-btn').click(function () {
        removeActiveNav();
        addActiveNav(this);
        if ($(this).hasClass('home-btn') && $('.contact-modal').hasClass('onscreen')) {
            hideContactModal();
        };
        if ($(this).hasClass('portfolio-btn')) {
            hideContactModal();
            portfolio.scrollIntoView();
        };
        if ($(this).hasClass('contact-btn') && $('.contact-modal').hasClass('hidden')) {
            showContactModal();
        };
    });

    $('.fa-caret-up').click(function() {
        removeActiveNav();
        $('.home-btn').addClass('active-nav-item');
        hideContactModal();
    });

    function removeActiveNav() {
        $('.nav-btn').removeClass('active-nav-item');
    }
    
    function addActiveNav(x) {
        $(x).removeClass('non-active-nav-item');
        $(x).addClass('active-nav-item');
    }

    function showContactModal() {
        $('.contact-modal').removeClass('hidden');
        $('.contact-modal').removeClass('hidden-opacity');
        $('.contact-modal').addClass('onscreen');
        $('.about-content').addClass('hidden-opacity');
    }

    function hideContactModal() {
        $('.contact-modal').addClass('hidden-opacity');
        $('.contact-modal').addClass('hidden');
        $('.about-content').removeClass('hidden-opacity');
    }
    
});

