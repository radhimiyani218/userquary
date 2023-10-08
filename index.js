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
    const data=await user.find({gender: "Female", language: {$in: ["Kannada", "Hindi"]}})
    res.send(data)
}
app.get("/que3"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "Male", language: "Hindi"}, {gender: "Female", language: "Kannada"}]})
    res.send(data)
}
app.get("/que4"),async(req,res)=>{
    const data=await user.find({shirt_size: "S"})
    res.send(data)
}
app.get("/que5"),async(req,res)=>{
    const data=await user.find({gender: "Female", shirt_size: "XL"})
    res.send(data)
}
app.get("/que6"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "Male", language: "English"}, {gender: "Female", language: "Hindi"}]})
    res.send(data)
}
app.get("/que7"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "Male", language:{$in:["English","Hindi"]}}, {gender: "Female", language:{$in:["Kannada","German"]}}]})
    res.send(data)
}
app.get("/que8"),async(req,res)=>{
    const data=await user.find({$or: [{gender: "Female", language:"Bengali",shirt_size:"XL"},{gender: "Male", language:"German",shirt_size:{$in:['L','M']}}]})
    res.send(data)
}
app.get("/que9"),async(req,res)=>{
    const data=await user.find({gender: "Female", language:{$in:["Hindi","Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam"]}})
    res.send(data)
}
app.get("/que10"),async(req,res)=>{
    const data=await user.find({gender: "Male", language:"Korean"})
    res.send(data)
}



app.listen(8090,()=>{
    console.log("listening part 8090");
    connected()
});
