const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testdb');
const bodyParser = require ('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json())

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required : false
    },
    age: {
        type: Number,
        required : false
    },
    
  
})

const Test = new mongoose.model("Test",testSchema);
var arr=[{
    name: "karan",
    age: 22
},{
    name: "yash",
    age: 23
}]

var save = function (){
    for( var i=0; i<arr.length; i++){
     
        const docTest= new Test(arr[i])
        docTest.save(arr[i],function(err,res){
            if(err){
                // console.log(err)
            }
            else{
                // console.log(res)
            }
        }) 
    }
}

save();
// const docTestupdate= new Test()
Test.update({name:"karan"},{$set:{age:477}},function(err,resp){
    if(err){
        // console.log("err",err)
    }
    else{
        // console.log("reeee",resp)
    }

})

Test.deleteOne({ name: 'karan' });
var object = [
    {
      name: "John",
      age: 21
    },
    {
      name: "Sam",
      age: 25
    },
    {
      name: "Lisa",
      age: 33
    }
  ];

Test.insertMany(object, function(err, result) {
    if (err) {
      // console.log(err);
    } else {
      // console.log(result);
    }
  });



//console.log(docTest.save());
module.exports= Test;