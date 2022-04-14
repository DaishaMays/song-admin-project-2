const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  songName: String,
  
}, {
  timestamps: true
});

const artistSchema = new Schema({
  artistname: String,
  email: String,
  website: String,
  ipiNo: Number,
  songs: [songSchema]
});



module.exports = { 
  Song: mongoose.model("Song", songSchema),
  Artist: mongoose.model("Artist", artistSchema)
}