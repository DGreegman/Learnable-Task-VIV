const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/rooms-controller')
const validateToken = require('../middlewares/validateToken')
const roomsController = new RoomsController()

/* the validateToken is a middleware used to prevent users from creating the rooms except they are logged in..

the user can only view the created rooms but can't create, delete, or edit

*/

router.post('/', validateToken, roomsController.createRooms);
router.get('/', roomsController.getRooms);
router.get('/:id', roomsController.getARoom);
router.patch('/:id', validateToken, roomsController.updateRoom);
router.delete('/:id', validateToken, roomsController.deleteRoom);


module.exports = router