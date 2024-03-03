import React from 'react'
import Navbar from '../components/Navbar'

function Create() {
  return (
    <div>
        <table>

        <Navbar/>
        <tr>
            <th colSpan={6}>Create Employee</th>
        </tr>

        <tr>
          
            <td > Name </td>
            <td > <input type='text'  /></td>
          
        </tr>
        <tr>
           
            <td >Email</td>
            <td > <input  type='email'/></td>
           
        </tr>
        <tr>
            <td>Mobile number</td>
            <td><input type='text'/></td>
        </tr>
        <tr>
            <td>
              <label for='designation'  >Designation</label>
            </td>
            <td>
            <select id="designation" name="designation">
                 <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                 <option value="sales">Sales</option>
                 
            </select>
            </td>
           
        </tr>
        <tr>
            <td >Gender</td>
            <td>
            <input type="radio" id="male" name="gender" value="male"/>
            <label for="male">Male</label>

            <input type="radio" id="female" name="gender" value="female"/>
            <label for="male">Female</label>
            
     </td>
        </tr>

        <tr>
            <td>Course</td>
            <td>
            <input type="checkbox" id="mca" name="course" value="mca"/>
    <label for="mca">MCA</label>
    <input type="checkbox" id="bca" name="course" value="bca"/>
    <label for="bca">BCA</label>
    <input type="checkbox" id="bsc" name="course" value="bsc"/>
    <label for="bsc">BSC</label>
            </td>
        </tr>
        <tr>
            <td> <label>File Upload</label></td>
           
           <td><input type="file" /></td>
        </tr>
        </table>
       
        
    </div>
  )
}

export default Create