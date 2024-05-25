const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send("Hello test for get api");
})
router.get('/get-author', function(req,res){
    res.send("Hello test for get author");
})
router.post('/add-author', function(req,res){
    res.send("Hello test for get api");
})
router.delete('/remove-author', function(req,res){
    res.send("Hello test for get api");
})


module.exports = router;


