class MovieController {

    static generateMovie(movieUrl) {
        let receiveView = document.querySelector("#infoMovie")
        let request = new XMLHttpRequest();
        request.open("GET", movieUrl);
        request.addEventListener("load",() => {
            let submit = JSON.parse (request.responseText);
            let sendMovie = new Movie (submit.Poster,
                                    submit.Title,
                                    submit.Year,
                                    submit.Runtime,
                                    submit.Genre,
                                    submit.Director,
                                    submit.Actors,
                                    submit.Plot,
                                    submit.imdbRating);
        console.log(sendMovie);
        receiveView.innerHTML = MovieView.templateMovie(sendMovie.getMovie());
        })
        request.send()
    }
}