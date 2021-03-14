import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

interface SummaryStepProps {
    collectedData: {
        name: string,
        email: string,
        age: number,
    },
};

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
    const { name, email, age } = collectedData
    return <>
        <div>
            <label htmlFor="fullname"> Name: </label>
            <div id="fullname">{name}</div>
        </div>
        <div>Email: {email}</div>
        <div>Age: {age}</div>
        <div>
            <BrowserRouter>
                <Link to='/purchased=dev_ins'>Purchase</Link>
            </BrowserRouter>
        </div>
    </>;
};

export default SummaryStep;
