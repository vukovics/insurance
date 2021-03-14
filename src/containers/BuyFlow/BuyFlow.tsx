import React, { useState } from 'react';
import AgeStep from '../../components/AgeStep';
import EmailStep from '../../components/EmailStep';
import NameStep from '../../components/NameStep';
import SummaryStep from '../../components/SummaryStep';

interface BuyflowProps {
    productId: ProductIds,
};

export enum ProductIds {
    devIns = 'dev_ins'
}

const PRODUCT_IDS_TO_NAMES= {
    [ProductIds.devIns]: 'Developer Insurance',
}

const BuyFlow: React.FC<BuyflowProps> = (props) => {
    const [currentStep, setStep] = useState('name');

    const [collectedData, updateData] = useState({
        'name' : '',
        'email': '',
        'age': 0,
    });

    const getStepCallback = (nextStep:string) => (
        (field: string, value: any) => {
            updateData({...collectedData, [field]: value});
            setStep(nextStep);
        }
    );

    const renderCurrentStep = () => {
        switch(currentStep) {
            case 'name':
                return <NameStep cb={getStepCallback('email')} />
            case 'email':
                return <EmailStep cb={getStepCallback('age')} />
            case 'age':
                return <AgeStep cb={getStepCallback('summary')} />
            case 'summary':
                return <SummaryStep collectedData={collectedData} />
        }
    }

    return <>
        <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
        {renderCurrentStep()}
    </>;
};

export default BuyFlow;
