// Redux
import { useDispatch } from 'react-redux';
import { setNewUser } from '../../feature/LoginSlice';
// Styled
import { RegisterBox, Form, ButtonBox } from './RegisterStyled';
// Libraries
import toast from 'react-hot-toast';

export const Register = ({ setRegister }) => {
    const dispatch = useDispatch();
    
    const handleSubmitRegister = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let confirmEmail = e.target.confirmEmail.value;
        let password = e.target.password.value;
        let confirmPassword = e.target.confirmPassword.value;

        if(email === confirmEmail) {
            if(password === confirmPassword) {
                dispatch(setNewUser(
                    {
                        email: email,
                        password: password,
                        auth: false,
                    }
                ))
                
                toast.success(`New user ${email} created`);
                setRegister(false);
            } else {
                toast.error(`Password must be the same`);
            }
        } else {
            toast.error(`Emails must be the same`);
        }
    };

    return(
        <RegisterBox>
            <Form onSubmit={handleSubmitRegister}>
                <h1>Register New User</h1>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="email">Confirm Email</label>
                <input type="email" name="confirmEmail" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirmPassword" />

                <ButtonBox>
                    <button type='submit'>Register</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        setRegister(false);
                    }}>
                        Cancel
                    </button>
                </ButtonBox>
            </Form>
        </RegisterBox>
    )
}