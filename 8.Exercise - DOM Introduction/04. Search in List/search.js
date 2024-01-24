// search.js

// Wrap your code in a document ready function to ensure the DOM is fully loaded
$(document).ready(function() {
   // Function to perform the search
   function search() {
       // Clear previous search results
       $('#result').empty();

       // Get the search text
       var searchText = $('#searchText').val().toLowerCase();

       // Get the list of towns
       var towns = $('#towns li');

       // Variables to count matches
       var matches = 0;

       // Loop through each town
       towns.each(function() {
           var town = $(this);
           var townText = town.text().toLowerCase();

           // Check if the town includes the search text
           if (townText.includes(searchText)) {
               // Bold and underline the matched town
               town.html('<strong><u>' + townText + '</u></strong>');
               matches++;
           }
       });

       // Print the number of matches
       $('#result').text(`${matches} matches found`);
   }

   // Bind the search function to the button click event
   $('button').on('click', search);
});
