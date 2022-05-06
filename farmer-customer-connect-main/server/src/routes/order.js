const { request } = require('express');
const express=require('express');
const router=express.Router();
const multer = require('multer')
const User=require('../models/user')
const orders=require('../models/orders')

const storage = multer.diskStorage({
    destination: (req, file, callback)  =>{
        callback(null,"C:/Users/surya/Desktop/farmer-customer-connect-main/farmer-customer-connect-main/orderuploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//request get all products
router.get('/',(req,res)=>{
  orders.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.get('/:id',(req,res)=>{
    orders.find()
      .then(orders => res.json(orders))
      .catch(err => res.status(400).json(`Error: ${err}`))
  });

router.post('/orders', upload.single("product_image"), (req,res)=>{
    const order = new orders({
        farmer_email:req.body.farmer_email,
        customer_email:req.body.customer_email,
        product_name:req.body.product_name,
        product_type:req.body.product_type,
        // qty:req.body.qty,
        price:req.body.price,
        date:req.body.date,
        product_image:req.body.product_image,
        quantityByCustomer:req.body.quantityByCustomer,
        order_status:req.body.order_status
    })
    order.save()
    .then(() => res.json('New Product added successfully...!!!'))
    .catch(err => res.status(400).json('Error: '+err));
})
// request find product by id











router.get('/:id',(req,res)=>{
    FProduct.findById(req.params.id)
    .then(FProducts => res.json(FProducts))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

//request find Product by id and update
router.put('/update-FarmOrd/:id',(req,res)=>{
    orders.findById(req.params.id)
    .then(order => {
        // order.farmer_email=req.body.farmer_email;
        // order.customer_email=req.body.customer_email;
        order.product_name=req.body.product_name;
        order.product_type=req.body.product_type;
        // order.price=req.body.price;
        // order.quantityByCustomer=req.body.quantityByCustomer;
        // order.date=req.body.date;
        // order.product_image=req.body.product_image;
        order.order_status=req.body.order_status;
        order
        .save()
        .then(()=> res.json('The Product got updated successfully!!!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
});

// //request find Product by id and delete
router.delete('/remove/:id',(req,res)=>{
    orders.findByIdAndDelete(req.params.id)
    .then(()=> res.json('The Product got deleted successfully!!!'))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

module.exports=router;
