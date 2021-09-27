const mongoose=require("mongoose")
const connect=async()=>{
    return await mongoose.connect(" mongodb://127.0.0.1:27017/",{
        useNewUrlParser:true,
        useUnifiedgTopology:true,
        useFindTopology:false,
        useCreateIndex:true,
    })
}
module.exports=connect;