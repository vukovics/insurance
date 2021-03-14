import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

interface SummaryStepProps {
    collectedData: {
        email: string,
        age: number,
    },
};

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
    const {  email, age } = collectedData
    return <>
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
