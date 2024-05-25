# Learning_Node
For Node


### touch : this command use for create file 
EX: touch index.js

## Dependency type: 
Their are two types of dependencies.. 
1. Normal dependencies
2. Dev dependencies (only use for development time , to make our experience smooth and fast)

## How to create server using http (built in module) module
`const http = require('http');

const server = http.createServer(function(req,res){
    res.end("Hello world...")
})

let PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server started at port number ${PORT} \n http://localhost:3000`)
})
 `


## Install Dependecies
npm install <package_name> 
npm i <package_name>

## Uninstall Dependencies
npm uninstall <package_name>

## How to install dependencies with specific version
npm i <package_name>@3.4.3



## How to create server using express 
const express = require('express');
const app = express();

app.listen(4000,()=>{
    console.log("Server started....")
})


NOTE 1: app.use(express.urlencoded({extended:true}))    // true --> qs libar --> external lib
                                                        // false --> querystring library --> inbuilt

## express.json() ka use 

