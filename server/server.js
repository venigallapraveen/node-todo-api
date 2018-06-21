const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');



let app = express();

app.use(bodyParser.json());


//todo app

app.post('/todos',(req,res)=>{
var todo = new Todo({
    text:req.body.text
});

todo.save().then((doc)=>{
    res.send(doc);
},(e)=>{
   res.status(400). send(e);
});
});


app.listen(3000,()=>{

    console.log("started on port 3000");
});






