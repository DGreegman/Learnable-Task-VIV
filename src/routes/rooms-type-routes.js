const express = require('express');
const router = express.Router();
const RoomTypeController = require('../controllers/rooms-type-controller');
const validateToken = require('../middlewares/validateToken');

const roomTypeController = new RoomTypeController()

// the validateToken is a middleware used to prevent users from creating the rooms except they are logged in..
router.get('/', roomTypeController.getAllRoomTypes);   
router.post('/', validateToken, roomTypeController.createRoomType);

module.exports = router;