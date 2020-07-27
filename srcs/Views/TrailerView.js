class TrailerView{
    constructor() {
        throw new Error("This class does not support object instancing.")
    }
    static trailerTemplate(trailer){
        return `<div id="divTrailer">
                    <iframe id="trailerView" src="https://www.youtube.com/embed/${trailer.videoId}">
                </div>
                
        `
    }
}