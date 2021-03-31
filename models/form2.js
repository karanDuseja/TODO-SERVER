const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/formdb');
const bodyParser = require ('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json())

const formSchema = new mongoose.Schema({
    email: {
        type: String,
        required : false
    },
    password: {
        type: String,
        required : false
     },
     
        radio: {
            type: String,
        required : false
        },
        secondradio: {
            type: String,
        required : false
        },
        thirdradio:{
            type: String,
        required : false
        },
        checkbox:{
            type: String
        }

        });

        const Form = new mongoose.model("Form",formSchema);

        var obj = {
        password: 'rfh',
        email:'shegt',
        radio: 'opt1' ,
        secondradio : 'opt2'  ,
    
        thirdradio : 'opt3' , 
        };

      

        // Form.insertMany(obj, function(err, result) {
        //     if (err) {
        //       console.log(err);
        //     } else {
        //       console.log(result);
        //     }
        //   });

          
        
          module.exports= Form;