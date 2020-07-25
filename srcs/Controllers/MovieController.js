class MovieController {

    constructor() {
        throw new Error("This class does not support object instancing.")
    }

    static generateMovie(movieUrl) {
        let printView = document.querySelector("#infoMovie")
        let request = new XMLHttpRequest();
        request.open("GET", movieUrl);
        request.addEventListener("load",() => {
            if(request.status == 200){
                let reqObj = JSON.parse (request.responseText);

                if(reqObj.Title != undefined){

                    errorReq = false;
                    printView.classList.remove("error");
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

                } else{

                    printView.innerHTML = "We could not find what you were looking for in our database.";
                    printView.classList.add("error");
                    errorReq = true;
                }

            } else{
                printView.innerHTML = "Bad bad Server.";
                printView.classList.add("error");
                errorReq = true;
            }
        })
        request.send()
    }
}