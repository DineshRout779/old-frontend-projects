$(document).ready(function () {
    $(".menu").click(function (e) { 
        e.preventDefault();
        $(".links").toggleClass("open");  // Close Nav when clicked outside
    });
    $(document).click(function (e) { 
        if(!$(".links").is(e.target) && !$(".menu").is(e.target)){
            if($('.links').hasClass("open")){
                $(".links").removeClass("open");
            }
        }
    });
});

