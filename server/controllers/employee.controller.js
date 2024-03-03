import { Employee } from "../models/employee.model.js"


const createEmployee=async(req,res)=>{
     try {
         const {name,email,mobile,designation,gender,courses}=req.body
   
        if(!name || !email || !mobile || !designation || !courses) {
           return res.status(400).json({error:"All Fields are required"})
        }
   
        const existAlready=await Employee.findOne({email})
        if(existAlready){
           return res.status(400).json({error:"User Already Exist"})
        }
   
        const employee=await Employee.create({
           name,
           email,
           mobile,
           designation,
           gender,
           courses
        })
   
        if(!employee){
           return res.status(500).json({error:"Error occur when creating employee"})
        }
   
        return res.status(200).json({
           success:true,
           employee:employee
        })
     } catch (error) {
        console.log(error)
     }

}



const getEmployee=async(req,res)=>{
   try {
      const allEmployee=await Employee.find()
      .sort({  name: 1, email: 1,createdAt: -1 });
 
      if(!allEmployee){
         return res.status(400).json({error:"no employees are created"})
      }
      

      const totalDocuments = await Employee.countDocuments();
      return res.status(200).json({
         success:true,
         allEmployee,
         totalDocuments
      })
   } catch (error) {
    console.log(error)
   }
}

const updateEmp=async(req,res)=>{
  try {
    const{ id}=req.params
   
    const {name,email,mobile,designation,gender,courses}=req.body
   const employee= await Employee.findByIdAndUpdate(id,{
        $set:{
          name,email,mobile,designation,gender,courses
        }
    },{new :true})
 
    if(!employee){
       return res.status(400).json({error:"Update Failed"})
    }
 
    return res.status(200).json({
       success:true,
       employee
    })
  } catch (error) {
      console.log(error)
  }
}

const deleteEmp=async(req,res)=>{
   const {id}=req.params

  const employee= await Employee.findByIdAndDelete(id)

  return res.status(200)
}




export {
    createEmployee,
    getEmployee,
    updateEmp,
    deleteEmp

}