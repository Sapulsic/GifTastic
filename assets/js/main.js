// Global Variables
//  ============================================
// Arrays and Variables for initiating Data

var search = ['Penguins', 'Elephants', 'Dolphins']



// Functions
//  ============================================
$(document).ready(function (){
    
    function init(search, addClass) {
        $('searchBody').empty();
        for (let i = 0; i < search.length; i++) {
            var addedButtons = $('#addedButtons');
            addedButtons.addClass(addClass).attr("data-type", search[i]).text(search[i]);
            $('searchBody').append(button);
        }
    };

    // Testing / Debugging
    console.log('Good To go!');
    
    // Main Process
    //  ============================================
    init(search, 'addedButons', '#searches')
    // init(search, "#searches");

});