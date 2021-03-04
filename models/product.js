const  Mongoose = require("mongoose");

const productSchema = new Mongoose.Schema({

        "landingPageUrl": {
          "type": "String"
        },
        "productId": {
          "type": "Number"
        },
        "product": {
          "type": "String"
        },
        "productName": {
          "type": "String"
        },
        "rating": {
          "type": "Number"
        },
        "ratingCount": {
          "type": "Number"
        },
        "discount": {
          "type": "Number"
        },
        "brand": {
          "type": "String"
        },
        "searchImage": {
          "type": "String"
        },
        "effectiveDiscountPercentageAfterTax": {
          "type": "Number"
        },
        "effectiveDiscountAmountAfterTax": {
          "type": "Number"
        },
        "inventoryInfo": {
          "type": [
            "Mixed"
          ]
        },
        "sizes": {
          "type": "String"
        },
        "images": {
          "type": [
            "Mixed"
          ]
        },
        "gender": {
          "type": "String"
        },
        "primaryColour": {
          "type": "String"
        },
        "discountLabel": {
          "type": "String"
        },
        "discountDisplayLabel": {
          "type": "String"
        },
        "additionalInfo": {
          "type": "String"
        },
        "category": {
          "type": "String"
        },
        "mrp": {
          "type": "Number"
        },
        "price": {
          "type": "Number"
        },
        "colorVariantAvailable": {
          "type": "Boolean"
        },
        "discountType": {
          "type": "Date"
        },
        "catalogDate": {
          "type": "String"
        },
        "season": {
          "type": "String"
        },
        "year": {
          "type": "Date"
        },
        "systemAttributes": {
          "type": "Array"
        }
    


})

module.exports = Mongoose.model('Product',productSchema)
