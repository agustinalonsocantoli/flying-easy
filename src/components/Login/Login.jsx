// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { setLogin } from "../../feature/LoginSlice";
// Icons
import { MdOutlineMailLock } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";
// Image
import imgLogin from '../../assets/imgLogin.png'
import logo from '../../assets/Logo.png'
// Styled
import { LoginBox, ImgBox, Logo, Form, ContentBox, ButtonBox, IconBox, Icon } from './LoginStyled'
// Components
import { Register } from "../Register/Register";


export const Login = ({ setEmailInput, setPasswordInput, passwordInput, user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ register, setRegister ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(user !== undefined && user !== null) {
            if(user.password === passwordInput) {
                dispatch(setLogin({
                    ...user,
                    auth: true
                }));
    
                navigate('/')
                localStorage.setItem('login', JSON.stringify(user.email));

            } else {
                alert('Password is not correct')
            }

        } else {
            alert('Email is not register')
            e.target.reset();
        }   
    }

    return(
        <LoginBox>
            <ImgBox>
                <img src={imgLogin} alt="img/login" />
            </ImgBox>

            <ContentBox>
                <div>
                    <h1>Welcome to the new experience of traveling</h1>
                </div>

                <Logo>
                    <img src={logo} alt="img/logo" />

                    <div>
                        <h3>Flaying</h3>
                        <h3>Easy</h3>
                    </div>
                </Logo>

                <Form onSubmit={handleSubmit}>
                    <label htmlFor="emailLogin">Email</label>
                    <IconBox>
                        <Icon><MdOutlineMailLock /></Icon>
                        <input type="email" name="emailLogin" onChange={({ target }) => setEmailInput(target.value)}/>
                    </IconBox>
                    
                    <label htmlFor="passwordLogin">Password</label>
                    <IconBox>
                        <Icon><MdPassword /></Icon>
                        <input type="password" name='passwordLogin' onChange={({ target }) => setPasswordInput(target.value)}/>
                    </IconBox>

                    <ButtonBox>
                        <button type='submit'><SlLogin />Log in</button>
                        <button onClick={(e) => { e.preventDefault(); setRegister(true);}}><FiUserPlus />Sign in</button>
                    </ButtonBox>
                </Form>
            </ContentBox>

            {register && <Register setRegister={setRegister} />}
        </LoginBox>
    );
}