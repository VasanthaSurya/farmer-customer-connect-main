const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const user = require('../../models/user');

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email})
    .exec((error, user) => {
        // console.log(req.body)
        if(user){
        return res.status(400).json({
            message: 'Admin User Already registered'
        });
    }
        const {
            firstName,
            lastName,
            username,
            email,
            password,
            role
        } = req.body;
        const _user = new User({ 
            firstName,
            lastName,
            username: shortid.generate(),
            email,
            password,
            role
        });

        _user.save((error, data) => {

            if(error){
                throw new Error(warning)
                return res.status(400).json({
                    message: 'Something went wrong'
                });
                
            }

            if(data){
                return res.status(201).json({ 
                    message: 'Admin created successfully'
                })
            }
        })

    });
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec(async (error, user) => {
        if(error) return res.status(400).json({ error });
        if(user){
            const isPassword = await user.authenticate(req.body.password)
            if(isPassword){

                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d' });
                const { firstName,lastName, email, role, fullName } = user;
                res.cookie('token', token, { expiresIn: "7d" });
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

exports.signout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
      message: "Signout successful...!"
    });
  };