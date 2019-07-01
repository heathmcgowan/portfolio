const portfolio = document.getElementById("portfolio");

$(document).ready(function() {
    $('.nav-btn').click(function () {
        removeActiveNav();
        addActiveNav(this);
        hideMobileNav();
        if ($(this).hasClass('home-btn') && $('.contact-modal').hasClass('onscreen')) {
            hideContactModal();
        } else if ($(this).hasClass('portfolio-btn')) {
            hideContactModal();
            portfolio.scrollIntoView();
        } else if ($(this).hasClass('contact-btn') && $('.contact-modal').hasClass('offscreen')) {
            showContactModal();
        };
    });

    $('#hamburger').click(function() {
        $('#mobile-nav').toggleClass('mobile-nav-hidden');
    });

    $('.fa-caret-up').click(function() {
        removeActiveNav();
        $('.home-btn').addClass('active-nav-item');
        hideContactModal();
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest(".mobile-nav-container").length === 0) {
            hideMobileNav();
        }
    });

    function removeActiveNav() {
        $('.nav-btn').removeClass('active-nav-item');
    }
    
    function addActiveNav(x) {
        $(x).removeClass('non-active-nav-item');
        $(x).addClass('active-nav-item');
    }

    function showContactModal() {
        $('.contact-modal').removeClass('offscreen');
        $('.contact-modal').addClass('onscreen');
        $('.about-content').addClass('hidden-opacity');
    }

    function hideContactModal() {
        $('.contact-modal').addClass('offscreen');
        $('.about-content').removeClass('hidden-opacity');
    }

    function hideMobileNav () {
        if (!$('#mobile-nav').hasClass('mobile-nav-hidden')) {
            $('#mobile-nav').addClass('mobile-nav-hidden');
        };
    }
    
});

