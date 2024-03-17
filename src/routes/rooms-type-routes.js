const express = require('express');
const router = express.Router();
const RoomTypeController = require('../controllers/rooms-type-controller');

const roomTypeController = new RoomTypeController()

router.get('/', roomTypeController.getAllRoomTypes);   
router.post('/', roomTypeController.createRoomType);

module.exports = router;