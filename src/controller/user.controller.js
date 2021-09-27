const express=require("express");


const User=require("../model/user.model")
const upload=require("../middlewares/file_upload")
const router=express.Router()

router.post("/single",upload.single("productImages"),async (req,res)=>{
    const user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:req.body.role,
        photo_url:req.file.path

    });
    return res.status(201).json({user});
})

module.exports=router;