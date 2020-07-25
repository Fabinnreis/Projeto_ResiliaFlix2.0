class MovieController {

    static generateMovie(movieUrl) {
        let printView = document.querySelector("#infoMovie")
        let request = new XMLHttpRequest();
        request.open("GET", movieUrl);
        request.addEventListener("load",() => {
            let reqObj = JSON.parse (request.responseText);
            let sendMovie = new Movie(reqObj.Poster,
                                      reqObj.Title,
                                      reqObj.Year,
                                      reqObj.Runtime,
                                      reqObj.Genre,
                                      reqObj.Director,
                                      reqObj.Actors,
                                      reqObj.Plot,
                                      reqObj.imdbRating,
                                      reqObj.imdbVotes,
                                      reqObj.Awards);
        printView.innerHTML = MovieView.templateMovie(sendMovie.getMovie());
        })
        request.send()
    }
}