const express = require("express");
const app = express();

app.use("/vinod",(req,res)=>{
    console.log("Hey this is main URL")
})

app.listen("5000", ()=>{
    console.log("Backend is running");
});