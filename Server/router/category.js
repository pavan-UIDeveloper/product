const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const categorySchema = require('../models/categoryModel')
const categoryModel = mongoose.model('Category')
const shortid = require('shortid');


router.post('/category-save',(req,res)=>{
    console.log('pavan')
    console.log(req.body.category)
    let categorymodel = new categoryModel({
        categoryId:shortid.generate(),
        categoryName:req.body.category
    })
    categorymodel.save((err,result)=>{
        console.log(result)
        console.log(err)

        console.log('saving')
        if(err){
            res.send('saved un success fully')
        }else if(result){
            res.send("saved Success fullly")

        }
    })
})

module.exports = router;