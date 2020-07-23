class TrailerModel{
    constructor(videoId){
        this._videoId = videoId;
    }

    getNewTrailerObj(){
        return{
            videoId: this._videoId
        }
    }
}