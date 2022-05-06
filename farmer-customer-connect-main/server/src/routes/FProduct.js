const { request } = require('express');
const express=require('express');
const router=express.Router();
const multer = require('multer')
const User=require('../models/user')
const FProduct=require('../models/FProduct')

const storage = multer.diskStorage({
    destination: (req, file, callback)  =>{
        callback(null,"C:/Users/surya/Desktop/farmer-customer-connect-main/farmer-customer-connect-main/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

//request get all products
router.get('/',(req,res)=>{
    FProduct.find()
    .then(FProducts => res.json(FProducts))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.post('/add-product', upload.single("product_image"), (req,res)=>{
    const FProduct_d = new FProduct({
        farmer_email:req.body.farmer_email,
        product_name:req.body.product_name,
        product_type:req.body.product_type,
        qty:req.body.qty,
        price:req.body.price,
        date:req.body.date,
        description:req.body.description,
        product_image:req.file.originalname,
    })
    FProduct_d.save()
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
router.put('/update-product/:id',upload.single("product_image"), (req,res)=>{
    FProduct.findById(req.params.id)
    .then(FProducts => {
        FProducts.product_name=req.body.product_name;
        FProducts.product_type=req.body.product_type;
        FProducts.qty=req.body.qty;
        FProducts.price=req.body.price;
        FProducts.date=req.body.date;
        FProducts.description=req.body.description;
        FProducts.product_image=req.file.originalname;
        FProducts
        .save()
        .then(()=> res.json('The Product got updated successfully!!!'))
        .catch(err => res.status(400).res.json(`Error: ${err}`))
    })
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

//request find Product by id and delete
router.delete('/:id',(req,res)=>{
    FProduct.findByIdAndDelete(req.params.id)
    .then(()=> res.json('The Product got deleted successfully!!!'))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

module.exports=router;
