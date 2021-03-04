var Request = require('request')
const  Mongoose = require("mongoose");
const InputApiSchema = require('./models/InputApiSchema.js')


Request.get("https://demo7242716.mockable.io/products" , (error , response , body)=>{

if(error)
{
    return console.dir(error);
}

//console.dir(JSON.parse(body));

const input = JSON.parse(body);


//var GenerateSchema = require('generate-schema');

//InputSchema = GenerateSchema.mongoose(input);
//console.log(InputSchema);

//const finalSchema = new Mongoose.Schema({InputSchema});

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

  //module.exports = Mongoose.model('InputSchema',InputSchema);

})





