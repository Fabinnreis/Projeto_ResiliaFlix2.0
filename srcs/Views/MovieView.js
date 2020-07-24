class MovieView {
    static templateMovie(sendMovie) {
        return `
        <div class="infos">
        <img src="${sendMovie.poster}" id="poster">
        <h2 id="title">${sendMovie.title}</h2>
        <p id="year"><b>Year:</b> ${sendMovie.year}</p>
        <p id="runtime"><b>Runtime:</b> ${sendMovie.runtime}</p>
        <p id="genre"><b>Genre:</b> ${sendMovie.genre}</p>
        <p id="director"><b>Director:</b> ${sendMovie.director}</p>
        <p id="actors"><b>Actors:</b> ${sendMovie.actors}</p>
        <p id="plot"><b>Plot:</b> ${sendMovie.plot}</p>
        <p id="imdbRating"><b>IMDB:</b> ${sendMovie.imdbRating}</p>
        <p id="imdbVotes"><b>Votes:</b> ${sendMovie.imdbVotes}</p>
        <p id="awards"><b>Awards:</b> ${sendMovie.awards}</p>
        </div>`;
    }
}