class MovieView {

    constructor() {
        throw new Error("This class does not support object instancing.")
    }
    
    static templateMovie(sendMovie) {
        return `
        <div id="mainInfoMovieDiv">
            <div id="mainInfoMovie">
                <h2 id="title">${sendMovie.title} (${sendMovie.year})</h2>
                <p id="runtime"><b>Runtime:</b> ${sendMovie.runtime} | <b>Genre:</b> ${sendMovie.genre}</p>
            </div>

            <div id="movieRating">
                <img src="../imgs/IMDb.png" id="imdb">
                <p id="rating"><b>${sendMovie.imdbRating}</b><img src="../imgs/star.png" id="star"><br><span id="votes">${sendMovie.imdbVotes} votes</span></p>
            </div>
        </div>

        <div id="movieContentDiv">

            <img src="${sendMovie.poster}" id="poster">

            <div id="movieContent">
                <p id="plot" class="movieData"><b>Plot:</b> ${sendMovie.plot}</p>
                <p id="actors" class="movieData"><b>Actors:</b> ${sendMovie.actors}</p>
                <p id="director" class="movieData"><b>Director:</b> ${sendMovie.director}</p>
                <p id="awards" class="movieData"><b>Awards:</b> ${sendMovie.awards}</p>

            <div>
        </div>
        
        </div>`;
    }
}