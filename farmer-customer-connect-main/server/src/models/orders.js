const mongo = require('mongoose');
const Users = require('./user');

var order = new mongo.Schema({

    farmer_email: {
        type:String
    },
    customer_email: {
      type:String
  },
    product_name: {
        type: String,
        // required: true
    },
    product_type: {
        type: String,
        // required: true
    },
    // qty: {
    //     type:Number,
    //     required:true
    // },
    price: {
        type:Number,
        // required:true
        },
    quantityByCustomer: {
      type:Number,
    //   required:true
          },
    date: {
        // type:Date,
        type:String,
        // required:true
        },
    product_image:{
        type:String,
    },
    order_status:{
      type:Boolean
    },
},
{ timestamps: true });

orders = mongo.model('order', order);

module.exports = orders;
