const express = require('express');
const router = express.Router()
const songsCtrl = require('../controllers/songs')

router.post('/artists/:id/songs', songsCtrl.create)
router.delete('/artists/:id/songs/:songsId', songsCtrl.delete)





module.exports = router;