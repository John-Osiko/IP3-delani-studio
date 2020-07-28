$(document).ready(function() {
    $("#my-design").click(function() {
        $("#design").slideToggle(1200);
        $("#my-design").hide();
    });
    $("#design").click(function() {
        $("#my-design").slideToggle(1500);
        $("#design").hide();
    });
});

$(document).ready(function() {
    $("#my-dev").click(function() {
        $("#dev").slideToggle(1200);
        $("#my-dev").hide();
    });
    $("#dev").click(function() {
        $("#my-dev").slideToggle(1500);
        $("#dev").hide();
    });
});

$(document).ready(function() {
    $("#my-product").click(function() {
        $("#product").slideToggle(1200);
        $("#my-product").hide();
    });
    $("#product").click(function() {
        $("#my-product").slideToggle(1500);
        $("#product").hide();
    });
});

$(document).ready(function() {
    $("#port1").hover(function() {
        $("#take-off1").fadeToggle(1500, "linear");
    });
});

$(document).ready(function() {
    $("#port2").hover(function() {
        $("#take-off2").fadeToggle(1500, "linear");
    });
});

$(document).ready(function() {
    $("#port3").hover(function() {
        $("#take-off3").fadeToggle(1500, "linear");
    })
});

$(document).ready(function() {
    $("#port4").hover(function() {
        $("#take-off4").fadeToggle(1500, "linear");
    });
});

$(document).ready(function() {
    $("#port5").hover(function() {
        $("#take-off5").fadeToggle(1500, "linear");
    });
});

$(document).ready(function() {
    $("#port6").hover(function() {
        $("#take-off6").fadeToggle(1500, "linear");
    });
});

$(document).ready(function() {
    $("#port7").hover(function() {
        $("#take-off7").fadeToggle(1500, "linear");
    });
});

$(document).ready(function() {
    $("#port8").hover(function() {
        $("#take-off8").fadeToggle(1500, "linear");
    });
});
$(document).ready(function() {
    $("form.form-group").submit(function(event) {
        var name = $("input#laduka").val();
        var email = $("input#wall-e").val();
        var comment = $("textarea#comment").val();
        if ($("input#laduka").val() && $("input#wall-e").val()) {
            alert(name + " " + "you have successfully sent your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }
    });
});