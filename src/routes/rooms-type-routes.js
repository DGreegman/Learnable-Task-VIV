const express = require('express');
const router = express.Router();
const roomTypeController = require('../controllers/rooms-type-controller');

router.get('/', roomTypeController.getAllRoomTypes);   
router.post('/', roomTypeController.createRoomType);

module.exports = router;