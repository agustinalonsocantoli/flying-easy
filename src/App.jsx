// Components
import { Login } from "./components/Login/Login"
import { Home } from './pages/Home/Home'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
// React
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// Redux
import { useSelector } from "react-redux";


function App() {
  const { users } = useSelector(state => state.login)

  const [ emailInput, setEmailInput ] = useState('test@test.com');
  const [ passwordInput, setPasswordInput ] = useState('admin');

  let validateUser = users.find(user => user.email === emailInput)
  

  return (
    <Router>

      <Routes>

        <Route path='/login' element={<Login 
        setEmailInput={setEmailInput} 
        setPasswordInput={setPasswordInput} 
        passwordInput={passwordInput}
        user={validateUser}/>} 
        />

        <Route element={ <RequireAuth user={validateUser}/>} >
          <Route path='/' element={<Home />} />
          <Route path='*' element={ <Navigate to={'/'} />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
