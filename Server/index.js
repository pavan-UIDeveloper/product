const appconfig = require('./config')
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')


const app = express();

const bodyparser = require('body-parser')
const categoryRouter = require('./router/category')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET,DELETE")
    next();
})


app.use('/category',categoryRouter)
 

mongoose.connection.on('error', function(err) {
    if(err) {
        console.log(err)
    }
})

mongoose.connection.on('open', function(err) {
    if(err) {
        console.log(err)

    } else {
        console.log('connection successful')
    }
})


app.listen(appconfig.port,()=>{
    let db = mongoose.connect(appconfig.db.url, ({ useNewUrlParser: true }))
    console.log('Port is running in ' + appconfig.port)
});