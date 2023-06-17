const {SignupModel}=require('../Model/SignupModel')
const SignupController=async(req,res)=>
{
console.log(req.body.values)
const {name,rollNo,mobileNo,email,fatherName}=req.body.values;
try {
    const insertdoc= new SignupModel({
        Name:name,
        Rollno:rollNo,
        Mobileno:mobileNo,
        Email:email,
        Fathername:fatherName,
    })
    await insertdoc.save()
    
    res.send({message:'successfully sign up'})
} catch (error) {
    res.send(error)

}

}
module.exports={SignupController}