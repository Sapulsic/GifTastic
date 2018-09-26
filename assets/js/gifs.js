// Global Variables
//  ============================================
// Arrays and Variables for initiating Data

var search = ['Penguins', 'Elephants', 'Dolphins']



// Functions
//  ============================================
$(document).ready(function (){
    
    window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };

    function init(search, addClass) {
        $('searchBody').empty();
        for (let i = 0; i < search.length; i++) {
            var addedButtons = $('<button>');
            addedButtons.addClass(addClass).attr("data-type", search[i]).text(search[i]);
            $('#addedButtons').append(addedButtons);
        }
    };

    $('#addedButtons').on('click', function() {
        var animal = $(this).attr('data-animal');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?&q=' + animal + '&limit=100&api_key=xiPtoJ3FAubesUNvmUFWvCSa2k2KWNCw';
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;
            for (let i = 0; i < results.length; i++) {
                var animalDiv = $('<div>')
                var p = $('<p>').text("Rating: " + results[i].rating);
                var animalImage = $('<img>');
                animalImage.attr('src', results[i].images.fixed_height.url);
                animalDiv.append(p);
                animalDiv.append(animalImage);

                $('searches').prepend(animalDiv);
            }
        });

    


    });
            
    // Testing / Debugging
    console.log('test');

        // Main Process
    //  ============================================
    init(search, 'addedButtons')

});