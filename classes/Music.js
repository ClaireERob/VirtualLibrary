// import the Media class:
const Media = require("./Media.js")
// create your Music class:
class Music extends Media{
    constructor(title, genre, year, artist, length){
        super(title, genre, year);
        this.artist = artist;
        this.length = length;
    }
    summary (){
        return `Title: ${title}, Artist: ${artist}, Year: ${year}, Genre: ${genre}`
    }
    static shortestAlbum () {
        const shortestValue = Math.min(this.length);
        return shortestValue;
    }
}
// don't change below
module.exports = Music;
