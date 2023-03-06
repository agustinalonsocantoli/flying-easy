// Components
import { Login } from "./components/Login/Login"
import { Home } from './pages/Home/Home'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
// React
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// Redux
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"


function App() {
  const { users } = useSelector(state => state.login)

  const [ emailInput, setEmailInput ] = useState(null);
  const [ passwordInput, setPasswordInput ] = useState(null);
  const [ view, setView ] = useState(localStorage.getItem('login') ? true : false);

  let validateUser = users.find(user => user.email === emailInput)

  return (
    <Router>

      {view && <Navbar 
      user={validateUser}
      setView={setView}
      />}

      <Routes>
        <Route path='/login' element={<Login 
        setEmailInput={setEmailInput} 
        setPasswordInput={setPasswordInput} 
        passwordInput={passwordInput}
        user={validateUser}/>}
        />

        <Route element={ <RequireAuth user={validateUser} setView={setView}/>} >
          <Route path='/' element={<Home />} />
          <Route path='*' element={ <Navigate to={'/'} />} />
        </Route>
      </Routes>

      {view && <Footer />}

    </Router>
  )
}

export default App
