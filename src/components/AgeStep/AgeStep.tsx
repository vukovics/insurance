import React, { useState } from 'react';

interface AgeStepProps {
    cb: (field: string, value: number) => void,
}

const AgeStep: React.FC<AgeStepProps> = ({cb}) => {

    const [age, setAge] = useState<number>(0);

    const handleNextStep = (event: React.SyntheticEvent) => {
        event.preventDefault();
        age > 0 && cb('age', age);
    };

    return <>
        <form onSubmit={handleNextStep}>
            <label htmlFor="age"> Age: </label>
            <input
                id="age"
                name="age"
                type='number'
                onChange={({target: {value}}) => {setAge(Number(value))}}
                value={age}
                required
            />
            <br/>
            <button type='submit'>Next</button>
        </form>
    </>;
};

export default AgeStep;
