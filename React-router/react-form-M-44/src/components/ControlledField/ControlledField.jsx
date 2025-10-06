import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');


    const [email, setEmail] = useState('');


    const [password, setPassword] = useState('');

    const [error, setError] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Submitted");
        console.log(name, email, password);
        
        

    }


    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else {
            setError('');
        }
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder='Your Name' defaultValue={name} onChange={handleNameChange} required/>
                <br />
                <input type="email" name="email" id="email" placeholder='Your Email' defaultValue={email} onChange={handleEmailChange} required/>
                <br />
                <input type="password" name="password" id="password" placeholder='Your Password' defaultValue={password} onChange={handlePasswordChange} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
        
    );
};

export default ControlledField;