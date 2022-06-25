import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("status 200 | ok")
});

app.listen("5959",()=>{
    console.log("server is running on port 5959");
})