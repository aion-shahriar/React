import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Your Name'/>
                <br />
                <input type="email" name="email" id="" placeholder='Your Email'/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;