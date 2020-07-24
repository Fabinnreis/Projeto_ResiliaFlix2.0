let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
movieString = queryString;
movieString = movieString.split("_").join(" ");

let movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${movieString}`;
let trailerUrl = `https://www.googleapis.com/youtube/v3/search?q="${movieString} trailer"&key=AIzaSyDQSZMNFwD26NHsNiejiIbjjEJsS0GkDv8S`

MovieController.generateMovie(movieUrl);
TrailerController.generateTrailer(trailerUrl);