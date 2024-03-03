import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <table>
         <Navbar/>
         <tr>
          <th>
            DashBoard
          </th>
         </tr>
         <tr style={{height:'70px',textAlign:'center'}}>
           <td colSpan={6}>Welcome Admin panel</td>
         </tr>
      </table>
     

       

    </div>
  )
}

export default Home