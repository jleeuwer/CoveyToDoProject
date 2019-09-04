console.log("connected");

var varr_kwadrant = [
    "Belangrijk-Urgent", "Belangrijk-Niet Urgent",
    "Niet Belangrijk-Urgent",
    "Niet Belangrijk-Niet Urgent"
];

// Which kwadrant is selected
var vKwadrant = 1;

if (jQuery) {
    console.log("jQuery loaded");
} else {
    console.log("jQuery not loaded");
};


// Make a todo list done

$("ul").on("click", "li", function() {
    // console.log("li clicked");
    $(this).toggleClass("taskcompleted");
});

// Add a listener on the Kwadrant selection

$("#sel-kwadrant").change(function(event) {
    console.log($(this).val());
    vKwadrant = Number($(this).val());
});


// Add a listener on the Trashcan

function f_Trashcan_listener() {
    $("li span").click(function(event) {
        // console.log("Trash clicked");
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        event.stopPropagation();
    });
};

// Add listener to the input

$("input[type='text']").keypress(function(event) {
    // console.log("Key pressed");
    if (event.which === 13) {
        console.log($(this).val());
        console.log(vKwadrant);
        var vTodotext = $(this).val();
        $(this).val("");
        // Which kwadrant is selected
        if (vKwadrant === 1 ) {
            console.log("Kwadrant1");
            $("#kwadrant1").append("<li><span><i class=\"far fa-trash-alt\"></i></span>" + vTodotext + "</li>");

        } else if (vKwadrant === 2) {
            console.log("Kwadrant2");
            $("#kwadrant2").append("<li><span><i class=\"far fa-trash-alt\"></i></span>" + vTodotext + "</li>");

        } else if (vKwadrant === 3) {
            console.log("Kwadrant3");
            $("#kwadrant3").append("<li><span><i class=\"far fa-trash-alt\"></i></span>" + vTodotext + "</li>");

        } else if (vKwadrant === 4) {
            console.log("Kwadrant4");
            $("#kwadrant4").append("<li><span><i class=\"far fa-trash-alt\"></i></span>" + vTodotext + "</li>");

        };
        f_Trashcan_listener();
    };
});

$("#dispplus").click(function(){
    $("input[type='text']").fadeToggle();
});

f_Trashcan_listener();