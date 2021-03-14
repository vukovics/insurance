import React, {useState} from 'react';

interface NameStep {
    cb: (field: string, value: string) => void,
}

const NameStep: React.FC<NameStep> = ({cb}) => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const handleNextStep = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if(firstName && lastName) {
            cb('name', `${firstName} ${lastName}`);
        }

    }

    return <>

        <form onSubmit={handleNextStep}>
            <label htmlFor="firstname"> First Name: </label>
            <input
                name='firstname'
                id="firstname"
                onChange={({target: {value}}) => {setFirstName(value)}}
                value={firstName}
                required
            />
            <br/>
            <label htmlFor="lastname">Last Name: </label>
            <input
                id="lastname"
                name='lastname'
                onChange={({target: {value}}) => {setLastName(value)}}
                value={lastName}
                required
            />
            <br/>
            <button type="submit">Next</button>
        </form>

    </>;
}

export default NameStep;
