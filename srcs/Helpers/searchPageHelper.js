let btnSearch = document.querySelector("#btnSearch");
let nameMovie = document.querySelector("#nameMovie");


btnSearch.addEventListener("click", ()=>{
    let movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${nameMovie.value}`;
    let trailerUrl = `https://www.googleapis.com/youtube/v3/search?q="${nameMovie.value} trailer"&key=${googleApiKey}`

    MovieController.generateMovie(movieUrl);
    TrailerController.generateTrailer(trailerUrl);
})
