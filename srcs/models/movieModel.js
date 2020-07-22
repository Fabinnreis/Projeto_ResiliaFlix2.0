class Movie {
    constructor(poster,title,year,runtime,genre,director,actors,plot,imdbRating) {
        this._poster = poster;
        this._title = title;
        this._year = year;
        this._runtime = runtime;
        this._genre = genre;
        this._director = director;
        this._actors = actors;
        this._plot = plot;
        this._imdbRating = imdbRating;
    }
    getMovie() {
        return {
            poster: this._poster,
            title: this._title,
            year: this._year,
            runtime: this._runtime,
            genre: this._genre,
            director: this._director,
            actors: this._actors,
            plot: this._plot,
            imdbRating: this._imdbRating,
        };
    }
}





//http://www.omdbapi.com/?i=tt3896198&apikey=982c7993
//982c7993

/*Title
Year
Runtime
Genre
Director
Actors (?)
Plot (sinopse)
Poster
imdbRating*/

