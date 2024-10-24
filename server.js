const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://chinmayj360:%23CJ%402024@mindmentorcluster.o2i19.mongodb.net/mydatabase?retryWrites=true&w=majority")

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

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// // Serve users.html
// app.get("/users", function(req, res) {
//     res.sendFile(path.join(__dirname, "users.html"));
// });

// // Serve certified-psychologists.html
// app.get("/certified-psychologists", function(req, res) {
//     res.sendFile(path.join(__dirname, "certified-psychologists.html"));
// });

// // Serve admin.html
// app.get("/admin", function(req, res) {
//     res.sendFile(path.join(__dirname, "admin.html"));
// });

// // Serve register.html
// app.get("/register", function(req, res) {
//     res.sendFile(path.join(__dirname, "register.html"));
// });

// // Serve login.html
// app.get("/login", function(req, res) {
//     res.sendFile(path.join(__dirname, "login.html"));
// });

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
