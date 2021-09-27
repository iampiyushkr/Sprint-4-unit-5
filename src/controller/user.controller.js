const express=require("express");


const User=require("../model/user.model")
const upload=require("../middlewares/file_upload")
const router=express.Router()
router.get("",async (req,res)=>{
    const user=await User.find().lean().exec();

    return res.status(201).json({user});
})
router.post("",async (req,res)=>{
    const user=await User.create(req.body);

    return res.status(201).json({user});
})
router.post("/single",upload.single("photo_url"),async (req,res)=>{
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