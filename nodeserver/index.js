'use strict';

var express = require('express'),
 http = require('http'),
 bodyParser = require('body-parser'),
 path = require('path');
var _ = require('lodash-node');
var students = require('./data/students.json');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../app')));

// app.get('/accounts/:orgId/profile', function (req, res) {
//   res.json(accountProfile);
// });

app.get('/students', function (req, res) {
  res.json(students);
});

app.get('/students/:id',function (req,res) {
    var id = req.params.id;
    var foundStudent = _.find(students, function (t) {
        console.log("finding!");
        return t.id == id;

    });
    res.json(foundStudent);
})

app.post('/students/:id',function (req,res) {
  var id = req.params.id;
  var student = req.body;
  console.log(student);

  var exisitngStudent = _.find(students,{id:id});

  if (exisitngStudent){
    console.log("existing student"+ exisitngStudent);
    exisitngStudent.name = student.name;
    exisitngStudent.school=student.school;
      exisitngStudent.city=student.city;
    console.log("existing student"+ exisitngStudent);
  } else {
   students.push(student);
  }
    res.json(student);
});


 app.delete('/students/:id',function (req,res) {
  var id = req.params.id;
   console.log('id in delete request : '+ id);
  _.remove(students, function(t){
    return t.id == id;
   });
 res.json({status: true})
 });


// app.delete('/todos/completed',function (req,res) {
//   todos.foreach(function (todo) {
//     if (todo.isDone == true){
//       _.remove(todo);
//     }
//   })
// })

app.get('/*', function (req, res) {
  res.json(404, {status: 'not found'});
});

app.post('/*', function (req, res) {
  console.log(req.body);
  setTimeout(function () {
    res.send(req.body);
  }, 2000);
});


app.listen(21000, function () {
  console.log("Server ready at http://localhost:21000");
});