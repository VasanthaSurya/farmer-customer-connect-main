const { request } = require('express');
const express=require('express');
const router=express.Router();
const multer = require('multer')
const User=require('../models/user')
const AddToCartProduct=require('../models/AddToCart')

const storage = multer.diskStorage({
    destination: (req, file, callback)  =>{
        callback(null,"C:/Users/hbkes/Desktop/FCC/FCC/FCC_front/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//request get all products
router.get('/',(req,res)=>{
  AddToCartProduct.find()
    .then(AddToCartProduct => res.json(AddToCartProduct))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.get('/:id',(req,res)=>{
    AddToCartProduct.find()
      .then(AddToCartProduct => res.json(AddToCartProduct))
      .catch(err => res.status(400).json(`Error: ${err}`))
  });

router.post('/cart', upload.single("product_image"), (req,res)=>{
    const Cart_Products = new AddToCartProduct({
        customer_email:req.body.customer_email,
        product_name:req.body.product_name,
        product_type:req.body.product_type,
        farmer_name:req.body.farmer_name,
        // qty:req.body.qty,
        price:req.body.price,
        date:req.body.date,
        description:req.body.description,
        product_image:req.body.product_image,
        quantityByCustomer:req.body.quantityByCustomer,
    })
    Cart_Products.save()
    .then(() => res.json('New Product added successfully...!!!'))
    .catch(err => res.status(400).json('Error: '+err));
})
// request find product by id











// router.get('/:id',(req,res)=>{
//     FProduct.findById(req.params.id)
//     .then(FProducts => res.json(FProducts))
//     .catch(err => res.status(400).json(`Error: ${err}`))
// });


//request find Product by id and update
router.put('/update-AddToCart/:id',upload.single("product_image"), (req,res)=>{
    AddToCart.findById(req.params.id)
    .then(AddToCart => {
        AddToCart.customer_email=req.body.customer_email;
        AddToCart.product_name=req.body.product_name;
        AddToCart.product_type=req.body.product_type;
        AddToCart.farmer_name=req.body.farmer_name,
        // AddToCart.qty=req.body.qty;
        AddToCart.price=req.body.price;
        AddToCart.date=req.body.date;
        AddToCart.description=req.body.description;
        AddToCart.product_image=req.file.originalname;
        AddToCart.quantityByCustomer=req.body.quantityByCustomer;

        AddToCart
        .save()
        .then(()=> res.json('The Product got updated successfully!!!'))
        .catch(err => res.status(400).res.json(`Error: ${err}`))
    })
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

// //request find Product by id and delete
router.delete('/:id',(req,res)=>{
    AddToCart.findByIdAndDelete(req.params.id)
    .then(()=> res.json('The Product got deleted successfully!!!'))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

module.exports=router;