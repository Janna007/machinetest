

import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Create from './pages/Create'
import EmployList from './pages/EmployList'
import Edit from './pages/Edit'

function App() {

  return (
    <>
    <Routes>
      <Route  path='/'  element={ <SignUp/>} />
      <Route  path='/dashboard'  element={<Home/>} />
      <Route path='/home' element={<Create/>}  />
      <Route  path='/emplist'  element={<EmployList/>}/>
      <Route path='/edit/:index' element={<Edit/>} />
    </Routes>
     
    </>
  )
}

export default App
