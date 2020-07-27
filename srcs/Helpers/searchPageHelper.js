let btnSearch = document.querySelector("#btnSearch");
let movieName = document.querySelector("#movieName");
let searchField = document.querySelector ("#searchField");
let nameMovie = document.querySelector ("#nameMovie");
let errorReq = false;


btnSearch.addEventListener("click", ()=>{
    let movieUrl = `https://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${movieName.value}`;
    let trailerUrl = `https://www.googleapis.com/youtube/v3/search?q="${movieName.value} trailer"&key=AIzaSyCRTOBtfGl9kRAnM4QLJ4pcF00Y1Bv9YfY`

    MovieController.generateMovie(movieUrl);
    TrailerController.generateTrailer(trailerUrl);
})

searchField[1].addEventListener("click",() => {
    let filmName = searchField[0].value;
    let queryString = "?" + filmName;
    window.location.href = "filmes.html" + queryString;
})

movieName.addEventListener("keypress",(event) => {
    if (event.keyCode === 13) {
        btnSearch.click();
        event.preventDefault();
    } 
})