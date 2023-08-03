// dropdown ของ about

$(document).ready(function() {
    $(".about-menu").hover(function() {
        $(".about-dropdown").slideDown("fast");
    });
    
    $(".about-dropdown").hover(function() {
        $(".about-dropdown").slideDown("fast");
    }, function() {
        $(".about-dropdown").slideUp("300");
    });
});


// dropdown ของ tqa
$(document).ready(function() {
    $(".tqa-menu").hover(function() {
        $(".tqa-dropdown").slideDown("fast");
    });
});

$(document).ready(function() {
    $(".tqa-dropdown").hover(function() {
        $(".tqa-dropdown").slideDown("fast");
    }, function() {
        $(".tqa-dropdown").slideUp("300");
    });
});


// droupdown ของ risk
$(document).ready(function() {
    $(".risk-menu").hover(function() {
        $(".risk-dropdown").slideDown("fast");
    });
});

$(document).ready(function() {
    $(".risk-dropdown").hover(function() {
        $(".risk-dropdown").slideDown("fast");
    }, function() {
        $(".risk-dropdown").slideUp("300");
    });
});