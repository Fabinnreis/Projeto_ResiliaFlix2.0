class MovieController {

    static generateMovie(movieUrl) {
        let request = new XMLHttpRequest();
        request.open("GET", movieUrl);
        request.addEventListener("load",() => {
            let submit = JSON.parse (request.responseText);
            let sendMovie = new Movie (submit.poster,
                                    submit.year,
                                    submit.runtime,
                                    submit.genre,
                                    submit.director,
                                    submit.actors,
                                    submit.plot,
                                    submit.imdbRating);

        PARTEDOHTML.innerHTML = MovieView.templateMovie(sendMovie.getMovie());
        })
        request.send()
    }
}