// Global Variables
//  ============================================
// Arrays and Variables for initiating Data

var search = ['Penguins', 'Elephants', 'Dolphins'];
var searches = $('#searches');
var addedButtons = $('addedButtons');



// Functions
//  ============================================
$(document).ready(function (){
    
    window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    function init() {
        $('searchBody').empty();
        for (let i = 0; i < search.length; i++) {
            let addedGif = $('<button>');
            addedGif.addClass("gifButton")
            addedGif.attr("data-animal", search[i])
            addedGif.text(search[i]);
            $('#addedButtons').append(addedGif);
        }
    };

    

    $('#addedButtons').on('click', function() {
        let animal = $(this).attr('data-animal');
        let queryURL = 'https://api.giphy.com/v1/gifs/random?&q=' + animal + '&limit=100&api_key=xiPtoJ3FAubesUNvmUFWvCSa2k2KWNCw';
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);

            let results = response.data;
            for (let i = 0; i < results.length; i++) {
                let animalDiv = $('<div>')
                let p = $('<p>').text("Rating: " + results[i].rating);
                let animalImage = $('<img>');
                animalImage.attr('src', results[i].images.fixed_height.url);
                animalDiv.append(p);
                animalDiv.append(animalImage);

                $('#searches').prepend(animalDiv);
            }
        });

    


    });
            
    // Testing / Debugging
    console.log('test');

        // Main Process
    //  ============================================
    init(search, 'addedButtons')

});