let searchField = document.querySelector ("#searchField");
let nameMovie = document.querySelector ("#nameMovie");

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
