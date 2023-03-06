// React
import { NavLink, useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { setLogout } from '../../feature/LoginSlice';
// Icons
import { SlLogout } from "react-icons/sl";
// Styled
import { NavbarBox } from './NavbarStyled';
// Libraries
import toast from 'react-hot-toast';

export const Navbar = ({ user, setView }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setLogout({
            ...user,
            auth: false
        }))

        setView(false);
        localStorage.removeItem('login');
        toast.success('Logout successful');
        navigate('/login');
    };

    return(
        <NavbarBox>
            <ul>
                <NavLink>Home</NavLink>
            </ul>

            <div>
                <button onClick={handleClick}><SlLogout />Logout</button>
            </div>
        </NavbarBox>
    )
}