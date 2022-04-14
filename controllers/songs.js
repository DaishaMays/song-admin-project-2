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

function deleteSong(req, res){
   Artist.findById(req.params.id,function(err, artistDocument){
    artistDocument.songs.pull({_id: req.params.songId}); 
    artistDocument.save(function(err){
        res.redirect(`/artist/${artistDocument._id}`)
    })
   })}
