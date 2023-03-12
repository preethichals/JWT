const mongoose = require('mongoose')


module.exports = () => {
 try {
    mongoose.connect(process.env.ATLAS_URI,{})
    console.log("Connected to database Successfull!!!")
 }
 catch (error) {
    console.log(error)
    console.log("Connection Failed!!!")

 }

}