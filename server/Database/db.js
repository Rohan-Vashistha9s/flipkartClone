import mongoose from "mongoose"



export const Connection = async() => {
const URL = 'mongodb+srv://vashistharohan15:flipkartClone@flipkartclone.yjkrhw7.mongodb.net/?retryWrites=true&w=majority';    
try{
   await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
    console.log("database connected successfully");
}
catch(error){
    console.log("error while connecting the database",error.message);
}
    
}