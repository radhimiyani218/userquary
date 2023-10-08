const mongoose=require('mongoose')

const schemauser=new mongoose.Schema({
    name: String,
    gender: String,
    shirt_size: String,
    language: String
})

let user=mongoose.model("user",schemauser)

module.exports=user