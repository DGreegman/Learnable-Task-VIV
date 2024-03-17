const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/rooms-controller')

const roomsController = new RoomsController()

router.post('/', roomsController.createRooms);
router.get('/', roomsController.getRooms);
router.get('/:id', roomsController.getARoom);
router.patch('/:id', roomsController.updateRoom);
router.delete('/:id', roomsController.deleteRoom);


module.exports = router