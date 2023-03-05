// Components
import { Login } from "./components/Login/Login"
import { Home } from './pages/Home/Home'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import { Register } from './components/Register/Register'
// React
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import React, { useContext, useReducer } from "react";


const AuthContext = React.createContext();

const initialState = {
    auth: localStorage.getItem('login') ? true : false,
    email: 'test@test.com',
    password: 'admin', 
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOG_IN': return {
            ...state,
            auth: action.payload,
        }
        case 'LOG_OUT': return {
            ...state,
            auth: action.payload,
        }
        default:
            return state
    }
}

export const useAuthContex = () => {
  return useContext(AuthContext);
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <Router>
      <AuthContext.Provider value={{ auth: state.auth, email: state.email, password: state.password, dispatch }}>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={ <RequireAuth />} >
            <Route path='/' element={<Home />} />
            <Route path='*' element={ <Navigate to={'/'} />} />
          </Route>
        </Routes>

      </AuthContext.Provider>
    </Router>
  )
}

export default App
