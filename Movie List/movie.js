// Establish the Movie function

"use strict";
let Movie = {
    movieTitle: "",
    movieRating: 0,

// Validate the fields for correct input    
    isValid: function () {
        if ( isNaN(this.movieRating) || this.movieRating > 5 || this.movieRating <= 0) {
            return false;
        } else if (this.movieTitle == "" ) {
            return false;
        } else {
            Movie.toString(movieTitle + "" + movieRating)
            return true; 
        }
    }
}




