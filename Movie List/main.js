"use strict";
$( document ).ready(function() {

    let movieArray = [];

// Add List button functionality
    $("#addList").click( function() {
        Movie.movieTitle = $("#movieTitle").val() ;
        Movie.movieRating = parseFloat( $("#movieRating").val() );
        if ( !Movie.isValid() ) {
            alert("Must enter a movie title and a rating between 1 and 5");
        } else {
            movieArray.push(Movie.movieTitle + " - " + Movie.movieRating);

// clear text fields
        $("#movieTitle").val( "" );
        $("#movieRating").val( "" );
        }
    });

// Create List button functionality
    $("#createList").click( function() {
        $("#movielist").text("");
        for (let i = 0; i < movieArray.length; i++) {
         $("#movielist").append("<li>" + movieArray[i].toString());
        }
    });
});
