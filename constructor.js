/**class function with parameterized constructor**/
var MovieClass = (function () {
    /**Parameterized constructor**/
    function MovieClass(movie, tickets) {
        this.movieName = movie;
        this.movieTickets = tickets;
        document.getElementById('movie').innerHTML = "Movie Name is: " + movie;
        document.getElementById('ticket').innerHTML = "Total No of Tickets is: " + tickets;
        document.getElementById('msg').innerHTML = this.getInfo();
    }
    /***function returns string***/
    MovieClass.prototype.getInfo = function () {
        return "The movie \"<b>" + this.movieName + "</b>\" has good review and must be watched atleast once in theatre and i booked\n        \"<b>" + this.movieTickets + " tickets</b>\" for that movie";
    };
    return MovieClass;
}());
var getMovies = new MovieClass("The Revenant", 10);
