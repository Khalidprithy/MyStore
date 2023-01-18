import React from 'react';
import PasswordGenerator from './PasswordGenerator';
import QuestionsAccordion from './QuestionsAccordion';

const PasswordHome = () => {
    return (
        <div>
            <PasswordGenerator />
            <QuestionsAccordion />
        </div>
    );
};

export default PasswordHome;