// Global Variables
//  ============================================
// Arrays and Variables for initiating Data

let search = ['Neo', 'Morheus', "Agent Smith",'The Matrix'];
let searches = $('#searches');
let addedButtons = $('#addedButtons');



// Functions
//  ============================================
// $(document).ready(function (){
    
    // window.oncontextmenu = function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // }

    function init() {
        // debugger;1`
        addedButtons.empty();
        for (let i = 0; i < search.length; i++) {
            let addedGif = $('<button>');
            addedGif.addClass("gifButton")
            addedGif.attr("data-animal", search[i])
            addedGif.text(search[i]);
            addedButtons.append(addedGif);
        }
    };

    $('#submitButton').on('click', function(e){
        // debugger;
        e.preventDefault();
        let newSearch = $('#searchInput').val().trim();
        search.push(newSearch);
        $('#searchForm')[0].reset();
        init()
    });
    

    $(document).on('click', '.gifButton', function () {
        // debugger;
        let animal = $(this).attr("data-animal");
        let queryURL = 'https://api.giphy.com/v1/gifs/search?&q=' + animal + '&limit=10&lang=en&api_key=xiPtoJ3FAubesUNvmUFWvCSa2k2KWNCw';
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        
        .then(function(response) {
            console.log(queryURL);
            console.log(response);
            
            searches.empty();   
            let results = response.data;
            for (let i = 0; i < results.length; i++) {
                let animalDiv = $('<div>')
                animalDiv.addClass('gifs')
                let p = $('<p>').text("Rating: " + results[i].rating);
                let animalImage = $('<img>');
                animalImage.addClass('gifImage');
                animalImage.attr('src', results[i].images.fixed_height.url);
                animalDiv.append(p);
                animalDiv.append(animalImage);

                $('#searches').prepend(animalDiv);
            }
        });

        $('#clearButton').on('click', function() {
            searches.empty()
        })

        $(".gifImage").on("click", function() {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });


    });
            
    // Testing / Debugging
    console.log('test');

        // Main Process
    //  ============================================
    init()

// });