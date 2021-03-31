var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const test =  require('./models/from')
mongoose.connect('mongodb://localhost:27017/testdb');
//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var from = require('./models/from');
var form2 = require('./models/form2');
var cors = require('cors');
const Form = require('./models/form2');

 
 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(bodyParser.json())
// app.use(Form);
 
// app.get('/', function(req, res) { 
//   res.send('working'); 
// });
// app.post('/enroll', function(req, res){
//   console.log(req.body);
  
 
//   var myData =  req.body;
//   const newData = new Form(myData);
  
//   newData.save()
//   .then(item => {
//   res.send("item saved to database");
//   })
//   .catch(err => {
//   res.status(400).send("unable to save to database");
//   });

  
 

//   // test.save()
  
// })
// app.post('/delete', function(req,res){
//   console.log('ruhg',req.body)
//   Form.remove({_id:mongoose.Types.ObjectId(req.body.id)})
//   .exec(function(err,forms){
//     if(err){
//       console.log('err')

//     } else {
//       res.json(forms);
//     }
//   });
// });



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(Form);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', function(req, res) { 
  res.send('working'); 
});
//  app.use(form);
 console.log(from)
app.listen(3000, () =>{
  console.log('server on 3000');
})

// fs.readFile("./data.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   console.log("File data:", jsonString);
// });



module.exports = app;
