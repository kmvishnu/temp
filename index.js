import express from "express";
const app = express();

app.listen(3033,()=>{
    console.log("running successfully on PORT : 3033");
})

app.get('/',(req,res)=>{
    res.json('API is running yeeee')
})
