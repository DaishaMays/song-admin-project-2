var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists');

// Get Route
router.get('/', artistsCtrl.index);
//Post Route
router.post('/', artistsCtrl.create);
router.get('/new', artistsCtrl.new);
router.get('/:id', artistsCtrl.show);



module.exports = router;