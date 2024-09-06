const express = require('express')
const app = express()


app.get('/404',(req,res,next)=>{
    res.status(404)
})