const express = require('express');
const User=require('../../models/user');
const { signup, signin, signout } = require('../../controller/admin/authController');
const { requireSignin } = require('../../middleware');
const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup',validateSignupRequest, isRequestValidated, signup);

router.post('/admin/signin',validateSigninRequest, isRequestValidated, signin);
router.post('/admin/signout', requireSignin, signout)

router.get('/admin/foc',(req,res)=>{
    User.find()
    .then(Users => res.json(Users))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

router.put('/update/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(Users => {
        Users.firstName=req.body.firstName;
        Users.lastName=req.body.lastName;
        Users.email=req.body.email;
        Users.userType=req.body.userType;
        Users.gender=req.body.gender;
        Users.contact=req.body.contact;
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
        .catch(err => res.status(400).res.json(`Error: ${err}`))
    })
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

router.get('/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(Users => res.json(Users))
    .catch(err => res.status(400).res.json(`Error: ${err}`))
});

module.exports = router;