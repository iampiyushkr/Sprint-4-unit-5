const multer=require("multer");
const path=require("path");
const storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,path.join(_dirname,"../uploads"));
    },
    filename:function(req,file,callback){
        const uniqueSuffix=Date.now()+"-"+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+"-"+uniqueSuffix+file.originalname)
    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype==="image/jpeg"||
    file.mimetype==="image/png"||
    file.mimetype==="image/jpg"
    
    ){
        callback(null,true);
    }else{
        callback(null,false)
    }
};


const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*500,
        files:5
    },
    fileFilter:fileFilter
})

module.exports=upload