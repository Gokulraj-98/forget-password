import { useState } from 'react'
import { Login } from './components/Login'
import { Register } from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { ResetPassword } from './components/Resetpassword'
import { VerifyCode } from './components/verifyCode'
import { ChangePassword } from './components/ChangePassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/verify-code' element={<VerifyCode />}></Route>
          <Route path='/change-password' element={<ChangePassword />}></Route>
          <Route path='/reset' element={<ResetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
