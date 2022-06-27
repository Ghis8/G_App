import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import MongoClient from 'mongodb'

const app=express()

app.use(bodyParser.json({limit: '30mb',extended:true}))
app.use(bodyParser.urlencoded({limit: '30mb',extended:true}))



var url = "mongodb://127.0.0.1:27017/";
mongoose.connect("mongodb+srv://Ghis:Ghis1213@cluster0.gky8r.mongodb.net/G_App?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(3000,()=>console.log("Listenning")))