const Artist = require('../models/artist');

module.exports = {
    index,
    show,
    create,
    new: newArtist
};


function index(req, res) {
    Artist.find({}, function(err, artists) {
    res.render('artists/index', { artistname: 'Artist Database', artists });
    });
}



function show(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
    res.render('artists/show', { artistname: 'Artist Detail', artist });
    });
}

function newArtist (req, res) {
    Artist.find({}, function(err, artists) {
        res.render('artists/new', { artists });
        });
}


function create(req, res) {
    const artist = new Artist(req.body);
    artist.save(function(err) {
        console.log(err);
    if (err) return res.render('artists');
    console.log('Your Form is working');
    
    
    res.redirect(`/artists/${artist._id}`);

})};


