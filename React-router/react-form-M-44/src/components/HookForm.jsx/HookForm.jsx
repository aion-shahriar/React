import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');

    const [email, emailOnChange] = useInputField('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted', name, email);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} />
                <br />
                <input type="email" name="email" id="email" defaultValue={email} onChange={emailOnChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm; 