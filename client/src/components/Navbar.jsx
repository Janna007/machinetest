import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const user = localStorage.getItem("userData");
    const userData = JSON.parse(user);
    
  return (
    <div>
        
      
         <tr  style={{backgroundColor:"grey"}}>
        
          <td  colSpan={2}>
          <Link to={"/home"}>
            Home
            </Link>
           </td>
         
         
           <td colSpan={2}>
           <Link to={"/emplist"}>
            Employee list
            </Link>
          
            
            </td>
         
           <td colSpan={2}>{userData?.username}</td>
           <td >Logout</td>
         </tr>
    
       

   
    </div>
  )
}

export default Navbar