import React, {useState} from 'react';

function Contact() {
    const [ contactName, setContactName ] = useState('');
    const [ contactEmail, setContactEmail ] = useState('');
    const [ contactMsg, setContactMsg ] = useState('');

    return (
        <div>
            My Contact Form
        </div>
    );
}

export default Contact;