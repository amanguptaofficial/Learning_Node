const express = require('express');
const mongoose = require('mongoose')
const chalk = require('chalk')
const router = require('./route')
const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))
  

mongoose.connect('mongodb+srv://amangupta:e8FZr9gkpkURH2ej@amangupta.sxfmmms.mongodb.net/user').then(()=>{
    console.log(chalk.yellow("MongoDB connected successfully.."))
}).catch((err)=>{
console.log(chalk.red("error: ", err))
})

app.use('/',router)

                                           
app.listen(4000,()=>{
    console.log(chalk.blue('Server started....'))
})
