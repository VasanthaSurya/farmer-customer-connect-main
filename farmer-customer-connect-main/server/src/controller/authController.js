const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.signup = (req, res) => {

    const errors = validationResult(req);
    return res.status(400).json({ errors: errors.array() })

    User.findOne({ email: req.body.email})
    .exec((error, user) => {
        // console.log(user.email)
        if(user) return res.status(400).json({
            message: 'User Already registered'
        });
        const {
            firstName,
            lastName,
            username,
            email,
            password
        } = req.body;
        const _user = new User({ 
            firstName,
            lastName,
            username,
            email,
            password
        });

        _user.save((error, data) => {
            // console.log(error)
            if(error){
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }

            if(data){
                return res.status(201).json({ 
                    message: 'Your account was created successfully'
                })
            }
        })

    });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(error) return res.status(400).json({ error });
        console.log(error);
        if(user){
            if(user.authenticate(req.body.password)){

                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d' });
                const { firstName,lastName, email, role, fullName } = user;
                res.status(200).json({
                    token,
                    user: {
                        firstName, lastName, email, role, fullName
                    }
                });

            } else{
                return res.status(400).json({
                    message: "Invalid Password"
                })
            }
        } else{
            return res.status(400).json({message: 'Something is wrong...Try again Later..!!'})
        }
    });
}
