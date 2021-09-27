const multer=require("multer");
const path=require("path");
const storage=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,"uploads/");
    },
    filename:function(req,file,callback){
        // const uniqueSuffix=Date.now()+"-"+Math.round(Math.random()*1E9)
        // callback(null,file.fieldname+"-"+uniqueSuffix+file.originalname)
        let ext=path.extname(file.originalname)
        callback(null,Date.now()+ext)

    }
})

const fileFilter=(req,file,callback)=>{
    if(file.mimetype=="image/jpeg"||
    file.mimetype=="image/png"||
    file.mimetype=="image/jpg"
    
    ){
        callback(null,true);
    }else{
        callback(null,false)
    }
};


const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5,
        files:5
    },
    fileFilter:fileFilter
})

module.exports=upload