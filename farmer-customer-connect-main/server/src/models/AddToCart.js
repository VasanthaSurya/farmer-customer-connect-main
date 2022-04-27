const mongo = require('mongoose');
const Users = require('./user');

var Add_Cart_Customer = new mongo.Schema({

    customer_email: {
        type:String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_type: {
        type: String,
        required: true
    },
    farmer_name:{
        type:String,
        required:true
    },
    
    // qty: {
    //     type:Number,
    //     required:true
    // },
    price: {
        type:Number,
        required:true
        },

    date: {
        // type:Date,
        type:String,
        required:true
        },

    description:{
        type:String,
        },

    product_image:{
        type:String,
    },
    quantityByCustomer: {
      type:Number,
      required:true
      }
});

AddToCart = mongo.model('Add_cart_Customer', Add_Cart_Customer);

module.exports = AddToCart;
