const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
 const jwt  = require('jsonwebtoken');
 require("dotenv").config();
const UserSchema = mongoose.Schema({
 
  
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
    },
    
    password1: {
        type: String,
        required : true,
    },
    
    cpassword: {
        type: String,
        required : true,
    },
    tokens:[
        {
            token:{
                type: String,
                required : true,
            }
        }
    ]
    
   
})




// we are hashing the password
 
UserSchema.pre('save' , async function(next) {

    if(this.isModified('password1')){
            this.password1 = await bcrypt.hash(this.password1, 12);
            this.cpassword = await bcrypt.hash(this.cpassword, 12);
    
        }
        next();

});
//we are generating token
UserSchema.methods.generateAuthToken =  async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    }
    catch (err) {
        console.log(err);
    }

    
}

const User = mongoose.model("user", UserSchema)


module.exports = User; 