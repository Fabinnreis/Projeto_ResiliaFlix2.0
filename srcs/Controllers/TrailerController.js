class TrailerController {

    static generateTrailer(trailerUrl) {
        let printView = document.querySelector("#trailer")
        let request = new XMLHttpRequest();
        request.open("GET", trailerUrl);
        request.addEventListener("load",() => {
            let reqObj = JSON.parse (request.responseText);
            let trailerObj = new TrailerModel(reqObj.items[0].id.videoId);
            printView.innerHTML = TrailerView.trailerTemplate(trailerObj.getNewTrailerObj());
        })
        request.send()
    }
}