const express=require('express')
const connected=require("./db")
const user = require('./schema')
const app=express()
app.use(express.json())


app.get("/", async (req, res) => {
    const data = await user.find({ gender: "Female" })
    res.send(data)
})
app.get("/que2"),async(req,res)=>{
    const data=await user.find({gender: "female", language: {$in: ["Kannada", "Hindi"]}})
    res.send(data)
}
app.get("/que3"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "male", language: "Hindi"}, {gender: "female", language: "Kannada"}]})
    res.send(data)
}
app.get("/que4"),async(req,res)=>{
    const data=await user.find({shirt_size: "S"})
    res.send(data)
}
app.get("/que5"),async(req,res)=>{
    const data=await user.find({gender: "female", shirt_size: "XL"})
    res.send(data)
}
app.get("/que6"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "male", language: "English"}, {gender: "female", language: "Hindi"}]})
    res.send(data)
}
app.get("/que7"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "male", language:{$in:["English","Hindi"]}}, {gender: "female", language:{$in:["Kannada","German"]}}]})
    res.send(data)
}
app.get("/que8"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "female", language:"Bengali",shirt_size:"XL"},{gender: "male", language:"German",shirt_size:{$in:['L','M']}}]})
    res.send(data)
}
app.get("/que9"),async(req,res)=>{
    const data=await user.find({gender: "female", language:{$in:["Hindi","Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam"]}})
    res.send(data)
}
app.get("/que10"),async(req,res)=>{
    const data=await user.find({gender: "male", language:"Korean"})
    res.send(data)
}


app.listen(8090,()=>{
    console.log("listening part 8090");
    connected()
});