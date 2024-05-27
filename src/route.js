const express = require('express');
const controller = require('./controller/userController')
const router = express.Router();


router.post('/add-user-info',controller.addUserInfo);
router.get('/get-all-users',controller.getAllUsers);
router.get('/get-user',controller.getUser);
router.get('/get-user-by-id/:_id',controller.getUserById);



module.exports = router;


