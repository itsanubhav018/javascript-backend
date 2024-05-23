require('dotenv').config()
const express  = require('express')//syntax or we can write as import express from "express"
const app = express()
const port = 3000

app.get('/', (req , res)=>{
    res.send('hello world!')
})

app.get('/twitter' , (req , res)=>{
    res.send('itsanubhav007')
})

app.get('/login',(req, res)=>{
   res.send('<h1>please login</h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h1>chai or code</h1>')
 })
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`)
})
