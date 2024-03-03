import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../utils';

function SignUp() {
   const navigate=useNavigate()
   const [error,setError]=useState(false)
   const [data,setData]=useState(null)

   const [formData, setFormData] = useState({
    username: '',
    password: ''
});

function handleChange(e){
      const {name,value}=e.target
      setFormData({...formData,[name]:value})
}

// console.log(formData)

   const onSubmit=async (event)=>{
      
        //  console.log(formData)

     try {
        event.preventDefault() 
      const res=await fetch("http://localhost:4000/api-v1/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify(formData)
      })
      const data=await res?.json()
      setData(data)


      if(data?.error){
        console.log(data?.error)
        setError(data?.error)
      }else
     { 
      console.log(data?.user)
      localStorage.setItem("userData", JSON.stringify(data?.user));

       navigate("/dashboard")}

     } catch (error) {
        console.log(error)
     }
      
    }

   return (
    <div>
        <form onSubmit={onSubmit}>
  
        <table>
            <tr>
                <th colSpan={6}>Login Page</th>
            </tr>
            <tr>
                <td></td>
                <td>Username</td>
                <td colSpan={2}><input type="text" name='username' value={formData.username} onChange={(e)=>{handleChange(e)}} /></td>
                < td></td>
                <td></td>
            </tr>
            <tr>
                <td colSpan={6}></td>
            </tr>
            <tr>
            <td></td>
                <td>Password</td>
                <td colSpan={2}><input type="password" name='password' value={formData.password} onChange={(e)=>{handleChange(e)}}/></td>
                <td> </td>
                <td></td>
                
            </tr>
            <tr>
                <td colSpan={6}  style={{color:"red"}}>{error  ? data?.error:" "}</td>
            </tr>
            <tr>
                <td colSpan={2}></td>
               <td colSpan={2}  style={{backgroundColor:"green"}}> <button type="submit"> Login </button></td>
                <td colSpan={2}></td>
            </tr>
            <tr>
                <td colSpan={6}  rowSpan={2}></td>
            </tr>
        </table>
        </form>
    </div>
  )
}

export default SignUp