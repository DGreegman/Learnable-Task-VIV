const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/rooms-controller')
const validateToken = require('../middlewares/validateToken')
const roomsController = new RoomsController()
const restrict = require('../middlewares/restrict')


/* the validateToken is a middleware used to prevent users from creating the rooms except they are logged in..

the user can only view the created rooms but can't create, delete, or edit

the restrict middleware function prevents users who are not admins to delete or edit, but the admin must login to perform this operation

*/

router.post('/', validateToken, roomsController.createRooms);
router.get('/', roomsController.getRooms);
router.get('/:id', roomsController.getARoom);
router.patch('/:id', validateToken, restrict('admin'), roomsController.updateRoom);
router.delete('/:id', validateToken, restrict('admin'), roomsController.deleteRoom);


module.exports = router