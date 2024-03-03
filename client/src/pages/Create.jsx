import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Create() {


    const navigate=useNavigate()
    const [data,setData]=useState(null)
    const [error,setError]=useState(false)
    const [formData,setFormData]=useState({
        name: '',
        email: '',
        mobile: '',
        designation: 'hr',
        gender: 'male',
        courses: []
    })




    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                courses: checked
                    ? [...formData.courses, value]
                    : formData.courses.filter(course => course !== value)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };



    const handleSubmit=async (e)=>{
        try {
            e.preventDefault()
            const res=await fetch("http://localhost:4000/api-v1/employee/createEmp",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    
                },
                body:JSON.stringify(formData)
            })

         const data=await res?.json()
        //  console.log(data)
         setData(data)
       
        if(data?.error){
            // console.log(data?.error)
            setError(data?.error)
            
        }else{
            navigate("/dashboard")
        }

         
            
        } catch (error) {
            console.log(error)
        }
     
   

     
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <table>

        <Navbar/>
        <tr>
            <th colSpan={6}>Create Employee</th>
        </tr>

        <tr>
          
            <td > Name </td>
            <td > <input type='text' name='name' value={formData.name}onChange={handleChange} /></td>
          
        </tr>
        <tr>
           
            <td >Email</td>
            <td > <input  type='email' name='email' value={formData.email}  onChange={handleChange}/></td>
           
        </tr>
        <tr>
            <td>Mobile number</td>
            <td><input type='text' name='mobile' value={formData.mobile}  onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>
              <label htmlFor='designation'  >Designation</label>
            </td>
            <td>
            <select id="designation" name="designation"  value={formData.designation} onChange={handleChange}>
                 <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                 <option value="sales">Sales</option>
                 
            </select>
            </td>
           
        </tr>
        <tr>
            <td>Gender</td>
        <td>
            <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            <label htmlFor="male">Male</label>

            <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            <label htmlFor="female">Female</label>
        </td>
        </tr>

        <tr>
            <td>Course</td>
            <td>
            <input type="checkbox" id="mca" name="mca" value="MCA" checked={formData.courses.includes('MCA')} onChange={handleChange} />
            <label htmlFor="mca">MCA</label>
            <input type="checkbox" id="bca" name="bca" value="BCA" checked={formData.courses.includes('BCA')} onChange={handleChange} />
            <label htmlFor="bca">BCA</label>
            <input type="checkbox" id="bsc" name="bsc" value="BSC" checked={formData.courses.includes('BSC')} onChange={handleChange} />
            <label htmlFor="bsc">BSC</label>
        </td>  
        </tr>
        <tr>
            <td> <label>File Upload</label></td>
           
           <td><input type="file" /></td>
        </tr>
        <tr>
                        <td style={{color:"red"}}>
                            {error ? data ?.error : ""}
                        </td>
                    </tr>
        <tr style={{textAlign:"center"}}>
                        <td colSpan={2}>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                  

        </table>
        </form>
       
        
    </div>
  )
}

export default Create