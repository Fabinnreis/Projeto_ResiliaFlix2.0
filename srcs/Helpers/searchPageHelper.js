let btnSearch = document.querySelector("#btnSearch");
let movieName = document.querySelector("#movieName");
let searchField = document.querySelector ("#searchField");
let nameMovie = document.querySelector ("#nameMovie");
let errorReq = false;


btnSearch.addEventListener("click", ()=>{
    let movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${movieName.value}`;
    let trailerUrl = `https://www.googleapis.com/youtube/v3/search?q="${movieName.value} trailer"${googleApiKey}`

    MovieController.generateMovie(movieUrl);
    TrailerController.generateTrailer(trailerUrl);
})

searchField[1].addEventListener("click",() => {
    let filmName = searchField[0].value;
    let queryString = "?" + filmName;
    window.location.href = "filmes.html" + queryString;
})

nameMovie.addEventListener("keypress",(event) => {
    if (event.keyCode === 13) {
        searchField[1].click();
        event.preventDefault();
    } 
})