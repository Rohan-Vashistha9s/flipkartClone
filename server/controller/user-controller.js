
import User from "../model/user-schema.js";




export const  userSignup = async (request,response) => {
       try{
        const user = request.body;
           new newUser = new User(user);
        await newUser.save();
       }
       
       catch(error){
        console.log("error while calling usersignup",error);
       }
    }