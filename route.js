const express = require('express');
const controller = require('./src/controller/userController')
const router = express.Router();


router.get('/get-user-info',controller.userInfo)
router.get('/get-user-account-info', controller.userAccountDetails)


module.exports = router;


