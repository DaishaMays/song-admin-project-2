const {Artist} = require('../models/artist');

module.exports = {
    index,
    show,
    create,
    new: newArtist,
    delete: deleteArtist,
    update
    
};



function deleteArtist(req, res){
    
    Artist.findOneAndDelete({_id: req.params.id}, function(err){
        res.redirect('/artists/new')
    })
}
function index(req, res) {
    res.render('artists/index', { title: 'new-form' });
}



function show(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
    res.render('artists/show', { artistname: 'Artist Detail', artist });
    });
}

function newArtist (req, res) {
    
    Artist.find(req.params.id, function(err, artists) {
        res.render('artists/new', { artists });
        });
}


function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err) {
        console.log(err);
    if (err) return res.render('artists');
    res.redirect(`/artists/${artist._id}`);

})};

function update(req, res) {
    Artist.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, artist) {
        if (err || !artist) return res.redirect('/artists');
        res.redirect(`/artists/${artist._id}`);
      }
    );
  }




