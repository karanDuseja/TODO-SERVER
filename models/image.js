const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/formdb');
const bodyParser = require ('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json())

const imageSchema = new mongoose.Schema({

    name:{ type: String},
    url: {type: String},
    originalName:{
        type: String
    }



})

        const Images = new mongoose.model("upload",imageSchema);

        module.exports= Images;