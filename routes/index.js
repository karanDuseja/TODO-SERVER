var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = "C:/Users/admin/server/public/images"
// const path =process.env
const Form = require('../models/form2');
const Images = require('../models/image');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Expressss' });
  res.send("gggggggg hhhhhhhhhh")
console.log()
  
  
});
router.get('/getdataid/:id', function(req,res){
  console.log("llllllllllllllllllllllllll",req.params)

  Form.find({_id:mongoose.Types.ObjectId(req.params.id)})
  .exec(function(err,forms){
    if(err){
      console.log('err')

    } else {
      res.send(forms)
      console.log(forms);
    }
  });
});
router.post('/update', function(req,res){
  console.log("ssssssssss",req.body)
 
  Form.findOneAndUpdate({_id:mongoose.Types.ObjectId(req.body.id)},

 {$set: {email: req.body.email,
        password : req.body.password} ,  

}

, function (err, doc) {

  if(err){
    console.log('err')

  } else {
    res.send(doc)
    console.log(doc);
  }
  
});
})

router.post('/enroll', function(req, res){
  console.log(req.body);
  
 
  var myData =  req.body;
  const newData = new Form(myData);
  
  newData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });

  
 

  // test.save()
  
})
router.post('/delete', function(req,res){
  console.log('ruhg',req.body)
  Form.remove({_id:mongoose.Types.ObjectId(req.body.id)})
  .exec(function(err,forms){
    if(err){
      console.log('err')

    } else {
      res.json(forms);
    }
  });
});
router.get('/form2', function(req,res){
  Form.find({})
  .exec(function(err,forms){
    if(err){
      console.log('err')

    } else {
      res.json(forms);
    }
  });
});

const storage = multer.diskStorage({
  destination: (req,file,callBack)=> {
    
    callBack(null, path)
  },
  filename: (req, file, callBack)=>{
    

    callBack(null, `name_${file.originalname}`)
  }
})

var upload = multer({storage: storage});

router.post('/uploadimage',upload.array('files'),(req, res, next)=>{
  try{
    console.log("rrrrrrr",req.files);
  for(var i=0;i< req.files.length;i++){
    var data = {
      name:req.files[i].filename,
    url:'http://localhost:3000/'+ req.files[i].filename,
    originalName:req.files[i].originalname
    
    }
    const imageData = new Images(data);
    imageData.save()
  }
  // res.send(files)
    // const files = req.files;
    // var data = {
    //   name:files.filename,
    // url:'http://localhost:3000/'+ files.filename,
    // originalName:files.originalname
    
    // }
    // const imageData = new Images(data);
    // imageData.save()

    // console.log("kllllllljkkij",files.filename);
    // if(!file){
    //   const error = new Error('no file')
    //   error.httpStatusCode = 400
    //   return next(error)
  
    // }

    
  }catch(err){
    console.log("jjjjjjjjjjjjjjjjj",err)
  }
})

router.get("/displayimage", function(req,res){
  Images.find({})
  .exec(function(err,images){
    if(err){
      console.log('err')

    } else {
      res.send(images);
    }
})
})

// function abc(){
//   Images.find({})
//   .exec(function(err,images){
//     if(err){
//       console.log('err')

//     } else {
//       console.log(images);
//     }
// })
// }
// abc()
// const imageData = new Images();
// imageData.remove({})
module.exports = router;






// router.post('/uploadimage',upload.single('files'),(req, res, next)=>{
//   try{
//     // console.log("rrrrrrr",req.);
  
//     const file = req.file;
//     var data = {
//       name:file.filename,
//     url:'http://localhost:3000/'+ file.filename,
//     originalName:file.originalname