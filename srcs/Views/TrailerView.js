class TrailerView{
    constructor(){
        throw new Error ('Não precisa ser instanciado')
    }
    static trailerTemplate(trailer){
        return `<div id="divTrailer">
                    <iframe id="trailerView" src="https://www.youtube.com/embed/${trailer.videoId}">
                </div>
                
        `
    }
}