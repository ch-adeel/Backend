const mongoose=require('mongoose')

const signupschema=mongoose.Schema({
    Name:{type:String},
    Rollno:{type:String},
    Mobileno:{type:Number},
    Email:{type:String},
    Fathername:{type:String},
})
const SignupModel=mongoose.model('userSignup',signupschema)

module.exports={SignupModel}