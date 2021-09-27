const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true},
        password:{type:String,require:true},
        role:{type:String,require:true},
        photo_url:{type:String,require:true},

    },
    {
        versionKey:false,
        timestamps:true,
    }
);

const User=mongoose.model("user",userSchema);
module.exports=User;