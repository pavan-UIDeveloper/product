const mongoose = require('mongoose')
const schema = mongoose.Schema

let category = new schema({
    categoryId:String,
    categoryName:String
})

mongoose.model('Category',category)