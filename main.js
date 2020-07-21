let movieImg = document.querySelector (".movieImg");
let moviePart = document.querySelector ("#moviePart");

movieImg.addEventListener("click",() => {
    let movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${titleMovie.value}`

MovieController.generateMovie(movieUrl);    
});