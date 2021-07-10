import React, { useState } from  'react';
import FormCard from '../components/UI/FormCard';
import './UserForm.css'
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const firstNameHandler = (e) => {
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!");
        }
        else {
            setFirstNameError("");
            setFirstName(e.target.value);
        }

    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters!");
        }
        else {
            setLastNameError("");
            setLastName(e.target.value);
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        }
        else {
            setEmailError("");
            setEmail(e.target.value);
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Email must be at least 8 characters!");
        }
        else if(e.target.value !== confirmPassword) {
            setPasswordError("Passwords must match!");
        }
        else {
            setPasswordError("");
            setPassword(e.target.value);
        }
    }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
        }
        else {
            setConfirmPasswordError("");
            setPasswordError("");
            setConfirmPassword(e.target.value);
        }
    }
    
    return (
        <FormCard className="user-form">
        <form onSubmit={ (e) => e.preventDefault() }>
	        <div className="form-item">
                <label>First Name: </label> 
                <input type="text" onChange={ firstNameHandler } />
                
            </div>
            {
                firstNameError ?
                <p style={{color:'red'}}>{ firstNameError }</p> :
                ''
            }
            <div className="form-item">
                <label>Last Name: </label> 
                <input type="text" onChange={ lastNameHandler } />
                
            </div>
            {
                lastNameError ?
                <p style={{color:'red'}}>{ lastNameError }</p> :
                ''
            }
            <div className="form-item">
                <label>Email Address: </label> 
                <input type="text" onChange={ emailHandler } />
                
            </div>
            {
                emailError ?
                <p style={{color:'red'}}>{ emailError }</p> :
                ''
            }
            <div className="form-item">
                <label>Password: </label>
                <input type="text" onChange={ passwordHandler } />
                
            </div>
            {
                passwordError ?
                <p style={{color:'red'}}>{ passwordError }</p> :
                ''
            }
            <div className="form-item">
                <label>Confirm Password: </label>
                <input type="text" onChange={ confirmPasswordHandler } />
                
            </div>
            {
                confirmPasswordError ?
                <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                ''
            }
        </form>
        </FormCard>
    );
};
    
export default UserForm;
