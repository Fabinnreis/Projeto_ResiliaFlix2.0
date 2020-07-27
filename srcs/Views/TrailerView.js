class TrailerView{
    constructor(){
        throw new Error ('No need to be instantiated')
    }
    static trailerTemplate(trailer){
        return `<div id="divTrailer">
                    <iframe id="trailerView" src="https://www.youtube.com/embed/${trailer.videoId}">
                </div>
                
        `
    }
}