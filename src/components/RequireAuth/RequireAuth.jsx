// React
import { Navigate, Outlet } from "react-router-dom";
// Redux
import { useEffect, useState } from "react";

export const RequireAuth = ({user}) => {

    const [ auth, setAuth ] = useState(false)

    useEffect(() => {
        if(user !== undefined && user !== null) {
            setAuth(user.auth)
        }

    }, [user])

    return(
        !auth && !localStorage.getItem('login') ?
        <Navigate to={'/login'}/> : <Outlet />
    ); 
}