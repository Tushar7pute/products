const express = require('express')
const mongoose = require('mongoose')

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const url = 
'mongodb+srv://user1:mongoatlasuser1@cluster0.di1hu.mongodb.net/LoopHealth?retryWrites=true&w=majority'

const app = express()   // starts the express framework

mongoose.connect(url, {useNewUrlParser:true ,  useUnifiedTopology: true})
//.then(()=>{console.log('Mongo Connected')})

const con = mongoose.connection

con.on('open' , function(){console.log('mongoDB connected......')})


// mongo client
/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("LoopHealth");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });*/


app.use(express.json())

const productRouter = require('./routes/products')
app.use('/products' , productRouter)

const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log('Server started')})








