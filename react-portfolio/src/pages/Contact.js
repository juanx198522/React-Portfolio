import React from 'react';

function Contact() {
    return (
        <form className='form'>
            <div className='form-row'>
                <h2>Contact</h2>
                <label htmlFor='name'>Name: </label>
                <br></br>
                <input type='text' id='name'></input>
                <br></br>
                <label htmlFor='email'>Email:</label>
                <br></br>
                <input type='text' id='email'></input>
                <br></br>
                <label htmlFor='message'>Message:</label>
            </div>
            <button className='btn'>Submit</button>
        </form>
    )
}

export default Contact; 