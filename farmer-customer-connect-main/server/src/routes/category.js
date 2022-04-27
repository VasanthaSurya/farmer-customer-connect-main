const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify');
const router = express.Router();


router.post('/category/create', (req,res) => {

    const categoryObj = {
        name: req.body.name,
        slug:slugify(req.body.name)        
    }

    if(req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }

    // const cat = new cate

})

module.exports = router;