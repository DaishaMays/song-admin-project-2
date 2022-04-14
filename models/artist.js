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
  Artist: mongoose.model("Artist", artistSchema),
  Song: mongoose.model("Song", songSchema)
  
}