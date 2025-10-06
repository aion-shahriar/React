import React, { useRef } from 'react';

const UnControlledField = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email);
        console.log(password);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required/>
                <br />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='Your Password' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;