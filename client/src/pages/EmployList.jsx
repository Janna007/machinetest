import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function EmployList() {

  const [data,setData]=useState(null)
  const [count,setCount]=useState(0)

  useEffect( ()=>{
    const fetchData=async ()=>{
      try {
        const res=await fetch("http://localhost:4000/api-v1/employee/allEmployee",{
         method:"GET",
         headers:{
           "Content-Type":"application/json",
           
          }
        })
 
        const data=await res.json()
        console.log(data)
        setCount(data?.totalDocuments)
       setData(data?.allEmployee)
     } catch (error) {
       console.log(error)
     }
    }
        fetchData()
  },[])



  return (
    <div>
        <table>
          <Navbar/>
          <tr>
            <td colSpan={10} style={{backgroundColor:"yellow"}}>EmployList</td>
          </tr>
          <tr>
            <td colSpan={8}>Total count:{count}</td>
            <Link to={"/home"}>
            <td ><button>Create Employee</button></td>
            </Link>
        </tr>
        <tr>
              <td colSpan={8}>search</td>
              <td><input type='search' name='search' placeholder='Enter search keyword' /></td>
            </tr>

            <tr  style={{backgroundColor:"grey"}}>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>designation</th>
              <th>gender</th>
              <th>course</th>
              <th>createDate</th>
              <th>Action</th>
            </tr>
          {data?.map((each,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{each.name}</td>
              <td>{each.email}</td>
              <td>{each.mobile}</td>
              <td>{each.designation}</td>
              <td>{each.gender}</td>
              <td>{(each.courses)}</td>
              <td>{each.createdAt}</td>
              <Link to={`/edit/${index}`}>
              <td>
               Edit-Delete
              </td>
              </Link>
             
           </tr>
          ))}
           
        </table>
       
    </div>
  )
}

export default EmployList