const {Artist, Song} = require('../models/artist')

module.exports = {
    create,
    delete: deleteSong
}

function create(req, res){
    console.log('This is the create function');
    Artist.findById(req.params.id, function(err, artistFromTheDatabase){
        artistFromTheDatabase.songs.push(req.body);
        artistFromTheDatabase.save(function(err, updatedArtist){
            console.log(updatedArtist)
            res.redirect(`/artists/${artistFromTheDatabase._id}`)
})
console.log(`songs:${artistFromTheDatabase.songs}`)
})
}

// function deleteSong(req, res){
// Artist.findById(req.params.id,function(err, artistDocument){
//     artistDocument.songs.pull({_id: req.params.songId}); 
//     artistDocument.save(function(err){
//         res.redirect(`/artist/${artistDocument._id}`)
//     })
// })}

function deleteSong(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Artist.findById( req.params.id, function(err, artist) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const songSubdoc = artist.songs.id(req.params.songsId);
      // Ensure that the comment was created by the logged in user
      // Remove the comment using the remove method of the subdoc
      songSubdoc.remove();
      // Save the updated book
      artist.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/artists/${artist._id}`);
      });
    });
  }
