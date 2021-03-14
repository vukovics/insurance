import React, { useState } from 'react';

interface EmailStepProps {
    cb: (field: string, value: string) => void,
}

const EmailStep: React.FC<EmailStepProps> = ({cb}) => {

    const [email, setEmail] = useState<string>('');

    const handleNextStep = (event: React.SyntheticEvent) => {
        event.preventDefault();
        email && cb('email', email);
    };

    return <>
        <form onSubmit={handleNextStep}>
            <label htmlFor="email"> Email: </label>
            <input
                id="email"
                name="email"
                type='email'
                onChange={({target: {value}}) => {setEmail(value)}}
                value={email}
                required
            />
            <button type='submit'>Next</button>
        </form>
    </>;
};

export default EmailStep;
