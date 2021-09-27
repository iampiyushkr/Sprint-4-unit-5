const express=require("express");
const { model } = require("mongoose");
const router=express.Router()
const User=require("../model/user.model")


router.post("",async (req,res)=>{
    const user=await User.create(req.body);
    return res.status(201).json({user});
})

module.exports=router;