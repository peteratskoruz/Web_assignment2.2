/**class function with parameterized constructor**/

class MovieClass{

    /**privste member**/

    private movieName: string;
    private movieTickets: number;

    /**Parameterized constructor**/

    constructor(movie: string, tickets: number){

        this.movieName = movie;

        this.movieTickets = tickets;

       document.getElementById('movie').innerHTML=`Movie Name is: ${movie}`;

       document.getElementById('ticket').innerHTML=`Total No of Tickets is: ${tickets}`;

       document.getElementById('msg').innerHTML=this.getInfo();

    }

    /***function returns string***/

    public getInfo():string {
        return `The movie "<b>${this.movieName}</b>" has good review and must be watched atleast once in theatre and i booked
        "<b>${ this.movieTickets} tickets</b>" for that movie`;

    }

}

let getMovies = new MovieClass("The Revenant", 10);
