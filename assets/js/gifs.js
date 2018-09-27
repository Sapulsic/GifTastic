// Global Variables
//  ============================================
// Arrays and Variables for initiating Data

let search = ['Penguins', 'Elephants', 'Dolphins'];
let searches = $('#searches');
let addedButtons = $('addedButtons');



// Functions
//  ============================================
$(document).ready(function (){
    
    // window.oncontextmenu = function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // }

    function init() {
        debugger;
        $('searchBody').empty();
        for (let i = 0; i < search.length; i++) {
            let addedGif = $('<button>');
            addedGif.addClass("gifButton")
            addedGif.attr("data-animal", search[i])
            addedGif.text(search[i]);
            $('#addedButtons').append(addedGif);
        }
    };

    $('#submitButton').on('click', function(e){
        debugger;
        e.preventDefault();
        let newSearch = $('#searchInput').val().trim();
        search.push(newSearch);
    });
    

    $("#addedButtons").on('click', function() {
        $('searches').empty();
        let animal = $(this).data("animal");
        let queryURL = 'https://api.giphy.com/v1/gifs/search?&q=' + animal + '&limit=100&api_key=xiPtoJ3FAubesUNvmUFWvCSa2k2KWNCw';
    
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(response) {
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
    init(search, 'addedButtons', "searches")

});