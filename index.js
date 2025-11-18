/**
 * Song Class
 * 
 * A class to manage songs with title, artist, play count, and rating.
 */

class Song {
  #playCount = 0
  #rating = 0
  static playlist = []
  constructor(title, artist) {
    this.title = title
    this.artist = artist
    Song.playlist.push(this)
  }
  get playCount() {
    return this.#playCount
  }
  get rating() {
    return this.#rating
  }
  play() {
    this.#playCount += 1
    console.log(`Now playing: ${this.title} by ${this.artist}`)
  }
  rate(stars) {
    this.#rating = stars
    console.log(`You rated ${this.title} ${stars} stars`)
  }
  isPopular() {
    if (this.#playCount >= 10) {
      return true
    } else {
      return false
    }
  }
  static getTotalSongs() {
    return this.playlist.length
  }
  static findByTitle(title) {
    return this.playlist.find(song => song.title === title)
  }
  //write your code here
}

// Export the Song class for testing
module.exports = { Song };
