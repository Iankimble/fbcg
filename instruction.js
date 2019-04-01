console.log("instruction is on");

$("#instructionButton").click(function () {
    console.log("Button Clicked")

    $('html,body').animate({
        scrollTop: $("#instructions").offset().top
    },
        'slow');
});

