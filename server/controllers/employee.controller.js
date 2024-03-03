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
 
      if(!allEmployee){
         return res.status(400).json({error:"no employees are created"})
      }
 
      return res.status(200).json({
         success:true,
         allEmployee
      })
   } catch (error) {
    console.log(error)
   }
}
export {
    createEmployee,
    getEmployee

}