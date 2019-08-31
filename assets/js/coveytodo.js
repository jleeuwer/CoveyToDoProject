console.log("connected");

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
        // console.log($(this).val());
        var vTodotext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span>" + vTodotext + "</li>");
        f_Trashcan_listener();
    };
});

$("#dispplus").click(function(){
    $("input[type='text']").fadeToggle();
});

f_Trashcan_listener();