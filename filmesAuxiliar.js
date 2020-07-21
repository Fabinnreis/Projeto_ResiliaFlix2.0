let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
movieString = queryString;
movieString = movieString.split("_").join(" ");

let movieUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=982c7993&t=${movieString}`;

MovieController.generateMovie(movieUrl);