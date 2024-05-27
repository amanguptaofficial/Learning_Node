const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
    name:{type:String,lowercase: true, minLength:3,maxLength:20, required:true},
    age:{type:Number, required:true},
    gender:{type:String,enum:["MALE","FEMALE"]},
    bio:{type:String},
    email:{type:String, unique:true},
    mobile:{type:String,maxLength:10, minLength:10, unique:true},
    address:{
        city:{type:String},
        state:{type:String},
        pin:{type:Number,maxLength:7}   
    }
},{timestamps:true})

const userInfo = mongoose.model('users',userInfoSchema)

module.exports = userInfo;