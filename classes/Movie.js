// import the Media class:
const Media = require("./Media.js")
// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration,rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating; 
    }

    summary() {
        return `Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}, Duration: ${duration}, Rating: ${rating}`
    }

    static longestMovie(){
        const longestLength = Math.max(this.duration);
        return longestLength;
    }
}



// don't change below
module.exports = Movie;