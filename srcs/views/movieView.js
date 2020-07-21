class MovieView {
    static templateMovie(ALGUMACOISA) {
        return `
        <div>
        <img src="${ALGUMACOISA.poster}" id="poster">
        <p id="title">${ALGUMACOISA.title}</p>
        <p id="year">${ALGUMACOISA.year}</p>
        <p id="runtime">${ALGUMACOISA.runtime}</p>
        <p id="genre">${ALGUMACOISA.genre}</p>
        <p id="director">${ALGUMACOISA.director}</p>
        <p id="actors">${ALGUMACOISA.actors}</p>
        <p id="plot">${ALGUMACOISA.plot}</p>
        <p id="imdbRating">${ALGUMACOISA.imdbRating}</p>
        </div>`;
    }
}