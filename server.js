const express=require("express")
const connect =require("./src/db");
const app=express();
app.use(express.json());


app.listen(9876,async()=>{
    await connect()
    console.log("listining 9876")
})