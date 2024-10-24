const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://darshangowdakr:admin@cluster0.tnuqbcf.mongodb.net/mental_db?retryWrites=true&w=majority&appName=Cluster0")

//create data schema
const RegisterSchema={
    AccountType:String,
    FullName:String,
    Email:String,
    Password:String
}

const regData=mongoose.model("regData",RegisterSchema);

const PORT=3000;

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html"+"/users.html"+"/register.html");
// })
app.get("/",function(req,res){
    res.sendFile(__dirname+"/register.html");
})



app.post("/register",function(req,res){
    let newData=new regData({
        AccountType:req.body.accounttype,
        FullName:req.body.name,
        Email:req.body.email,
        Password:req.body.password
    });
    newData.save();
    res.redirect('/');
})

app.listen(PORT,function(){
    console.log(`Service is running on port ${PORT}`);
}) 
