var Request = require('request')
const  Mongoose = require("mongoose");
const InputApiSchema = require('./models/InputApiSchema.js')
var input;


Request.get("https://demo7242716.mockable.io/products" , (error , response , body)=>{

if(error)
{
    return console.dir(error);
}

//console.dir(JSON.parse(body));

 input= JSON.parse(body);
})

//async function loadData() {
    try {
      //await InputApiSchema.insertMany(input);
      InputApiSchema.insertMany(input);

      console.log('Done!');
      //process.exit();
    } catch(e) {
      console.log(e);
      //process.exit();
    //}
  };







