const User=require('../models/user.js');

const express = require('express');
const { signup, signin } = require('../controller/authController')


const { validateSignupRequest,validateSigninRequest, isRequestValidated } = require('../validators/auth');

const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

// router.get('/foc',(req,res)=>{
//     User.find()
//     .then(Users => res.json(Users))
//     .catch(err => res.status(400).res.json(`Error: ${err}`))
// });

// router.put('/update/:id',(req,res)=>{
//     User.findById(req.params.id)
//     .then(Users => {
//         Users.firstName=req.body.firstName;
//         Users.lastName=req.body.lastName;
//         Users.email=req.body.email;
//         Users.userType=req.body.userType;
//         Users.gender=req.body.gender;
//         Users.contact=req.body.contact;
//         Users.house_no=req.body.house_no;
//         Users.street=req.body.street;
//         Users.village_city=req.body.village_city;
//         Users.district=req.body.district;
//         Users.state=req.body.state;
//         Users.pincode=req.body.pincode;
//         Users.servicableAreas=req.body.servicableAreas;
//         Users
//         .save()
//         .then(()=> res.json('The profile got updated successfully!!!'))
//         .catch(err => res.status(400).res.json(`Error: ${err}`))
//     })
//     .catch(err => res.status(400).res.json(`Error: ${err}`))
// });

// router.get('/:id',(req,res)=>{
//     User.findById(req.params.id)
//     .then(Users => res.json(Users))
//     .catch(err => res.status(400).res.json(`Error: ${err}`))
// });

module.exports = router;