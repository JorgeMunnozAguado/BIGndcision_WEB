

// cache the navigation links 
var $navigationLinks = $('#index > ul > a > li');
// cache (in reversed order) the sections
var $sections = $($(".link").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('#index > ul > a[href=\\#' + id + '] > li');
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    $navigationLinks.removeClass('active');

    // iterate the sections
    $sections.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top - 1;

        // if the user has scrolled over the top of the section

        if (scrollPosition >= sectionTop) {

            id = currentSection.attr('id');
            $navigationLink = sectionIdTonavigationLink[id];
            $navigationLink.addClass('active');

            return false;

        }
    });

}

$(window).scroll( throttle(highlightNavigation, 10) );
