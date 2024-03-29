const express = require('express')
const router = express.Router()
const Product = require('../models/product')

const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const url = 
'mongodb+srv://user1:mongoatlasuser1@cluster0.di1hu.mongodb.net/LoopHealth?retryWrites=true&w=majority'

var input;

router.get('/' , async(req,res)=>{
    
    try{
          MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("LoopHealth");
            dbo.collection("Products").find({}, { projection: { _id: 0,productName: 1} }).toArray(function(err, result) {
              if (err) throw err;
              //console.log(result);
              res.json(result);
              db.close();
            });
          });
      }

    catch(err){res.send('Error ' + err)}

})

router.get('/details' , async(req,res)=>{
    
    try{
          MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("LoopHealth");
            dbo.collection("Products").find({}, { projection: { _id: 0} }).toArray(function(err, result) {
                if (err) throw err;
              //console.log(result);
              res.json(result);
              db.close();
            });
          });
      }
    catch(err){res.send('Error ' + err)}
})


router.get('/search' , async(req,res,next)=>{
    
    try{
          MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var query = req.query.q;

            var dbo = db.db("LoopHealth");
            dbo.collection("Products").find({$text:{$search:query}}, { projection: { _id: 0} }).toArray(function(err, result) {
                if (err) throw err;
              //console.log(result);
              res.json(result);
              db.close();
            });
          });
    }
    catch(err){res.send('Error ' + err)}
})

// Filters for brand , gender , category
router.get('/filters' , async(req,res,next)=>{
    
  try{
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;

          var brand = req.query.brand;
          var gender = req.query.gender;
          var category = req.query.category;

          if (typeof brand != "undefined")
          {
            console.log(brand);
            query=brand;
          }

          if (typeof gender != "undefined")
          {
            console.log(gender);
            query=gender;
          }

          if (typeof category != "undefined")
          {
            console.log(category);
            query=category;
          }

          var dbo = db.db("LoopHealth");
          dbo.collection("Products").find({$text:{$search:query}}, { projection: { _id: 0} }).toArray(function(err, result) {
              if (err) throw err;
            //console.log(result);
            res.json(result);
            db.close();
          });
        });
  }

  catch(err){res.send('Error ' + err)}

})



/*router.get('./consume' , async(req,res)=>{
    
    try{


        Request.get("https://demo7242716.mockable.io/products" , (error , response , body)=>{

            if(error)
            {
                return console.dir(error);
            }
            
            //console.dir(JSON.parse(body));
            
             input= JSON.parse(body);
            })

         const productsIp = await InputApiSchema.insertMany(input)
         res.json(productsIp)


    }

    catch(err){res.send('Error ' + err)}

})*/

module.exports = router