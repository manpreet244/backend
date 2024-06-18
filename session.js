// install express session
// npm install express-session
const express = require('express');
const session = require('express-session');

const app = express();
app.get('/',function(req,res){
    res.send("hiiy")
})
app.listen(3001)