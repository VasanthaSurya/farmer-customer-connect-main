const { request } = require('express');
const express=require('express');
const router=express.Router();
const User=require('../models/user')

//request get all user details
router.get('/',(req,res)=>{
    User.find()
    .then(Users => res.json(Users))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

router.post('/add',(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const userType=req.body.userType;
    // const gender=req.body.gender;
    const contactNumber=req.body.contactNumber;
    const house_no=req.body.house_no;
    const street=req.body.street;
    const village_city=req.body.village_city;
    const district=req.body.district;
    const state=req.body.state;
    const pincode=req.body.pincode;
    const servicableAreas=req.body.servicableAreas;

    const profile_d=new User({
        firstName,lastName,email,userType, contactNumber,house_no, street, village_city, district, state, pincode, servicableAreas

    })
    profile_d.save()
    .then(() => res.json('profile add!'))
    .catch(err => res.status(400).json('Error: '+err));

})

//request find user by id
router.get('/it/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(Users => res.json(Users))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

//request find user by id and update
router.put('/update-profile/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(Users => {
        Users.firstName=req.body.firstName;
        Users.lastName=req.body.lastName;
        Users.email=req.body.email;
        Users.userType=req.body.userType;
        // Users.gender=req.body.gender;
        Users.contactNumber=req.body.contactNumber;
        Users.house_no=req.body.house_no;
        Users.street=req.body.street;
        Users.village_city=req.body.village_city;
        Users.district=req.body.district;
        Users.state=req.body.state;
        Users.pincode=req.body.pincode;
        Users.servicableAreas=req.body.servicableAreas;
        Users
        .save()
        .then(()=> res.json('The profile got updated successfully!!!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

//request find user by id and delete
router.delete('/:id',(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=> res.json('The profile got deleted successfully!!!'))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

module.exports=router;