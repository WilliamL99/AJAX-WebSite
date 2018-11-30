// Adding click event listen listener to all buttons
// $("button").on("click", function () {
// });
var actions = ["Walking", "Running", "Jumping", "Swimming", "Playing", "Punching"];


var Key = "Akd42z7hckJCYI11KY19ZjCGn3qx4o4L";


function actionbutton() {
    $("#button-view").empty();
    for (i = 0; i < actions.length; i++) {
        $("#button-view").append("<button class='actionButton' action=" + actions[i] + ">" + actions[i]);
    };
}

actionbutton();

$(".actionButton").on("click", function (event) {
    event.preventDefault();
    var actionGet = $(this).attr("action");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actions + "&api_key=" + Key;
    // gifGetter();
    $("#actionImage").empty();
    event.preventDefault();

    // Performing an AJAX request with the queryURL
    // info from Activities 14-DynamicElements
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var actionDiv = $("<div>");
            // actionDiv.addClass(box);
            var p = $("<p>").text("Rating: " + results[i].rating);
            actionDiv.append(p);
            actionDiv.append("<br>");
            var actionImage = $("<img>");
            var stop = response.data[i].images.downsized_still.url;
            var active = response.data[i].images.downsized_large.url;
            actionImage.attr("src", stop);
            actionImage.attr("asleep", stop);
            actionImage.attr("awake", active);
            actionImage.attr("status", "asleep");
            actionImage.attr("GIF");
            actionDiv.append(actionImage);
            $("#actionImage").prepend(actionDiv);
        }
    });

});

// info from Activities 15-PausingGifs
$(".gif").on("click", function() {
    var status = $(this).attr(status);

    if (status === "awake") {
        $(this).attr("src", $(this).attr("asleep"));
        $(this).attr("status", "asleep");
    } else {
        $(this).attr("src", $(this).attr("awake"));
        $(this).attr("status", "awake");
    }  
});

// info from Activities 10-Working Movie App
$("#add-action").on("click", function(event){
    event.preventDefault();
    var actions = $("#action-input").val().trim();
    action.push(actionDiv);
    actionbutton();
});

