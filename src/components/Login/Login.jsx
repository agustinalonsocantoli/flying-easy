// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Custom Hook
import { useAuthContex } from "../../App";
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

export const Login = () => {
    const navigate = useNavigate();
    const { email, password, dispatch } = useAuthContex();
    const [ emailInput, setEmailInput ] = useState('test@test.com');
    const [ passwordInput, setPasswordInput ] = useState('admin');

    const handleSubmit = (e) => {
        e.preventDefault();

        if( emailInput === email && passwordInput === password) {
            dispatch({
                type: 'LOG_IN',
                payload: true,
            });

            navigate('/')
            localStorage.setItem('login', JSON.stringify(email));
        } else {
            alert('Email or Password is not correct')
            e.target.reset()
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
                    <label htmlFor="email">Email</label>
                    <IconBox>
                        <Icon><MdOutlineMailLock /></Icon>
                        <input type="email" name="email" defaultValue={email} onChange={({ target }) => setEmailInput(target.value)}/>
                    </IconBox>
                    
                    <label htmlFor="password">Password</label>
                    <IconBox>
                        <Icon><MdPassword /></Icon>
                        <input type="password" name='password' defaultValue={password} onChange={({ target }) => setPasswordInput(target.value)}/>
                    </IconBox>

                    <ButtonBox>
                        <button onClick={() => navigate('/register')}><FiUserPlus />Sign in</button>
                        <button type='submit'><SlLogin />Log in</button>
                    </ButtonBox>
                </Form>
            </ContentBox>
        </LoginBox>
    );
}