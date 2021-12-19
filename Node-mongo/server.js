const express =  require('express')

const app = express()

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Medico")

app.get('',(req,res)=>{
    res.send("How are you daaa")
})

app.listen(5000,()=>{

})