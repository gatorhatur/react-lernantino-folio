import React, {useState} from 'react';

function Contact() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'email') {
            //since this is the only place this will go in the code I won't create seperate function
            const isValid = e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            !isValid ? setErrorMessage('Your email address is invalid') : setErrorMessage('')
        }
        else {
            !e.target.value.length ? setErrorMessage(`You must have a ${e.target.id}!`) : setErrorMessage('');
        }

        if (!errorMessage) {
 
            setContact({...contact, [e.target.id]: e.target.value})
        }

    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(contact)
    }

    return (
        <div data-testid='contact-form' className="container mt-5">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Your name:</label>
                    <input type="text" class="form-control" id="name" onBlur={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" onBlur={handleChange}></input>
                </div>
                <div class="mb-3">
                    <label class="form-check-label" for="message">Message:</label>
                    <textarea type="text" class="form-control" id="message" rows='8' onBlur={handleChange}></textarea>                    
                </div>
                <button type="submit" class="btn btn-primary" data-testid="submit-button" onSubmit={handleSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="text-danger display-6">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;