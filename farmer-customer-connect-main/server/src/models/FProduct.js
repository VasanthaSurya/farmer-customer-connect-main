const mongo = require('mongoose');
const Users = require('./user');

var Add_Product_Farmer = new mongo.Schema({

    farmer_email: {
        type:String
    },
    product_name: {
        type: String,
        required: true
    },
    product_type: {
        type: String,
        required: true
    },
    
    qty: {
        type:Number,
        required:true
    },
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
    }
});

addProduct_Farmer = mongo.model('Add_Product_Farmer', Add_Product_Farmer);

module.exports = addProduct_Farmer;
